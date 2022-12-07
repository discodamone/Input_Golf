# Input\_Golf

## Overview
This is a project that is meant to help students learn about beginner-level cybersecurity topics through the use of a golf-themed quiz game

## Setup
1. Clone the repository
2. Create a Github application and save your `client_id` and `client_secret`. Make sure your application allows a redirect of http://localhost (or whatever the BASE_URL value of the following .env file is)
3. Create a `.env` file in the root of the repository with the following contents:
```
CLIENT_ID=your_client_id_here
CLIENT_SECRET=your_client_secret_here
BASE_URL=http://localhost
MONGO_INITDB_ROOT_USERNAME=admin
MONGO_INITDB_ROOT_PASSWORD=admindevelopmentpassword
MONGO_CONNECT_URL=mongodb://mongo:27017
```
4. Build the docker containers by running `sudo docker-compose build` from the root of the repository
5. Run the docker containers by running `sudo docker-compose up -d`

### Alternative setup
If using docker fails for any reason, you can set up your own MongoDB instance using MongoDB's hosted cloud service, and point the `MONGO_CONNECT_URL` in the environment file to that instance. Then run `npm run dev` to start the NodeJS container, which will connect to that MongoDB server.

It is highly recommended to use docker-compose due to the additional latency associated with a cloud-hosted version of MongoDB and our app's frequent interactions with the database to retrieve session and user information.

## Configuration
Some files in the repository can be changed to meet your specific needs:
1. There is a JSON file at ./pages/api/QsAnswerArrays.json. This needs to be modified to contain the questions and answers you want, and to associate those with the correct topic number. After modifying this file, you can run `node questionUtils.js` to randomize the questions and answers to be less predictable.
2. There is a `resources` directory that contains files in the format of `topicNumber_Par_Name_of_Topic.md`. This is what determines the number, par, and name of each topic. You will need to change the name of these files to match the topics you want to be teaching, and change the contents of the files to be a markdown representation of the content you want to display in the web app within the resources side panel.
