import { getSession } from "../lib/get-session.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Button from "@mui/material/Button";
import Link from "next/link";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

function decideContent(userInfo) {
  return userInfo ? (
    "authenticated"
  ) : (
    <div style={{margin: 'auto', padding: '30px'}}>
      <Button variant="outlined">
        <Link href="/api/login">Login</Link>
      </Button>
    </div>
  );
}

export default function page({ userInfo, message }) {
  return (
    <Box sx={{ bgcolor: "#f5f5f5", height: "100%" }}>
      <Container className="container" maxWidth="lg">
        <Header userInfo={userInfo} message={message} />
        <Box sx={{ bgcolor: "#fafafa", height: "100%" }}>
          {decideContent(userInfo)}
        </Box>
        <Footer />
      </Container>
    </Box>
  );
}

export async function getServerSideProps({ req, res }) {
  var session = await getSession(req, res);
  var message = session.message;
  session.message = "";
  await session.commit();
  return {
    props: {
      userInfo: session.userInfo ? session.userInfo : null,
      message: message ? message : "",
    },
  };
}
