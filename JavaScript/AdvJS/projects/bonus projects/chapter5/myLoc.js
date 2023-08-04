let map = null;

//define a literal object for the coordinates of our location at the Wickedly Smart HQ
let ourCoords = {
    latitude: 47.624851,
    longitude: -122.52099
};

let watchId = null;

// calling the function getMyLocation as soon as the browser loads the page
window.onload = getMyLocation;

function getMyLocation() {
    //check to make sure the browser supports the Geolocation API
    if (navigator.geolocation) {
        //displayerror function is going to get called when geolocation fails to find a location
        //navigator.geolocation.getCurrentPosition(displayLocation, displayError);
        //we're going to call watchLocation to start the watch, and clearWatch to stop it
        let watchButton = document.getElementById("watch");
        watchButton.onclick = watchLocation;
        let clearWatchButton = document.getElementById("clearWatch");
        clearWatchButton.onclick = clearWatch;
    } else {
        alert("Oops, no geolocation support");
    }
}

//Here's our handler which is going to get called when the browser has a location
function displayLocation(position) {
//getcurrentposition's handler is passed a position which contains the latitude and longitude of your location
//grab the latitude and longitude of your location from the position.coords object
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let div = document.getElementById("location");
    //then we grab <div> from the HTML
    div.innerHTML = "You are at Latitude: " + latitude + ", Longitude: " + longitude;
    //here we use the accuracy property of position and append onto the end of the <div>'s innerHTML
    div.innerHTML += " (with " + position.coords.accuracy + " meters accuracy)";

     //passing the coordinates of your position and also our coordinates to computeDistance
     let km = computeDistance(position.coords, ourCoords);
     let distance = document.getElementById("distance");
     distance.innerHTML = "You are " + km + " km from the WickedlySmart HQ";

    if (map == null) {
        //call showmap function and add the first marker
        showMap(position.coords);
    } else {
        scrollMapToPosition(position.coords);   //adding a new marker to the existing map
    } 
}

// add an error handler to the getcurrentposition method
// this handler is going to get called anytime the geolocation api encounters a problem

//new handler which is passed an error by the geolocation api
function displayError(error) {
    //the error object contains a code property that has a number from 0 to 3
    let errorTypes = {
        0: "Unknown error",
        1: "Permission denied by user",
        2: "Position is not available",
        3: "Request timed out"
    };
    //using the error.code property we assign one of those strings to a new variable, errorMessage
    let errorMessage = errorTypes[error.code];
    if (error.code == 0 || error.code == 2) {
        //in the case of errors 0 & 2 there is sometimes additional info in the error.message property so we add that to our errorMessage string
        errorMessage = errorMessage + " " + error.message;
    }
    let div = document.getElementById("location");
    div.innerHTML = errorMessage;
}

//Ready bake
//Uses the Spherical Law of Cosines to find the distance between them
//this function take 2 coordinates, a start coordinate and a destination coordinate and returns the distance in kilometers between them
function computeDistance(startCoords, destCoords) {
  var startLatRads = degreesToRadians(startCoords.latitude);
  var startLongRads = degreesToRadians(startCoords.longitude);
  var destLatRads = degreesToRadians(destCoords.latitude);
  var destLongRads = degreesToRadians(destCoords.longitude);
  var Radius = 6371; // radius of the Earth in km
  var distance =
    Math.acos(
      Math.sin(startLatRads) * Math.sin(destLatRads) +
        Math.cos(startLatRads) *
          Math.cos(destLatRads) *
          Math.cos(startLongRads - destLongRads)
    ) * Radius;
  return distance;
}

function degreesToRadians(degrees) {
  var radians = (degrees * Math.PI) / 180;
  return radians;
}
//End of Ready Bake

// getting ready to create a map

//google.maps precedes all the methods of the google maps api
//displaying the map
//declaring a global variable map thats going to hold the google map after we create it

function showMap(coords) {
    //LatLng is the constructor, which takes out lat & long and returns a new object that holds them both
    let googleLatandLong = new google.maps.LatLng(coords.latitude, coords.longitude);

    //google gives us some options we can set to control how the map is created.
    //zoomed in or out, where the map is centered and type of map
    let mapOptions = {
        zoom: 10,
        center: googleLatandLong,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    let mapDiv = document.getElementById("map");
    //we are using the new map object to our global variable map
    //Map is another constructor from googles api, which takes an element and our options and creates and returns a map object
    //we grab map <div> from the DOM and pass it and the mapOptions to the Map constructor to create the google.maps.Map object. 
    //This displays the map in our page.
    map = new google.maps.Map(mapDiv, mapOptions);

    //add the marker
    let title = "Your Location";
    let content = "You are here: " + coords.latitude + ", " + coords.longitude;
    addMarker(map, googleLatandLong, title, content);
}

//the addmarker function takes a map, a google-style latitude & longitude, a title for the marker, & also some content for the info window
function addMarker (map, latlong, title, content) {
    let markerOptions = {
        position: latlong,
        map: map,
        title: title,
        clickable: true         //set it to true because we want to be able to display an info window when clicked
    };
    //then we create the marker object by using yet another constructor form googles api and pass it the markerOptions object we created.
    let marker = new google.maps.Marker(markerOptions);

    let infoWindowOptions = {
        content: content,
        position: latlong       //latitude and longitude
    };
    //creating the info window
    let infoWindow = new google.maps.InfoWindow(infoWindowOptions);
    //we pass the listener a function that gets called when the user clicks on the marker
    google.maps.event.addListener(marker, "click", function () {
        //when the marker is clicked, this function is called and the infoWindow opens on the map
        infoWindow.open(map);
    })
}

//watch the users location
function watchLocation() {
    //calling the watchposition & passing the success handler displayLocation & error handler displayError
    watchId = navigator.geolocation.watchPosition(displayLocation, displayError, {timeout:5000});
    //by setting timeout to 5000miliseconds you're making sure the browser doesnt sit there forever trying to get a location
}

function clearWatch () {
    //make sure there's a watchID
    if (watchId) {
        //call the geolocation.clearwatch method, passing in the watchid. This stops the watching
        navigator.geolocation.clearWatch(watchId);
        watchId = null;
    }
}

//calling function scrollmaptoposition and pass positions coordinates
//coordinates are going to be your latest new position, we're going to center the map on that location
//and drop a marker there too
function scrollMapToPosition(coords) {
    let latitude = coords.latitude;
    let longitude = coords.longitude;
    let latlong = new google.maps.LatLng(latitude, longitude);
    //the panto method of the map takes the latlng object and scrolls the map so your new location is at the center of the map
    map.panTo(latlong);
    //adding the new marker
    addMarker(map, latlong, "Your new location", "You moved to: " + latitude + ", " + longitude);
}