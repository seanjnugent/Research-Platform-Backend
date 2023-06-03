const express = require('express');
const router = express.Router();

module.exports = (connection) => {
  // GET /topics/details/:topic
  router.get('/:publicationId', (req, res) => {
    // Retrieve the topic from the URL parameter
    const { publicationId } = req.params;

    // Write your SQL query with the topic as a WHERE clause
    let query = `Select * from ids_dataplatform.vwpublication_keywords WHERE publicationId = '${publicationId}';`;

    connection.query(query, (error, results) => {
      if (error) {
        console.error('Error retrieving publication details:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json(results);
      }
    });
  });

  return router;
};