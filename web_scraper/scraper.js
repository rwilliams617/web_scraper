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

// Use Knwl to parse the data to retrieve company info, store in array
  if(response.statusCode === 200) {
    var cheerio = require('cheerio');
    var $ = cheerio.load(body);
    console.log($('footer').text());

    $('a').each(function() {
      var text = $(this).text();
      var link = $(this).attr('href');

        if(link === "tel:+44 161 414 1080" && "^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$") {
          var phone = "^\+?[1-9]\d{1,14}$"; //E.164 general format for international telephone numbers regex
          console.log(phone);
          return phone;

      function rgCompanyPhones() {
        var Knwl = require('knwl.js')  
        var knwlInstance = new Knwl('english');

        knwlInstance.register('phones', require('knwl.js/default_plugins/phones.js'));

        knwlInstance.init(phone); 
        var phones = knwlInstance.get('phones');

        return(phones);
      }
      console.log(rgCompanyPhones()); 
      }

      function rgCompanyLinks() {
        var Knwl = require('knwl.js')  
        var knwlInstance = new Knwl('english');

        knwlInstance.register('links', require('knwl.js/default_plugins/links.js'));

        knwlInstance.init(link);
        var links = knwlInstance.get('links');

        return(links);
      }
// Print data to screen
      console.log(rgCompanyLinks());
  
    });
  };
});