# API Documentation

## /api/login
Initiates the OAuth flow to log in with Github. Redirects the user to Github to log in.

## /api/login\_callback
Receives a code from Github via a query parameter named `code`. The user will be redirected from Github to this API route after logging in. 

We use this `code` received to make an API request to Github and retrieve an `access_token`. This `access_token` can be used later to retrieve the user's email address and limited other information such as username and real name.

## /api/user/info
Uses the `oauth_token` stored in a user's session to retrieve information about the user from Github.
