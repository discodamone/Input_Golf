var http = require('axios');
import {getSession} from "../../lib/get-session.js";

export default async function(req, res) 
{
	var session = await getSession(req, res);
	var response = await http.post('https://github.com/login/oauth/access_token', {client_id: process.env.CLIENT_ID, client_secret: process.env.CLIENT_SECRET, code: req.query.code, redirect_uri: process.env.BASE_URL + "/api/login_callback"});
	var userInfoResponse = await http.get('https://api.github.com/user',{headers:{Authorization: 'Bearer ' + (new URLSearchParams(response.data).get('access_token'))}});
	session.userInfo = {gh_id: userInfoResponse.data.id, username: userInfoResponse.data.login};
	session.message = "Successfully signed in."
	await session.commit();
	res.redirect(302, process.env.BASE_URL);
	
}
