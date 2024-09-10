const express = require('express');
const router = express.Router();

module.exports = (connection) => {
  // GET /topics/details/:topic
  router.get('/:topic', (req, res) => {
    // Retrieve the topic from the URL parameter
    const { topic } = req.params;

    // SQL query with the topic as a WHERE clause
    let query = `SELECT keyword, publicationName, publicationId, authors FROM ids_dataplatform.vwpublication_keyword WHERE keyword = '${topic}';`;

    connection.query(query, (error, results) => {
      if (error) {
        console.error('Error retrieving topic details:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json(results);
      }
    });
  });

  return router;
};
