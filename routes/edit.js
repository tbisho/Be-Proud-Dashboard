const { compareSync } = require('bcrypt');
const express = require('express');
var methodOverride = require('method-override')
const router = express.Router();
const  db = require("../models");
const strava = require('strava-v3');
const axios = require('axios');  

//middleware
router.use(methodOverride('_method'))

// pass the id back to the edit.ejs 
router.get('/:activity_id', function(req,res) {
  res.render('edit', { activityIdPizza: req.params.activity_id })
})



router.put('/:activity_id', function(req, res) {
    console.log("should be current token~~~~~~~~~~~~~~~~~~~~~")
    console.log(req.user.access_token)
    console.log("~~~~~~~~~~~~~~~~~~~~~")
  // next steps
  // remove hard coded ID
  // 
  console.log('these are the params', req.params)
    let activityUrl = `https://www.strava.com/api/v3/activities/${req.params.activity_id}?access_token=ba68f018f4f5b44e69ab96352d4eda047b58383c`
     
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