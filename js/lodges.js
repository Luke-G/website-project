const url = 'http://127.0.0.1:8000/js/lodges.json';  

function selectLodge(name) {
  fetch(url).then(r => r.json())
  .then(
    response => response.forEach(function(lodge) {
      if (lodge.name == name) {

        // Iterate through lodge features and output onto page
        lodge.features.forEach(function(feature) {
          let featuresParentDiv = document.getElementsByClassName('lodge-features')[0];

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

          featuresParentDiv.appendChild(featureDiv);
        });
        
        // Set the page elements to show lodge details
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

// Select first lodge if none specified in URL
selectLodge('Kingfisher');