/* Ronel Kakos */
/* Project 1 */
/* activitysuggest.js */
function suggestActivities() {
  let themeParksChecked = document.getElementById("themeParks").checked;
  let museumsChecked = document.getElementById("museums").checked;
  let outdoorActivitiesChecked = document.getElementById("outdoorActivities").checked;
  let shoppingChecked = document.getElementById("shopping").checked;

  let activities = "";

  if (themeParksChecked) {
    activities += "Visit Walt Disney World Resort or Universal Orlando Resort for a thrilling day at the theme parks!<br>";
  }

  if (museumsChecked) {
    activities += "Explore the Orlando Museum of Art or the Orlando Science Center for a cultural experience!<br>";
  }

  if (outdoorActivitiesChecked) {
    activities += "Enjoy a day at Shingle Creek or go walking at the beautiful Harry P. Leu Gardens!<br>";
  }

  if (shoppingChecked) {
    activities += "Shop and stop by at The Mall at Millenia or explore the Disney related shops at Disney Springs!<br>";
  }

  if (!themeParksChecked && !museumsChecked && !outdoorActivitiesChecked && !shoppingChecked) {
    activities = "Please select at least one interest to find activities in Orlando!";
  }

  document.getElementById("activities").innerHTML = activities;
}
