import { getSession, getHeaderProps } from "../lib/get-session.js";
import Header from "./components/Header.js";
import MCQuiz from "./components/MCQuiz.js";
import Footer from "./components/Footer.js";
import Button from "@mui/material/Button";
import Link from "next/link";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";


export default function page({ userInfo, message, quizInfo }) {
  return (
    <Box sx={{ bgcolor: "#f5f5f5", height: "100%" }}>
      <Container className="container" maxWidth="lg">
        <Header userInfo={userInfo} message={message} />
        <Box sx={{ bgcolor: "#fafafa", height: "100%" }}>
          <MCQuiz quizInfo={quizInfo} style={{width:"50%", margin: "auto"}}></MCQuiz>
        </Box>
        <Footer />
      </Container>
    </Box>
  );
}

export async function getServerSideProps({ req, res }) {
    var session = await getSession(req, res);
    var headerProps = await getHeaderProps(session);
    var quizInfo = {id: 1, topic: 2, question: "What is 2+2?", answers:["abc","4","3","2"]};
    return {
      props: {...headerProps, quizInfo}
    };
  }