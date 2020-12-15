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
//     let activities = fs.readFileSync('./activities.json')
//     let activityData = JSON.parse(activities)
//     let yearTotals = fs.readFileSync('./yearToDate.json')
//     let profileInfo = fs.readFileSync('./profileInfo.json')
//     let profileData = JSON.parse(profileInfo)




//     yearData = JSON.parse(yearTotals)
//     console.log('first activity', activityData[0].name)
//     console.log(yearData.ytd_ride_totals)
//     console.log('profile info:', profileData.profile_medium)
//     res.render('profile', { activity: activityData[0], yearTotals: yearData, profileInfo: profileData })
//   });

  // {yearTotals: yearData}




router.get('/', function(req,res) {

// get athlete stats
console.log('hitting route?')
const statsUrl = "https://www.strava.com/api/v3/athletes/47183122/stats"

axios.get(statsUrl,
  {
    headers: {
      "Authorization": `Bearer ${req.user.access_token}`
    }
  }).then(function(apiResponse) {
    // console.log('FIRST', apiResponse)
    res.render('profile', { yearTotals: apiResponse.data})
  })
});
  
//   axios.all([
//     axios.get(athleteUrl,
//   {
//     headers: {
//       "Authorization": `Bearer ${req.user.access_token}`
//     }
//   }),
//   axios.get('https://www.strava.com/api/v3/athletes')
// ]).then(axios.spread((...responses) => {
//   console.log(...reponses)
// })

// .then(axios.spread((apiResponse1, apiResponse2) => {
//     // console.log(apiResponse1, apiResponse2)
//     res.render('profile', { yearTotals: apiResponse1.data })

// }))


module.exports = router;
