import { getSession, getHeaderProps } from "../lib/get-session.js";
import Header from "./components/Header.js";
import MCQuiz from "./components/MCQuiz.js";
import Footer from "./components/Footer.js";
import Button from "@mui/material/Button";
import Link from "next/link";
import Container from "@mui/material/Container";
import {Stack, Snackbar, Alert} from "@mui/material";
import ResourceDrawer from "./components/ResourceDrawer.js";
import Box from "@mui/material/Box";
import { getProgress } from "./api/user/progress.js";
import React, {useState} from 'react';
import { getAllResources} from "./api/resources";
import { SensorDoorTwoTone } from "@mui/icons-material";



export default function page({ csrfToken, message, headerProps, quizQuestions, resources, firstId }) {

  const [currentId, setCurrentId] = useState(firstId);
  const [wrongOpen, setWrongOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);
  const [tempQuizQuestions, setTempQuizQuestions] = useState(quizQuestions);
  const [done, setDone] = useState(false);
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
    const response = await fetch('/api/quizzes/solve?csrfToken=' + csrfToken + '&qId=' + currentId + '&answerIndex=' + answerIndex);
    var data = await response.json();
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
            setDone(true);
            location.href = '/';
          }
        }

      }
    }
    else
    {
      console.log('wrong answer provided');
      setWrongOpen(true);
    }

  }
  
  return (
    <div>
    <Box sx={{ bgcolor: "#f5f5f5", height: "100%" }}>
      
        <Header userInfo={headerProps.userInfo} message={message} />
        <div className="content-wrapper">
        <Box sx={{
              bgcolor: "#fafafa",
              padding: "10px",
              width: "100%",
            }}>
          {
          (!done) ?   (
          <div style={{width:"50%", margin: "auto"}}>
          <div style={{"text-align":"center", padding:"10px"}}>
          {tempQuizQuestions[0].question}
          </div>
          <Stack>
          {tempQuizQuestions[0].answers.map((ans, index)=><Button variant="contained" key={index} onClick={()=>{solve(index)}}>{ans}</Button>)}
          </Stack>
          </div>
          )
          : ""
        }
        </Box>
        
        {headerProps.userInfo && (
            <ResourceDrawer resources={resources}></ResourceDrawer>
          )}
        </div>
        <Footer />
      
    </Box>
    <Snackbar open={wrongOpen} onClose={handleWrongClose} autoHideDuration={1500}><Alert severity="error" onClose={handleWrongClose}>{"Wrong answer :(. Try again."}</Alert></Snackbar>

    <Snackbar open={rightOpen} onClose={handleRightClose} autoHideDuration={1500}><Alert severity="success" onClose={handleRightClose}>{"Nice job! You got the right answer!"}</Alert></Snackbar>
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
    var session = await getSession(req, res);
    var csrfToken = session.csrfToken;
    var headerProps = await getHeaderProps(session);
    var quizQuestions = (await getProgress(req, res)).solvedArray;
    var message = session.message;
    const resources = await getAllResources();
    var firstId = quizQuestions[0].id;
    return {
      props: {csrfToken, message, headerProps, quizQuestions, resources, firstId}
    };
  }