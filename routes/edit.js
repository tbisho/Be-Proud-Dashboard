const { compareSync } = require('bcrypt');
const express = require('express');
var methodOverride = require('method-override')
const router = express.Router();
const  db = require("../models");
const strava = require('strava-v3');
const axios = require('axios');  

//middleware
router.use(methodOverride('_method'))


router.get('/', function(req, res) {
    console.log("~~~~~~~~~~~~~~~~~~~~~")
    console.log(req.user.access_token)
    console.log("~~~~~~~~~~~~~~~~~~~~~")
  
    const activityUrl = `https://www.strava.com/api/v3/activities/${3656336289}?access_token=b1c42a0facc330aa887ef04a35305df7027beb77`
  
    axios.put(activityUrl,
      {
        headers: {
          "Authorization": `Bearer ${req.user.access_token}`
        }, 
       name: req.body
      }).then(function(apiResponse) {
        // console.log('FIRST', apiResponse)
        res.render('edit')
      })
    });
  
    module.exports = router;