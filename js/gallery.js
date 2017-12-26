let fullScreenGallery = document.getElementById('full-screen-gallery');
let fullScreenGalleryImg = document.getElementById('full-screen-gallery-img');

// Hide gallery on click if open
fullScreenGalleryImg.addEventListener('click', function() {
  if (fullScreenGallery.style.visibility == 'visible') {
    fullScreenGallery.style.visibility = 'hidden';
  }
});