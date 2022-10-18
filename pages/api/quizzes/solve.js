import {checkCsrf} from "../../../lib/csrf.js";
import {getSession} from "../../../lib/get-session.js";

export default async function(req, res)
{

    var session = await getSession(req, res);
    if (!(session.userInfo.gh_id && checkCsrf(req, session)))
    {
        return res.status(401);
    }
    var topic = req.query.topic;
    var num = req.query.num;
    var submittedAnswer = req.query.answer;

    // TODO: implement logic for solving a question for a topic

}