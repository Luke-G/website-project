// Retrieve the booking object from the 'lodge' booking form
let booking = JSON.parse(localStorage.getItem('booking'));

let bookingCostElem = document.getElementById('booking-cost');
let bookingCheckInElem = document.getElementById('booking-checkin');
let bookingCheckOutElem = document.getElementById('booking-checkout');
let bookingNightsElem = document.getElementById('booking-nights');
let bookingGuestsElem = document.getElementById('booking-guests');

// Set the HTML element values based on booking data from previous page
bookingCostElem.innerText = booking.cost.toFixed(2);
bookingCheckInElem.innerText = booking.checkin;
bookingCheckOutElem.innerText = booking.checkout;
bookingNightsElem.innerText = booking.nights;
bookingGuestsElem.innerText = booking.guests;