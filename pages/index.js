import { getSession, getHeaderProps } from "../lib/get-session.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Button from "@mui/material/Button";
import Link from "next/link";
import Box from "@mui/material/Box";
import ResourceDrawer from "./components/ResourceDrawer.js";
import { getAllResources } from "./api/resources";

function decideContent(userInfo) {
  return userInfo ? (
    "authenticated"
  ) : (
    <div style={{ margin: "auto", padding: "30px" }}>
      <Button variant="outlined">
        <Link href="/api/login">Login</Link>
      </Button>
    </div>
  );
}

export default function page({ headerProps, resources }) {
  return (
    <Box sx={{ bgcolor: "#fafafa", height: "100%" }}>
      <div className="container">
        <Header userInfo={headerProps.userInfo} message={headerProps.message} />
        <div className="content-wrapper">
          <Box
            sx={{
              bgcolor: "#fafafa",
              padding: "10px",
              width: "100%",
            }}
          >
            {decideContent(headerProps.userInfo)}
          </Box>
          {headerProps.userInfo && (
            <ResourceDrawer resources={resources}></ResourceDrawer>
          )}
        </div>

        <Footer />
      </div>
    </Box>
  );
}

export async function getServerSideProps({ req, res }) {
  var session = await getSession(req, res);
  var headerProps = await getHeaderProps(session);
  const resources = await getAllResources();
  await session.commit();

  return {
    props: { headerProps, resources },
  };
}
