const url = 'js/lodges.json';  

function selectLodge(name) {
  fetch(url).then(response => response.json())
  .then(
    response => response.forEach(function(lodge) {
      if (lodge.name == name) {
        // Iterate through lodge features and output onto page
        lodge.features.forEach(function(feature) {
          let featuresParentDiv = document.getElementsByClassName('lodge-features')[0];

          // Create .feature div with .feature-item and .feature-description inside
          featureDiv = document.createElement('div');
          featureDiv.className = 'feature';

          featureItem = document.createElement('div');
          featureItem.className = 'feature-item';
          featureItem.innerHTML = feature.item;

          featureDesc = document.createElement('div');
          featureDesc.className = 'feature-description';
          featureDesc.innerHTML = feature.description;

          featureDiv.appendChild(featureItem);
          featureDiv.appendChild(featureDesc);

          // Append the new .feature div to the parent container
          featuresParentDiv.appendChild(featureDiv);
        });
        
        // Set the page elements to show lodge details from JSON file
        let lodgeNameVal = document.getElementsByClassName('lodge-name')[0];
        let lodgeDescriptionVal = document.getElementsByClassName('lodge-description')[0];
        let sectionLodgePhoto = document.getElementById("lodge-photo");
        
        lodgeNameVal.innerHTML = lodge.name;
        lodgeDescriptionVal.innerHTML = lodge.description;
        sectionLodgePhoto.style.backgroundImage = 'url("' + lodge.image_url + '")';  
      }
    })
  )
  .catch(e => console.log(e))
}

// Get lodge specified in URL parameter
var base_url = new URL(window.location.href);
var lodgeParam = base_url.searchParams.get("l");

// Select the lodge from JSON if URL param is valid, else default to 'Kingfisher'
let lodges = [
  'Kingfisher',
  'Badgers Retreat',
  'Nuthatch',
  'Dormouse'
];

if (lodges.includes(lodgeParam)) {
  selectLodge(lodgeParam);
} else {
  selectLodge('Kingfisher');
}