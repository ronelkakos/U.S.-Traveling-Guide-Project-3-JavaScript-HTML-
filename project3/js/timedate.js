// Ronel Kakos
// timedate.js

// Function to display current date and time message
function displayDateTimeMessage() {
    var currentDate = new Date();
    var hour = currentDate.getHours();
    var timeOfDay;

    // Determine time of day
    if (hour >= 5 && hour < 12) {
        timeOfDay = "morning";
    } else if (hour >= 12 && hour < 18) {
        timeOfDay = "afternoon";
    } else if (hour >= 18 && hour < 22) {
        timeOfDay = "evening";
    } else {
        timeOfDay = "night";
    }

    // Format date
    var options = { month: 'long', day: 'numeric', year: 'numeric' };
    var formattedDate = currentDate.toLocaleDateString('en-US', options);

    // Display message
    var welcomeMessage = "Welcome! Today is " + formattedDate + ". Have a great " + timeOfDay + "!";
    document.getElementById("dateTimeMessage").innerText = welcomeMessage;
}

// Call the function when the page loads
window.onload = function () {
    displayDateTimeMessage();
};
