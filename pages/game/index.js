import GameState from "../components/GameState";
import { getSession, getHeaderProps } from "../../lib/get-session.js";
import { getAllResources } from "../api/resources";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Box from "@mui/material/Box";
import ResourceDrawer from "../components/ResourceDrawer.js";

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
            <GameState />
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

export async function getServerSideProps({ req, res, query }) {
  var session = await getSession(req, res);
  var headerProps = await getHeaderProps(session);
  const resources = await getAllResources();
  console.log(query);
  return {
    props: {
      headerProps,
      resources,
    },
  };
}
