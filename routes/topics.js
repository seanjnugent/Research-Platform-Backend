const express = require('express');
const router = express.Router();

module.exports = (connection) => {
  // GET /topics
  router.get('/', (req, res) => {
    // SQL query to fetch topics from the database
    let query = 'SELECT keyword FROM ids_dataplatform.keyword;';

    connection.query(query, (error, results) => {
      if (error) {
        console.error('Error retrieving topics:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json(results);
      }
    });
  });

  return router;
};
