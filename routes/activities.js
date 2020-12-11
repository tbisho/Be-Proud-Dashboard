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
  const athleteUrl = "https://www.strava.com/api/v3/athlete/activities?before=&after=&page=&per_page=?access_token=fe9fc712776f9d108a439b35c6c7f9a9e55bc69b"
    axios.get(athleteUrl, { withCredentials: true })
    .then( function(apiResponse) {
    console.log(apiResponse)
    res.render('activities')
  })
})

// "https://www.strava.com/api/v3/athlete/activities?before=&after=&page=&per_page=" "Authorization: Bearer [[token]]"

// athleteUrl = "https://www.strava.com/api/v3/athletes/47183122?access_token=341ae23e8b50ffef03153142905c7a7cb4ef988c



//find currently logged in user and render their associated favorites



https://www.strava.com/oauth/authorize?client_id=57767&redirect_uri=http://127.0.0.1:3000/auth/strava/callback&response_type=code&scope=read_all





module.exports = router;
