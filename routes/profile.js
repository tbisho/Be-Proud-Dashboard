const { compareSync } = require('bcrypt');
const express = require('express');
const router = express.Router();
const  db = require("../models");
const strava = require('strava-v3');
const axios = require('axios');  

// reading a file with no api
var fs = require('fs');

// testing route

router.get('/', (req, res) => {
    let activities = fs.readFileSync('./activities.json')
    let activityData = JSON.parse(activities)
    let yearTotals = fs.readFileSync('./yearToDate.json')
    let profileInfo = fs.readFileSync('./profileInfo.json')
    let profileData = JSON.parse(profileInfo)




    yearData = JSON.parse(yearTotals)
    console.log('first activity', activityData[0].name)
    console.log(yearData.ytd_ride_totals)
    console.log('profile info:', profileData.profile_medium)
    res.render('profile', { activity: activityData[0], yearTotals: yearData, profileInfo: profileData })
  });

  // {yearTotals: yearData}



// TESTING API CONNECTION
// router.get('/', function(req,res) {
//   // get athlete stats
//   const athleteUrl = "https://www.strava.com/api/v3/athlete/activities?before=&after=&page=&per_page=?access_token=18cba95a3d1772ebca4148dd5bee0b471085c62d "
//     axios.get(athleteUrl)
//     .then( function(apiResponse) {
//     console.log(apiResponse)
//     res.render('profile')
//   })
// })

module.exports = router;
