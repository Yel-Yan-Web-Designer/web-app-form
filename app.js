const express = require('express');
const app = express();

const people = require('./routes/people');
const auth = require('./routes/auth')
/**
 TODO LIST
 /login api ==> html form
 /api/people get method ==> post request
 /api/postman/people post method ==> from postman
 /api/people put method ==> put from post postman
 /api/people delete method ==> delete from from postman
*/
app.use(express.static('./client'));
// parse form data
app.use(express.urlencoded({extended : false}));
// parse json string into json data type
app.use(express.json());


app.use('/api/people', people);
app.use('/login', auth);

app.listen(5000, () => console.log(`Server running on PORT 5000...`))