// Ronel Kakos
// faq.js


"use strict";

// Run once the page is loaded and ready
$(() => {

    // Added click events to each question in the FAQ 
    $("section#faq dl dt").click(e => {
        
        // Toggle class to open and close the question
        $(e.currentTarget).toggleClass('answer');

        // Toggle visibility of the answer
        $(e.currentTarget).next('dd').slideToggle();

        // Change the toggle text based on open and close
        $(e.currentTarget).find('.toggle').text($(e.currentTarget).hasClass('answer') ? '-' : '+');
    });
});