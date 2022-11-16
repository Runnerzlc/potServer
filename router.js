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

router.post('/plant', (req, res) => {
    console.log("get into save api")
    let plant = new Plant();

    plant.timeStamp = req.body.timeStamp;
    plant.temp = req.body.temp;
    plant.humidity = req.body.humidity;
    plant.light = req.body.light;

    plant.save((err) => {
        if (err) {
            res.status(501).send(err);
        };

        res.status(200).json({ message: 'plant data saved!' });
    });
});

router.get('/plants', (req, res) => {
    Plant
        .find()
        .exec((err, plants) => {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).json(plants);
        });
    console.log("request get all plants data");
});




module.exports = router;


