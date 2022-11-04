import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Link from "next/link";
import {Snackbar, Alert} from "@mui/material";
import { SettingsPowerRounded } from "@mui/icons-material";
import React, {useState} from 'react';

function signoutLink(userInfo) {
  return userInfo ? (
    <Button variant="text">
      <Link href="/api/logout">Sign Out</Link>
    </Button>
  ) : (
    ""
  );
}

function userName(userInfo) {
	console.log('username', userInfo)
  return userInfo ? userInfo.username : "";
}





export default function Header(props) {
  const [open, setOpen] = useState(!!props.message);
  function handleClose()
  {
    setOpen(false)
  }
  return (
    <div className="header-wrapper">
      <div className="header">
        <div style={{padding: 10 + 'px', alignSelf: 'center'}}><a href="/" style={{textDecoration: 'none'}}>Input Golf</a></div>
        <div className="user-info">
			<span style={{marginRight: 5 + 'px'}}>
          {userName(props.userInfo)}
		  </span>
          {signoutLink(props.userInfo)}
        </div>
        <Snackbar open={open} onClose={handleClose} autoHideDuration={3000}><Alert severity="info" onClose={handleClose}>{props.message}</Alert></Snackbar>
      </div>
      
      <Divider></Divider>
      
      
    </div>
  );
}
