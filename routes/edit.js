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
  
    const activityUrl = `https://www.strava.com/api/v3/activities/${3656336289}?access_token=3e01537804ac7b740821520923f0e93e6ac734a3`
    console.log(req.body.name) 
    axios.put(activityUrl,
      {
        headers: {
          "Authorization": `Bearer ${req.user.access_token}`
        }, 
       
       name: "why won't this work with req.body"
      }).then(function(apiResponse) {
        // console.log('FIRST', apiResponse)
        //send back to activities page
        res.render('edit')
      })
    });
  
    module.exports = router;