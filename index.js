// always goes first
require('dotenv').config();
const PORT = process.env.PORT;
const express = require('express');
const app = express();
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const setupAuth = require('./auth');
// const S3KRET = require('./config');
// tell express to use the session modules
app.use(session({
    store: new FileStore(),  // no options for now
    secret: process.env.SESSION_SECRET
}));
// only after sessions is set up with express is it ok to attach passport authorization.
setupAuth(app);
app.get('/', (req,res) => {
    res.send(`<h1>Hey There</h1>`);
});
app.listen(PORT, () =>{
    console.log(`server running on port ${PORT}`)
});