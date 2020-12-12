const { compareSync } = require('bcrypt');
const express = require('express');
const router = express.Router();
const  db = require("../models");
const strava = require('strava-v3');
const axios = require('axios');

// reading a file with no api
var fs = require('fs');

//testing json file 
router.get('/', (req, res) => {
  let activities = fs.readFileSync('./activities.json')
  let activityData = JSON.parse(activities)
  console.log('first activity', activityData[0].name)
  console.log(activityData)
    res.render('activities', { activity: activityData[0] })
  });

// TESTING API CONNECTION
// router.get('/', function(req,res) {
//   // get athlete stats
//   const athleteUrl = "https://www.strava.com/api/v3/athlete/activities?before=&after=&page=&per_page=?access_token=fe9fc712776f9d108a439b35c6c7f9a9e55bc69b"
//     axios.get(athleteUrl, { withCredentials: true })
//     .then( function(apiResponse) {
//     console.log(apiResponse)
//     res.render('activities')
//   })
// })





module.exports = router;
