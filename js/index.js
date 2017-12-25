// JavaScript to enable smooth scrolling on button clicks

let learnMoreBtn = document.getElementById('learnMoreBtn');
let lakesInfoBtn = document.getElementById('lakesInfoBtn');

let introDiv = document.getElementById('intro');
let lakesDiv = document.getElementById('lakes');

learnMoreBtn.addEventListener('click', function() {
  introDiv.scrollIntoView({behavior: 'smooth'});
});

lakesInfoBtn.addEventListener('click', function() {
  lakesDiv.scrollIntoView({behavior: 'smooth'});
});