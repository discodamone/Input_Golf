import {Stack, Button} from "@mui/material";
//import Item from "@mui/material/Item";

export default function MCQuiz({quizInfo, style})
{
    console.log(quizInfo.answers)
    return <div style={style}>
        <div style={{"text-align":"center", padding:"10px"}}>
        {quizInfo.question}
        </div>
        
        <Stack>
        {quizInfo.answers.map((ans, index)=><Button key={index}>{ans}</Button>)}
        </Stack>
        </div>;
}
