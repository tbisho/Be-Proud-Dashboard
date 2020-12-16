# Be Proud Dashboard

I created this app to gain experience with Oauth authentication. I was able to utilize the Strava API to create a 'yearly roundup' of a Strava users activities.

## User Stories

* As a user, I would like to be able to log in with my Strava credentials
* As a user, I would like to be able to view and update my Strava activity information


### User Model

| Column Name | Data Type | Notes |
| --------------- | ------------- | ------------------------------ |
| id | Integer | Serial Primary Key, Auto-generated |
| name | String | Must be provided |
| profileImage | String | 
| strava_id | Integer | 
| access_token | Integer | 
| createdAt | Date | Auto-generated |
| updatedAt | Date | Auto-generated |

### Wire Frames
![Landing](/images/landingWire.png)
![Profile](/images/profileWire.png)
![Activity](/images/activityWire.png)

### Site Images
![Login](/images/login.png)
![Oauth](/images/oauth.png)
![Activities](/images/activitiesPage.png)


### Code Captures
![Strategy](/images/stravaStrategy.png)
![Auth](/authRoute.png)

### About Me

### Future Developments

### Credits