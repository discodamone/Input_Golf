import {getSession} from "../../../lib/get-session.js";
var http = require('axios');

export default async function handler(req, res) 
{
	var session = await getSession(req, res);
	//var response = await http.get('https://api.github.com/user',{headers:{Authorization: 'Bearer ' + session.oauth_token}});
	res.status(200).json(session);
}
