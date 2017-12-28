/* 
 * This JavaScript file reads information about the lodges from js/data/lodges.json
 * The script processes it and displays relevant information on the page. This JSON
 * simulates a standard API response from a server where the information is usually
 * kept in a database and sent to the client, instead of having static webpages.
*/

// Strict mode to ensure good coding standards are used and syntax is valid
'use strict';

const url = 'js/data/lodges.json';  

// Get the JSON file then iterate until the requested lodge object is found
function selectLodge(name) {
  fetch(url).then(response => response.json())
  .then(
    response => response.forEach(function(lodge) {

      // Add each lodge to 'other lodges' element
      if (lodge.name != name) {
        let lodgePreviewParentDiv = document.getElementById('lodge-preview-parent');

        let lodgePreviewDiv = document.createElement('div');
        lodgePreviewDiv.className = 'lodge-preview';

        let lodgePreviewHeading = document.createElement('h3');
        lodgePreviewHeading.innerText = lodge.name;

        let lodgePreviewImage = document.createElement('img');
        lodgePreviewImage.src = lodge.image_url;

        let lodgePreviewDesc = document.createElement('div');
        lodgePreviewDesc.className = 'lodge-preview-desc';
        lodgePreviewDesc.innerText = lodge.description;

        lodgePreviewDiv.appendChild(lodgePreviewHeading);
        lodgePreviewDiv.appendChild(lodgePreviewImage);
        lodgePreviewDiv.appendChild(lodgePreviewDesc);

        // Add event listener to link to lodge page
        lodgePreviewDiv.addEventListener('click', function() {
          window.location.href = 'lodges.html?l=' + lodge.name;
        });

        lodgePreviewParentDiv.appendChild(lodgePreviewDiv);
      }

      // Add the selected lodge data to the page
      if (lodge.name == name) {
        // Iterate through lodge features and output onto page
        lodge.features.forEach(function(feature) {
          let featuresParentDiv = document.getElementsByClassName('lodge-features')[0];

          // Create .feature div with .feature-item and .feature-description inside
          let featureDiv = document.createElement('div');
          featureDiv.className = 'feature';

          let featureItem = document.createElement('div');
          featureItem.className = 'feature-item';
          featureItem.innerHTML = feature.item;

          let featureDesc = document.createElement('div');
          featureDesc.className = 'feature-description';
          featureDesc.innerText = feature.description;

          featureDiv.appendChild(featureItem);
          featureDiv.appendChild(featureDesc);

          // Append the new .feature div to the parent container
          featuresParentDiv.appendChild(featureDiv);
        });

        // Add the lodge images to the page gallery
        lodge.images.forEach(function(image) {
          let galleryParentDiv = document.getElementById('gallery');

          // Create .gallery-image div for each image
          let imageDiv = document.createElement('img');
          imageDiv.className = 'gallery-image';
          imageDiv.src = image.url;

          // Add event listener to set gallery image and show full screen on click
          imageDiv.addEventListener('click', function() {
            let fullScreenGallery = document.getElementById('full-screen-gallery');
            let fullScreenGalleryImg = document.getElementById('full-screen-gallery-img');

            fullScreenGalleryImg.src = image.url;
            fullScreenGallery.style.visibility = 'visible';
          });

          galleryParentDiv.appendChild(imageDiv);
        });
        
        // Set the max guests in the guest selector: can't allow user to select 6 when lodge only fits 3
        let guestSelector = document.getElementById('guest-selector');
        
        for (let i = 1; i <= lodge.max_occupancy; i++) {
          let optionValue = document.createElement('option');
          optionValue.value = i;
          optionValue.innerText = i;
          guestSelector.appendChild(optionValue);
        }
        
        // Set the page elements to show lodge details from JSON file
        let lodgeNameVal = document.getElementsByClassName('lodge-name')[0];
        let lodgeDescriptionVal = document.getElementsByClassName('lodge-description')[0];
        let sectionLodgePhoto = document.getElementById('lodge-photo');
        let sleepCapacityVal = document.getElementById('sleep-count');
        let bedCountVal = document.getElementById('bed-count');

        lodgeNameVal.innerText = lodge.name;
        lodgeDescriptionVal.innerText = lodge.description;
        sectionLodgePhoto.style.backgroundImage = 'url("' + lodge.image_url + '")'; 
        sleepCapacityVal.innerText = lodge.no_sleeps; 
        bedCountVal.innerText = lodge.no_of_bedrooms;

        // Add available checkin dates
        let checkInSelector = document.getElementById('checkin');

        /* Only allow bookings to check in 7 days after booking online
         * Set upper checkin limit to within 30 days
         * Dates are fixed due to a datepicker not being used and no access to 
         * a booking API. If this was to be extended, a server would respond with
         * available check in and check out dates so that more than one person
         * cannot book the same length of stay in the same lodge at the same time.
         * This code just simulates the booking process in the front end through the 
         * use of <select> dropdowns.
        */

                                         // Start at 7 to set the first available checkin date to 7 days after today
        for (let i = 7; i < 37; i++) {  // End at 37 to set the last available checkin date to within 30 days
          let today = new Date();
          let date = new Date(today.setDate(today.getDate() + i));          

          let dateValue = document.createElement('option');
          dateValue.innerText = date.toDateString();
          dateValue.value = date;
          checkInSelector.appendChild(dateValue);
        }
        
      }
    })
  )
  .catch(e => console.log(e))
}

