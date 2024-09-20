// Ronel Kakos
// formvalid.js


// Get form elements
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var comments = document.getElementById("comments");

// Function to validate first name field
function validateFirstName() {
  if (firstName.validity.valueMissing) {
      firstName.setCustomValidity("Please enter your first name.");
  } else {
      firstName.setCustomValidity("");
  }
}

// Function to validate last name field
function validateLastName() {
  if (lastName.validity.valueMissing) {
      lastName.setCustomValidity("Please enter your last name.");
  } else {
      lastName.setCustomValidity("");
  }
}

// Function to validate email field
function validateEmail() {
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression pattern for email validation

  if (email.validity.valueMissing) {
      email.setCustomValidity("Please enter your email address.");
  } else if (!emailPattern.test(email.value)) { // Checking if the value matches the pattern
      email.setCustomValidity("Please enter a valid email address.");
  } else {
      email.setCustomValidity(""); // Clearing the custom validity message if valid
  }
}

// Function to validate phone number field
function validatePhone() {
  var phonePattern = /^\d{3}-\d{3}-\d{4}$/; // Regular expression pattern

  if (phone.validity.valueMissing) {
    phone.setCustomValidity("Please enter your phone number.");
  } else if (!phonePattern.test(phone.value)) { // Checking if the value matches the pattern
    phone.setCustomValidity("Please enter a valid phone number (e.g., 555-555-5555).");
  } else {
    phone.setCustomValidity(""); // Clearing the custom validity message if valid
  }
}

// Function to validate comments field
function validateComments() {
  if (comments.validity.valueMissing) {
      comments.setCustomValidity("Please enter your comments.");
  } else {
      comments.setCustomValidity("");
  }
}

// Added event listeners to run validation functions on input and when field becomes invalid
firstName.addEventListener("input", validateFirstName);
lastName.addEventListener("input", validateLastName);
email.addEventListener("input", validateEmail);
phone.addEventListener("input", validatePhone);
comments.addEventListener("input", validateComments);

// Add event listeners to show custom message when field becomes invalid
firstName.addEventListener("invalid", function() {
    validateFirstName();
});
lastName.addEventListener("invalid", function() {
    validateLastName();
});
email.addEventListener("invalid", function() {
    validateEmail();
});
phone.addEventListener("invalid", function() {
    validatePhone();
});
comments.addEventListener("invalid", function() {
    validateComments();
});