var express = require('express');
var router = express.Router();

const db = require('../models/index')

/* GET home page. */
router.get('/', async function(req, res, next) {
  const categories = await db.category.findAll();
  res.json(categories);
});

module.exports = router;
