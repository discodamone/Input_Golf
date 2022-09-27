import {getSession} from "../lib/get-session.js"
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"

function decideContent(userInfo)
{
	return userInfo ? "authenticated" : "unauthenticated";
}

export default function page({userInfo, message})
{
	return <div><Header userInfo={userInfo} message={message}/>{decideContent(userInfo)}<Footer /></div>;
}

export async function getServerSideProps({req, res})
{
	var session = await getSession(req, res);
	var message = session.message;
	session.message = "";
	await session.commit();
	return {props:{userInfo: session.userInfo ? session.userInfo : null, message: message ? message : ""}}
}
