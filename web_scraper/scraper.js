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

// Use Knwl to parse the data to retrieve company info, store in array

// Print data to screen