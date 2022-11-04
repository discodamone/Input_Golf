import { getSession, getHeaderProps } from "../lib/get-session.js";
import Header from "./components/Header.js";
import MCQuiz from "./components/MCQuiz.js";
import Footer from "./components/Footer.js";
import Button from "@mui/material/Button";
import Link from "next/link";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { getProgress } from "./api/user/progress.js";



export default function page({ session, userInfo, message, quizQuestions }) {

  const [currentId, setCurrentId] = useState(quizQuestions[0].id);
  const [wrongOpen, setWrongOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);
  const [tempQuizQuestions, setTempQuizQuestions] = useState(quizQuestions);
  const handleWrongClose = ()=>
  {
    setWrongOpen(false);
  }
  const handleRightClose = ()=>
  {
    setRightOpen(false);
  }
  const solve = async (answerIndex)=>
  {
    const response = await fetch('/api/quizzes/solve?csrfToken=' + session.csrfToken + '&qId=' + currentId + '&answerIndex=' + answerIndex);
    data = await response.json();
    if (data.solved == true)
    {
      for (var i = 0; i < tempQuizQuestions.length; i++)
      {
        if (tempQuizQuestions[i].id == currentId)
        {
          tempQuizQuestions.splice(i, 1);
          setTempQuizQuestions(tempQuizQuestions);
          setRightOpen(true);
          if (i < tempQuizQuestions.length)
          {
            setCurrentId(tempQuizQuestions[i].id);
          }
          else
          {
            location.href = '/';
          }
        }
        else
        {
          setWrongOpen(true);
        }
      }
    }

  }
  
  return (
    <div>
    <Box sx={{ bgcolor: "#f5f5f5", height: "100%" }}>
      <Container className="container" maxWidth="lg">
        <Header userInfo={userInfo} message={message} />
        <Box sx={{ bgcolor: "#fafafa", height: "100%" }}>
          <div style={{width:"50%", margin: "auto"}}>
          <div style={{"text-align":"center", padding:"10px"}}>
          {tempQuizQuestions[0].question}
          </div>
          
          <Stack>
          {tempQuizQuestions[0].answers.map((ans, index)=><Button variant="contained" key={index} onClick={()=>{solve(index)}}>{ans}</Button>)}
          </Stack>
          </div>
        </Box>
        <Footer />
      </Container>
    </Box>
    <Snackbar open={wrongOpen} onClose={handleWrongClose} autoHideDuration={1500}><Alert severity="error" onClose={handleWrongClose}>{"Wrong answer :( try again."}</Alert></Snackbar>

    <Snackbar open={rightOpen} onClose={handleRightClose} autoHideDuration={1500}><Alert severity="success" onClose={handleRightClose}>{"Nice job! You got the right answer!"}</Alert></Snackbar>
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
    var session = await getSession(req, res);
    var headerProps = await getHeaderProps(session);
    var quizQuestions = await getProgress(req, res).solvedArray;
    return {
      props: {...session, headerProps, quizQuestions}
    };
  }