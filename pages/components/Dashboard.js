import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Link from "next/link";
import {Snackbar, Alert} from "@mui/material";
import { SettingsPowerRounded } from "@mui/icons-material";
import React, {useState} from 'react';
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import Table from "@mui/material/Table"
import TableContainer from "@mui/material/TableContainer"
import TableCell from "@mui/material/TableCell"
import TableHead from "@mui/material/TableHead"
import TableBody from "@mui/material/TableBody"
import Paper from "@mui/material/Paper"
import TableRow from "@mui/material/TableRow"

function userName(userInfo) {
	console.log('username', userInfo)
  return userInfo ? userInfo.username : "";
}

function continueButton(props)
{
  return (props.userInfo.gameInProgress) ? (<Button variant="contained">Continue {props.userInfo.gameInProgress.name}</Button>) : "";
}

export default function Dashboard(props) {
  const [open, setOpen] = React.useState(false);
  function warningClose()
  {
    setOpen(false);
  }
  function warningOpen()
  {
    if (props.userInfo.gameInProgress)
    {
      setOpen(true);
    }
  }

  return (
    <div className="dashboard">
      <div id="welcome-message" style={{margin:'auto',width:'50%','textAlign':'center'}}>
        Welcome, {props.userInfo.username}!
        <br />
        <br />
        <Button variant="contained" onClick={warningOpen()} href="/game">New Game</Button>
        <br />
        <br />
        {continueButton(props)}
        <br />
        <br />
        Progress
        <br />
        <br />
        <TableContainer component={Paper}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Hole</TableCell>
                <TableCell align="right">Score</TableCell>
                <TableCell align="right">Par</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {props.holes.map((row)=>
              { return (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id + ". " + row.name}
                  </TableCell>
                  <TableCell align="right">{row.score}</TableCell>
                  <TableCell align="right">{row.par}</TableCell>
                </TableRow>
              )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Dialog open={open} onClose={warningClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">

          <DialogTitle id="alert-dialog-title">
            {"Create a new game?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
            {"Creating a new game will overwrite your existing game. Do you still want to create a new game?"}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={warningClose}>Cancel</Button>
            <Button onClick={warningClose}>Yes</Button>
          </DialogActions>
      </Dialog>


    </div>
  );
}

