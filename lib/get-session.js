import nextSession from "next-session";
import {promisifyStore} from "next-session/lib/compat";
var session = require('express-session');
var MongoDBStore = require('connect-mongodb-session')(session);

var store = new MongoDBStore({
	// No idea why the environment variables are not being used by the mongo container
	//uri: "mongodb://" + process.env.MONGO_INITDB_ROOT_USERNAME + ":" + process.env.MONGO_INITDB_ROOT_PASSWORD + "@mongo:27017/?authSource=admin",
	uri: "mongodb://mongo:27017",
	collection: 'sessions'
});

store.on('error', (e)=>{
console.log(e);
});


export const getSession = nextSession({autoCommit: false, store: promisifyStore(store)});
