var http = require('axios');
import {getSession} from "../../lib/get-session.js";

export default async function(req, res) 
{
	var session = await getSession(req, res);
	var response = await http.post('https://github.com/login/oauth/access_token', {client_id: process.env.CLIENT_ID, client_secret: process.env.CLIENT_SECRET, code: req.query.code, redirect_uri: process.env.BASE_URL + "/api/login_callback"});
	session.oauth_token = (new URLSearchParams(response.data).get('access_token')); 
	await session.commit();
	res.redirect(302, process.env.BASE_URL);

}
