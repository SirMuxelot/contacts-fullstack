
// imports
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// import routes
const contactApiRoutes = require('./contact/contactRouter');

// constants
const app = express();
const port = process.env.PORT || 8080;


// use body-parser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


// assign routes
app.use('/api/contact', contactApiRoutes);



app.get('/', (req, res) => {
    res.send('Welcome to ContactsApp');
});

app.listen(port, () => {
    console.log(`ContactsApp running on http://localhost:${port}/`);
});


// db connection
const dbPath = 'mongodb://localhost/contactsApp';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology:true
}
const mongo = mongoose.connect(dbPath, options);

mongo.then(() => {
    console.log(`${dbPath} successfully connected`)
}, err => {
    console.log(err);
});