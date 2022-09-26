import {getSession} from "../../../lib/get-session.js";
var http = require('axios');

export default async function handler(req, res) 
{
	var session = await getSession(req, res);
	var userInfoResponse = await http.get('https://api.github.com/user',{headers:{Authorization: 'Bearer ' + session.oauth_token}});
	var emailResponse = await http.get('https://api.github.com/user/emails',{headers:{Authorization: 'Bearer ' + session.oauth_token}});
	var primaryEmail;
	for (var i = 0; i < emailResponse.data.length; i++)
	{
		if (emailResponse.data[i].primary == true)
		{
			primaryEmail = emailResponse.data[i].email;
			break;
		}
	}
	res.status(200).json({userId: userInfoResponse.data.id, username: userInfoResponse.data.login, email: primaryEmail});
}
