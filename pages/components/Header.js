function signoutLink(userInfo)
{
	return userInfo ? <div id="signoutLink"><a href="/api/logout">Sign Out</a></div> : ""
}

export default function Header(props)
{
	return <div id="header">Input Golf {signoutLink(props.userInfo)}<div id="message">{props.message}</div></div>
}
