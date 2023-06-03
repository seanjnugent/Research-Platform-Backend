const express = require('express');
const router = express.Router();

module.exports = (connection) => {
  // GET /topics/details/:topic
  router.get('/:authorId', (req, res) => {
    // Retrieve the topic from the URL parameter
    const { authorId } = req.params;

    // Write your SQL query with the topic as a WHERE clause
    let query = `SELECT * FROM ids_dataplatform.vwauthor_publications WHERE authorId = '${authorId}';`;

    connection.query(query, (error, results) => {
      if (error) {
        console.error('Error retrieving author details:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json(results);
      }
    });
  });

  return router;
};