const { compareSync } = require('bcrypt');
const express = require('express');
var methodOverride = require('method-override')
const router = express.Router();
const  db = require("../models");
const strava = require('strava-v3');
const axios = require('axios');  

//middleware
router.use(methodOverride('_method'))


router.get('/', function(req,res) {
  res.render('edit')
})



router.put('/', function(req, res) {
    console.log("~~~~~~~~~~~~~~~~~~~~~")
    console.log(req.user.access_token)
    console.log("~~~~~~~~~~~~~~~~~~~~~")
  // next steps
  // remove hard coded ID
  // 
    const activityUrl = `https://www.strava.com/api/v3/activities/${3656336289}?access_token=
    8bf8609942377bb20e5b2131500f82a225f73c73`
    console.log(req.body) 
    axios.put(activityUrl,
      {
        headers: {
          "Authorization": `Bearer ${req.user.access_token}`
        }, 
       
       name: req.body.name
      }).then(function(apiResponse) {

        res.redirect('/activities')
      })
    });
  
    module.exports = router;