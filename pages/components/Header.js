import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Link from "next/link";

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
  return (
    <div className="header-wrapper">
      <div className="header">
        <div style={{padding: 10 + 'px', alignSelf: 'center'}}>Input Golf</div>
        <div className="user-info">
			<span style={{marginRight: 5 + 'px'}}>
          {userName(props.userInfo)}
		  </span>
          {signoutLink(props.userInfo)}
        </div>
      </div>
      <Divider></Divider>
    </div>
  );
}
