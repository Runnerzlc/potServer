'use strict';
const express = require('express');
const fs = require(`fs`);
const router = express.Router();
const cors = require("cors");
const Plant = require('./plant');

router.all("*", cors());

router.get('/', (req, res) => {
    res.json({ message: 'server working' });
});



module.exports = router;


