let mobileNavBtn = document.getElementById('mobile-show');
let mobileNavMenu = document.getElementById('mobile');

mobileNavBtn.addEventListener('click', function() {
  if (mobileNavMenu.style.display == 'block') {
    mobileNavMenu.style.display = 'none';
  } else {
    mobileNavMenu.style.display = 'block';
  }
});