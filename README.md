 # :earth_asia: NATOURS
<h1 align="center">
  <br>
  <img src="https://github.com/rupesh1310/NATOURS/blob/master/public/img/logo-green-round.png" alt="Natours" width="200"></a>
  <br>
  Natours
  <br>
</h1>

<h4 align="center">An awesome tour booking site built on top of <a href="https://nodejs.org/en/" target="_blank">NodeJS</a>.</h4>

 <p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#demonstration">Demonstration</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#api-usage">API Usage</a> •
  <a href="#build-with">Build With</a> •
  <a href="#to-do">To-do</a> •
  <a href="#installation">Installation</a> • 
  <a href="#known-bugs">Known Bugs</a> • 
  <a href="#future-updates">Future Updates</a> • 
  <a href="#acknowledgement">Acknowledgement</a>
</p>
![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)  ![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg) ![](https://img.shields.io/badge/MongoDB-3.6-brightgreen.svg?style=for-the-badge&display=inline-block&logo=mongodb)
![](https://img.shields.io/badge/html-5-blue.svg?style=for-the-badge&display=inline-block&logo=html5)
![](https://img.shields.io/badge/css-3-green.svg?style=for-the-badge&display=inline-block&logo=css3)

## Key Features

* Authentication and Authorization
  - Login and logout
* Tour
  - Manage booking, check tours map, check users' reviews and rating
* User profile
  - Update username, photo, email, and password
* Credit card Payment


## Demonstration
#### Home Page :
![natoursHomePageonline-video-cutt](https://user-images.githubusercontent.com/58518192/72606801-7ebe0680-3949-11ea-8e88-613f022a64e5.gif)

#### Tour Details :
![tourOverviewonline-video-cutterc](https://user-images.githubusercontent.com/58518192/72606859-a0b78900-3949-11ea-8f0d-ef44c789957b.gif)

#### Payment Process :
![paymentprocess-1-ycnhrceamp4-7fW](https://user-images.githubusercontent.com/58518192/72606973-d9eff900-3949-11ea-9a2e-f84a6581bef3.gif)

#### Booked Tours :
![rsz_bookedtours](https://user-images.githubusercontent.com/58518192/72607747-6a7b0900-394b-11ea-8b9f-5330531ca2eb.png)


#### User Profile :
![rsz_userprofile](https://user-images.githubusercontent.com/58518192/72607635-44edff80-394b-11ea-8943-64c48f6f19aa.png)

#### Admin Profile :
![rsz_adminprofile](https://user-images.githubusercontent.com/58518192/72607648-4d463a80-394b-11ea-972f-a73160cfaa5b.png)


## How To Use

### Book a tour
* Login to the site
* Search for tours that you want to book
* Book a tour
* Proceed to the payment checkout page
* Enter the card details (Test Mood):
  ```
  - Card No. : 4242 4242 4242 4242
  - Expiry date: 02 / 22
  - CVV: 222
  ```
* Finished!



### Manage your booking

* Check the tour you have booked in "Manage Booking" page in your user settings. You'll be automatically redirected to this
  page after you have completed the booking.

### Update your profile

* You can update your own username, profile photo, email and password.



## API Usage
Before using the API, you need to set the variables in Postman depending on your environment (development or production). Simply add: 
  ```
  - {{URL}} with your hostname as value (Eg. http://127.0.0.1:3000 or http://www.example.com)
  - {{password}} with your user password as value.

# :pencil: API documentation
Check [Natours API Documentation](https://documenter.getpostman.com/view/5289109/SzYeuaEL?version=latest#b54e7992-c3dd-48dd-a6f6-66561bf12261) for more info.


## Build With

* [NodeJS](https://nodejs.org/en/) - JS runtime environment
* [Express](http://expressjs.com/) - The web framework used
* [Mongoose](https://mongoosejs.com/) - Object Data Modelling (ODM) library
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - Cloud database service
* [Pug](https://pugjs.org/api/getting-started.html) - High performance template engine
* [JSON Web Token](https://jwt.io/) - Security token
* [ParcelJS](https://parceljs.org/) - Blazing fast, zero configuration web application bundler
* [Stripe](https://stripe.com/) - Online payment API
* [Postman](https://www.getpostman.com/) - API testing
* [Mailtrap](https://mailtrap.io/) & [Sendgrid](https://sendgrid.com/) - Email delivery platform
* [Heroku](https://www.heroku.com/) - Cloud platform

## To-do

* Review and rating
  - Allow user to add a review directly at the website after they have taken a tour
* Booking
  - Prevent duplicate bookings after user has booked that exact tour, implement favourite tours
* Advanced authentication features
  - Signup, confirm user email, login with refresh token, two-factor authentication
* And More ! There's always room for improvement!


## 🚀&nbsp; Installation
You can fork the app or you can git-clone the app into your local machine. Once done that, please install all the
dependencies by running
```
$ npm i
set your env variables
$ npm run watch:js
$ npm run build:js
$ npm run dev (for development)
$ npm run start:prod (for production)
$ npm run debug (for debug)
$ npm start
Setting up ESLint and Prettier in VS Code 👇
$ npm i eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-config-airbnb eslint-plugin-node
eslint-plugin-import eslint-plugin-jsx-a11y  eslint-plugin-react --save-dev
```
## :pencil: &nbsp; **Import and Delete data from dev-data folder**

**Delete Data**

`node .\dev-data\data\import-dev-data.js --delete`

**Import Data**

`node .\dev-data\data\import-dev-data.js --import`


## ✅&nbsp; Requirements
 `Latest version of node`

`MongoDB Atlas Account`

`Mailtrap Account`

## :wrench: How to use
**Import Data**
> node .\dev-data\data\import-dev-data.js --import

**Start in development**
> npm run start:dev
> npm run watch:js

**Start in debug**
> npm run debug

**Start in production**
> npm run start:prod

**Database**
> MongoDb Atlas


## Future Updates

* Enable PWA
* Improve overall UX/UI and fix bugs
* Featured Tours
* Recently Viewed Tours
* And More ! There's always room for improvement!


<h1 align="center"> ️💚️ Contributors 💚 </h1>

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
[<img src="https://avatars1.githubusercontent.com/u/30566706?s=460&u=fa66403c14af5eafd23a330aee2b3864ed35c9c9&v=4" width="100px;"/><br /><sub><b>A.RUPESH</b></sub>](https://github.com/rupesh1310)<br />
