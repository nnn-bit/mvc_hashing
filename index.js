

const express = require('express');
const router = require('./router/router');
const { hashSync } = require('bcrypt');
const app = express();
const port = 3000; // Choose any available port


app.use(express.json());
app.use(express.urlencoded({extended:true}))


// Set EJS as the view engine
app.set('view engine', 'ejs');
app.use('/',router)

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
