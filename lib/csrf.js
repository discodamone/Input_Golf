export function checkCsrf(req, session)
{
    return req.query.csrfToken === session.userInfo.csrfToken;
}