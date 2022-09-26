# Todo Items

## MongoDB
Set up MongoDB to store session information, user progress information

## Bug fixes:
/api/user/info doesn't work because the `session` object is empty. For some reason setting the session from the login callback doesn't persist. It may be because we have no session store besides memory. Need to set up MongoDB and probably avoid using `next-session`.
