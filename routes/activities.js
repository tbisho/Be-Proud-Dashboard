const { compareSync } = require('bcrypt');
const express = require('express');
const router = express.Router();
const  db = require("../models");
const strava = require('strava-v3');
const axios = require('axios');  

// reading a file with no api
var fs = require('fs');

// testing route
// router.get('/', (req, res) => {
//   let activities = fs.readFileSync('./activities.json')
//   let activityData = JSON.parse(activities)
//   console.log('first activity', activityData[0].name)
//     res.render('activities', { activity: activityData[0] })
//   });

// TESTING API CONNECTION
router.get('/', function(req,res) {
  // get athlete stats
  const athleteUrl = "https://www.strava.com/api/v3/athlete/activities?access_token=341ae23e8b50ffef03153142905c7a7cb4ef988c"
    axios.get(athleteUrl, { withCredentials: true })
    .then( function(apiResponse) {
    console.log(apiResponse)
    res.render('activities')
  })
})

// athleteUrl = "https://www.strava.com/api/v3/athletes/47183122?access_token=341ae23e8b50ffef03153142905c7a7cb4ef988c



//find currently logged in user and render their associated favorites









module.exports = router;
