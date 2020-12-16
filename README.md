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
![Activity] (../images/activityWire.png)

## Steps To Use

#### 1. Create a new repo on Github and use your 'express-authentication' as the template

When we are finished with this boilerplate, we are going to make it a template on Github that will allow us to create a new repo on Github with all this code already loaded in.
* Go to `github.com` and create a new repository. In the template dropdown, choose this template.
* Clone your new repo to your local machine
* Get Codin'!

#### 2. Delete any .keep files

The `.keep` files are there to maintain the file structure of the auth. If there is a folder that has nothing in it, git won't add it. The dev work around is to add a file to it that has nothing in it, just forces git to keep the folder so we can use it later.

#### 3. Install node modules from the package.json

```
npm install
```

(Or just `npm i` for short)

#### 4. Customize with new project name

Remove defaulty type stuff. Some areas to consider are:

* Title in `layout.ejs`
* Description/Repo Link in `package.json`
* Remove boilerplate's README content and replace with new project's readme

#### 5. Create a new database for the new project

Using the sequelize command line interface, you can create a new database from the terminal.

```
createdb <new_db_name>
```

#### 6. Update `config.json`

* Change the database name
* Other settings are likely okay, but check username, password, and dialect

#### 7. Check the models and migrations for relevance to your project's needs

For example, if your project requires a birthdate field, then don't add that in there. 

> When changing your models, update both the model and the migration.

#### 8. Run the migrations

```
sequelize db:migrate
```

#### 9. Add a `.env` file with the following fields:

* SESSION_SECRET: Can be any random string; usually a hash in production
* PORT: Usually 3000 or 8000

#### 10. Run server; make sure it works

```
nodemon
```

or

```
node index.js
```