// Get lodge specified in URL parameter
var base_url = new URL(window.location.href);
var lodgeParam = base_url.searchParams.get("l");

// Select the lodge from JSON if URL param is valid, else default to 'Kingfisher'
let lodges = ['Kingfisher', 'Badgers Retreat', 'Nuthatch', 'Dormouse'];

if (lodges.includes(lodgeParam)) {
  selectLodge(lodgeParam);
} else {
  selectLodge('Kingfisher');
}

let checkInSelector = document.getElementById('checkin');  

// Dynamically add available checkout dates. Min length of stay 7 nights and max 14
checkInSelector.addEventListener('change', function() {
  let checkOutSelector = document.getElementById('checkout');
  let checkin = document.getElementById('checkin');
                                       
  for (let i = 7; i < 14; i++) {  // Start at 7 to allow checkout only after 7 days from checin and 14 for max. stay of 14 days
    let checkInDate = checkin.value;
    checkInDate = new Date(checkInDate);

    let checkOut = checkInDate;
    checkOut = checkOut.setDate(checkInDate.getDate() + i);
    checkOut = new Date(checkOut);

    let checkOutOption = document.createElement('option');
    checkOutOption.value = checkOut;
    checkOutOption.innerText = checkOut.toDateString();

    checkOutSelector.appendChild(checkOutOption);
  }
});


/* Helper function from: https://www.htmlgoodies.com/html5/javascript/calculating-the-difference-between-two-dates-in-javascript.html */
Date.daysBetween = function( date1, date2 ) {
  //Get 1 day in milliseconds
  var one_day=1000*60*60*24;

  // Convert both dates to milliseconds
  var date1_ms = date1.getTime();
  var date2_ms = date2.getTime();

  // Calculate the difference in milliseconds
  var difference_ms = date2_ms - date1_ms;
    
  // Convert back to days and return
  return Math.round(difference_ms/one_day); 
}


let searchBtn = document.getElementById('search');

// Function to run when 'search' is clicked. Calculate cost of booking and quote the customer
searchBtn.addEventListener('click', function() {
  let booking = {
    'checkin': document.getElementById('checkin').value,
    'checkout': document.getElementById('checkout').value,
    'guests': document.getElementById('guest-selector').value,
  };

  let checkin = new Date(booking.checkin);
  let checkout = new Date(booking.checkout);

  let nights = Date.daysBetween(new Date(checkin), new Date(checkout));

  /* Static rates used. Weekly rate would be loaded from JSON (server response).
   * The rate is divided by 7 to get a nightly rate, then multiplied by the 
   * number of nights that the customer wants to stay for 
  */

  let weeklyRate = 420;
  let nightlyRate = weeklyRate / 7;

  let cost = nightlyRate * nights;
})
