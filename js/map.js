function initMap() {
  let southCombeWaters = {lat: 50.877572, lng: -3.26236};

  let map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: southCombeWaters
  });

  let marker = new google.maps.Marker({
      position: southCombeWaters,
      map: map
  });
}