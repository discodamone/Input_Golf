import {checkCsrf} from "../../../lib/csrf.js";
import {getSession} from "../../../lib/get-session.js";
import path from "path";
const fs = require('fs');
var MongoClient = require('mongodb').MongoClient;

export default async function(req, res)
{

    // TODO: implement logic for solving a question for a topic
    var session = await getSession(req, res);
    if (!(session.userInfo.gh_id && checkCsrf(req, session)))
    {
        return res.status(401).end();
    }
    var qId = parseInt(req.query.qId);
    var submittedAnswerIndex = parseInt(req.query.answerIndex);
	var fp = path.join(process.cwd(), "pages", "api", "QsAnswerArraysOUT.json");

	// Check if the answer is correct
	var theQuestions = await JSON.parse(await fs.readFileSync(fp));
    var solved = false;
	for (var i = 0; i < theQuestions.length; i++)
	{
		if (theQuestions[i].id === qId && theQuestions[i].correctAnswerIndex === submittedAnswerIndex)
		{
			solved = true;
		}
	}
	if (solved == false)
    {
        res.json({solved:false});
        res.status(200).end();
    }
	var doc = {}
	try
	{
		var client = await MongoClient.connect(process.env.MONGO_CONNECT_URL);
		var collection = await client.db("db").collection("users");
        doc = await collection.findOne({gh_id:session.userInfo.gh_id});
        var attempts = doc.attempts + 1;
        var solvedArray = doc.solvedArray;
        for (var i = 0; i < solvedArray.length; i++)
        {
            if (solvedArray[i].id === qId)
            {
                solvedArray[i].solved = true;
            }
        }

		doc = await collection.updateOne({gh_id:session.userInfo.gh_id}, {$set:{solvedArray:solvedArray, attempts: attempts}},{upsert:true});
		console.log(doc);

	}
	catch(e)
	{
		console.log(e)
	}
	
	res.json({solved:true});
	res.status(200).end();

}