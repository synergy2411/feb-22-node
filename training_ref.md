Break : 10:30 - 10:40
Break : 11:30 - 11:40
Lunch : 01:00 - 02:00
Break : 03:00 - 03:10
Break : 04:00 - 04:10

JavaScript Execution Environment
- Browser Enviornment (Client Side Code)
- NodeJS Platform / Server Environment (Server Side Code)

# What is NodeJS?
- Server Side Platform
- JavaScript Code / C++ (internally)
- Performant Apps
- Single Threaded - IO Non-blocking 
- Asynchronous
- Able to handle multiple requests (Queue)
- Real-time operation
- Data-intensive
- Non-blocking
- Socket / Network programming
- Based on V8 Engine
- REPL - Read Evaluate Print Loop

# Node Installer
- Node Runtime Environment
- Node Package Manager (NPM)
- Node Native / Core Module

# To generate package.json 
- npm init






# App Versioning - Semantic Versioning - X.Y.Z (semver.org)
# NoteApp -> 1.0.0
X -> Major - (2.0.0) New features added without backward compatiblity
Y -> Minor - (1.1.0) New features introduced without changing existing API (Backward compatible)
Z -> Patch - 1.0.1

> npm init
> npm install [-g]
> npm unintsall
> npm outdated
> npm update
> npm ls
> npm config get/set
> npm adduser
> npm publish


# Event System - Stream & Buffer
# Express 
# Data persistence using MongoDB / Mongoose



# buffer size


# npm install nodemon -g


# JWT Handling - API protection
# View Engine (Handlebars / EJS)
# Socket programming



# Heroku Deployment Steps
- Signup and login on heroku
- Download and install heroku CLI
- heroku --version
- Create git repo link for the deplpy project
- Download and install git-scm bash
- Create Git repo and check-in the project to deploy
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/synergy2411/honeywell-chattr-app.git
git push -u origin main

- heroku login
- heroku keys:add
    - Optional Step - to generate SSH - Powershell > ssh-keygen
- heroku create <unique_app_name>
- git remote
- git push heroku main


# Testing Libraries
- chai
- chai-http
- mocha -> npm install mocha -g

// describe() : Test suite
// it() : test statement / spec
// beforeEach()
// afterEach()
// beforeAll()
// afterAll()