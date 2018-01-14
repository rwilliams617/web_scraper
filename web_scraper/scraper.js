// User inputs email
// var EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var EMAIL_REGEX = "tim@canddi.com";

function userEmail() {
  var email = prompt ("Please enter your email address");

  if(email.toLowerCase() == EMAIL_REGEX) 
   return email;
  {
   alert("You have entered an invalid email.");
   return false;
  }
}

function domainName() {
  var email = userEmail();
  var domain = email.toString().replace(/.*@/, ""); 
  return domain;
}
 
// Create request to scrape website
// Use Cheerio to load homepage

// var website = 'http://www.' + domainName(); - was getting 'prompt undefined error had to hardcode url as workaround'
var website = 'http://www.' + 'canddi.com/contact/';
var request = require('request');

request(website, function (error, response, body) {
  if(error) {
    console.log('Error:', error); // Print the error if one occurred 
  }

  console.log('Status Code:', response && response.statusCode); // Print the response status code if a response was received

  if(response.statusCode === 200) {
    var cheerio = require('cheerio');
    var $ = cheerio.load(body);

    function extractContent() {
      var data = $('script[type="application/ld+json"]').html();
      var json = JSON.parse(data);
      var text = JSON.stringify(json);

      return(text);
    }
    console.log(extractContent());

//to-do create function where we take string objects in extractContent() and trim/split into one string


  }

});