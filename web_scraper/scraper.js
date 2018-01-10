// User inputs email
// var EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var EMAIL_REGEX = "tim@canddi.com";

function userEmail() {
  var email = prompt ("Please enter your email address");

  if(email.toLowerCase() == EMAIL_REGEX) 
   return true;
  {
   alert("You have entered an invalid email.");
   return false;
  }
}
 
// Create request to scrape website

// Use Cheerio to load homepage

// Use Knwl to parse the data to retrieve company info, store in array

// Print data to screen