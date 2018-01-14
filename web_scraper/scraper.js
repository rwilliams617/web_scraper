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
    // console.log(body);

    function extractContent() {
      var data = $('script[type="application/ld+json"]').html();
      var json = JSON.parse(data);
      // var text = JSON.stringify(json); took this out as it didn't work with json dot notation method

      return(json);
    }
    // console.log(text);
    // console.log(extractContent()); 

//Create function to access/print json object values to screen
    function displayContent() {
      var jsonObj = extractContent()
      var objName = "Name: " + jsonObj.name + ", " + jsonObj.legalName
      var objDate = "Founding Date: " + jsonObj.foundingDate
      var objAddress = "Address: " +
      jsonObj.address.streetAddress + ", " 
      + jsonObj.address.addressRegion + ", " 
      + jsonObj.address.postalCode
      var objPhone = "Phone: " + jsonObj.contactPoint.telephone
      var objEmail = "Email: " + jsonObj.contactPoint.email
      var objUrl = "Website: " + jsonObj.url
      var objSM = "Social Media: " + jsonObj.sameAs


      console.log(objName) 
      console.log(objDate)
      console.log(objAddress)
      console.log(objPhone)
      console.log(objEmail)
      console.log(objUrl)
      console.log(objSM)
    }
    console.log(displayContent());
  }

});