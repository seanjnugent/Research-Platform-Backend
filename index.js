const express = require('express');
const app = express();
const config = require('./config');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: config.host,
  port: config.port,
  user: config.user,
  password: config.password,
  database: config.database,
});

const topicsRoutes = require('./routes/topics')(connection);
const topicsDetailsRoutes = require('./routes/topicsdetails')(connection);
const Publication_Authors = require('./routes/publication_authors')(connection);
const Publication_Keywords = require('./routes/publication_keywords')(connection);
const Author_Publications = require('./routes/author_publications')(connection);

// Use the route handlers for the respective endpoints
app.use('/topics/details', topicsDetailsRoutes);
app.use('/topics', topicsRoutes);
app.use('/publicationauthors', Publication_Authors);
app.use('/publicationkeywords', Publication_Keywords);
app.use('/authorpublications', Author_Publications);

// Start the server
const port = 2000; // Choose the port number you want to use
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports = connection;