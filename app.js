'use strict';

const settings = require('./settings');
const request = require('request');
const cron = require('node-cron');

cron.schedule('* * * * *', () => {
  request.post({
    url: settings.target.url,
    form: {spaceId: settings.target.spaceId}
  }, function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
  });
});
