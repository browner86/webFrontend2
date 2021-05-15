mapboxgl.accessToken = 'pk.eyJ1IjoibWVzcXVpdGVyb290IiwiYSI6ImNrb3BsenR1NzA1Zm4ycHBkcTFvMjNpem0ifQ.W-c-AWnk-9ZiRRrziJr8dg';

navigator.geolocation.getCurrentPosition(successLocation,errorLocation, {enableHighAccurracy: true})

function successLocation(position) {
  console.log(position);
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {

}
function setupMap(center) {
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center:center,
    zoom:10
  });


const nav = new mapboxgl.NavigationControl();
map.addControl(nav)
}


const directions = new MapboxDirections({
  accessToken: mapboxgl.accessToken
});

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v9'
});

map.addControl(directions, 'top-left');


// var map = new mapboxgl.Map({
//   container: 'map',
//   style: 'mapbox://styles/mapbox/streets-v11'
// });
