'use strict';

const settings = require('./settings');
const request = require('request');

const requestToTumolink = function() {
  request.post({
    url: settings.target.url,
    form: {spaceId: settings.target.spaceId}
  }, function (error, response, body) {
    if (!error && response && response.statusCode === 200) {
      const responseBodyObj = JSON.parse(body);
      console.log('newArrival:', responseBodyObj.newArrival);
      if (responseBodyObj.newArrival) {
        console.log('text:', responseBodyObj.text);
      }
    } else {
      console.log('error:', error); // Print the error if one occurred
    }
    setTimeout(requestToTumolink, settings.target.intervalMillisecond);
  });
};

requestToTumolink();
