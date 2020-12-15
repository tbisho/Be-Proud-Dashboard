const { compareSync } = require('bcrypt');
const express = require('express');
const router = express.Router();
const  db = require("../models");
const strava = require('strava-v3');
const axios = require('axios');  

// reading a file with no api
var fs = require('fs');


router.get('/', function(req,res) {

// get athlete stats
console.log('hitting route?')
const statsUrl = "https://www.strava.com/api/v3/athletes/47183122/stats"
console.log('user id', req.currentUser)

db.user.findByPk(req.user.id).then(function(response){
  console.log('profile photo', response)
  axios.get(statsUrl,
    {
      headers: {
        "Authorization": `Bearer ${req.user.access_token}`
      }
    }).then(function(apiResponse) {
      // console.log('FIRST', apiResponse)
      res.render('profile', { yearTotals: apiResponse.data, profileImage: response.profileImage})
    })
  });
})


  
//add to DB - profile pic
// add new DB field 
// modify table & migrations


module.exports = router;
