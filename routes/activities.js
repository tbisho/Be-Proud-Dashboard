const { compareSync } = require('bcrypt');
const express = require('express');
const router = express.Router();
const  db = require("../models");
const strava = require('strava-v3');
const axios = require('axios');  

// reading a file with no api
var fs = require('fs');

// testing route

router.get('/', function(req, res) {
  console.log("~~~~~~~~~~~~~~~~~~~~~")
  console.log(req.user.access_token)
  console.log("~~~~~~~~~~~~~~~~~~~~~")

  const athleteUrl = "https://www.strava.com/api/v3/athlete/activities"

  axios.get(athleteUrl,
    {
      headers: {
        "Authorization": `Bearer ${req.user.access_token}`
      }
    }).then(function(apiResponse) {
      console.log('FIRST', apiResponse.data[0])
      res.render('activities', { activity: apiResponse.data})
    })
  });

  module.exports = router;