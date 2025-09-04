import $ from 'jquery';
import _ from 'lodash';

$('body').append('<p>ALX Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');

// Button
$('body').append('<button id="start-btn">Click here to get started</button>');

// Counter display
$('body').append("<p id='count'></p>");

// Footer
$('body').append('<p>Copyright - ALX</p>');

// Counter logic
let count = 0;

function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

// Bind lodash debounce to button click
$('#start-btn').on('click', _.debounce(updateCounter, 500));
