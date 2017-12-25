// Strict mode to ensure good coding standards are used
'use strict';

const url = 'js/lodges.json';  

// Get the JSON file then iterate until the requested lodge object is found
function selectLodge(name) {
  fetch(url).then(response => response.json())
  .then(
    response => response.forEach(function(lodge) {
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
          featureDesc.innerHTML = feature.description;

          featureDiv.appendChild(featureItem);
          featureDiv.appendChild(featureDesc);

          // Append the new .feature div to the parent container
          featuresParentDiv.appendChild(featureDiv);
        });

        // Add the lodge images to the page gallery
        lodge.images.forEach(function(image) {
          let galleryParentDiv = document.getElementById('gallery');

          // Create .gallery-image div for each image
          let imageDiv = document.createElement('div');
          imageDiv.className = 'gallery-image';
          imageDiv.innerHTML = '<img src="' + image.url + '">';

          galleryParentDiv.appendChild(imageDiv);
        });
        
        // Set the page elements to show lodge details from JSON file
        let lodgeNameVal = document.getElementsByClassName('lodge-name')[0];
        let lodgeDescriptionVal = document.getElementsByClassName('lodge-description')[0];
        let sectionLodgePhoto = document.getElementById('lodge-photo');
        let sleepCapacityVal = document.getElementById('sleep-count');
        let bedCountVal = document.getElementById('bed-count');

        lodgeNameVal.innerHTML = lodge.name;
        lodgeDescriptionVal.innerHTML = lodge.description;
        sectionLodgePhoto.style.backgroundImage = 'url("' + lodge.image_url + '")'; 
        sleepCapacityVal.innerHTML = lodge.no_sleeps; 
        bedCountVal.innerHTML = lodge.no_of_bedrooms;
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