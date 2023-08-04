//calling the function getMyLocation as soon as the browser loads the page
// window.onload = getMyLocation;

// function getMyLocation() {
//     //check to make sure the browser supports the Geolocation API
//     if (navigator.geolocation) {
//         //if it does then we call the getcurrentposition method and pass in a handler function, displaylocation
//         navigator.geolocation.getCurrentPosition(displayLocation);
//         //the displayLocation function is the handler thats going to get its hands on the location
//     } else {
//         alert("Oops, no geolocation support");
//     }
// }

// //Here's our handler which is going to get called when the browser has a location
// function displayLocation(position) {
// //getcurrentposition's handler is passed a position which contains the latitude and longitude of your location
// //grab the latitude and longitude of your location from the position.coords object
//     let latitude = position.coords.latitude;
//     let longitude = position.coords.longitude;
//     let div = document.getElementById("location");
//     //then we grab <div> from the HTML
//     div.innerHTML = "You are at Latitude: " + latitude + ", Longitude: " + longitude;
// }

//add an error handler to the getcurrentposition method
//this handler is going to get called anytime the geolocation api encounters a problem

////displayerror function is going to get called when geolocation fails to find a location
// navigator.geolocation.getCurrentPosition(displayLocation, displayError);

// //new handler which is passed an error by the geolocation api
// function displayError(error) {
//     //the error object contains a code property that has a number from 0 to 3
//     let errorTypes = {
//         0: "Unknown error",
//         1: "Permission denied by user",
//         2: "Position is not available",
//         3: "Request timed out"
//     };
//     //using the error.code property we assign one of those strings to a new variable, errorMessage
//     let errorMessage = errorTypes[error.code];
//     if (error.code == 0 || error.code == 2) {
//         //in the case of errors 0 & 2 there is sometimes additional info in the error.message property so we add that to our errorMessage string
//         errorMessage = errorMessage + " " + error.message;
//     }
//     let div = document.getElementById("location");
//     div.innerHTML = errorMessage;
// }

//revealing our secret location

// //this function take 2 coordinates, a start coordinate and a destination coordinate and returns the distance in kilometers between them
// function computeDistance(startCoords, destCoords) {
//   var startLatRads = degreesToRadians(startCoords.latitude);
//   var startLongRads = degreesToRadians(startCoords.longitude);
//   var destLatRads = degreesToRadians(destCoords.latitude);
//   var destLongRads = degreesToRadians(destCoords.longitude);
//   var Radius = 6371; // radius of the Earth in km
//   var distance =
//     Math.acos(
//       Math.sin(startLatRads) * Math.sin(destLatRads) +
//         Math.cos(startLatRads) *
//           Math.cos(destLatRads) *
//           Math.cos(startLongRads - destLongRads)
//     ) * Radius;
//   return distance;
// }

// function degreesToRadians(degrees) {
//   var radians = (degrees * Math.PI) / 180;
//   return radians;
// }

// //define a literal object for the coordinates of our location at the Wickedly Smart HQ
// let ourCoords = {
//     latitude: 47.624851,
//     longitude: -122.52099
// };

// function displayLocation(position) {
//     let latitude = position.coords.latitude;
//     let longitude = position.coords.longitude;

//     let div = document.getElementById("location");
//     div.innerHTML = "You are at Latitude: " + latitude + ", Longitude: " + longitude;

//     //passing the coordinates of your position and also our coordinates to computeDistance
//     let km = computeDistance(position.coords, ourCoords);
//     let distance = document.getElementById("distance");
//     distance.innerHTML = "You are " + km + " km from the WickedlySmart HQ";
// }
// window.onload = getMyLocation;

// function getMyLocation() {
//     //check to make sure the browser supports the Geolocation API
//     if (navigator.geolocation) {
//         //if it does then we call the getcurrentposition method and pass in a handler function, displaylocation
//         navigator.geolocation.getCurrentPosition(displayLocation);
//         //the displayLocation function is the handler thats going to get its hands on the location
//     } else {
//         alert("Oops, no geolocation support");
//     }
// }

