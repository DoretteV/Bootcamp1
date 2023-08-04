//Geolocation 
//if you need to convert degrees/minutes/seconds to decimal, you can use the following function

function degreesToDecimal (degrees, minutes, seconds) {
    return degrees + (minutes / 60.0) + (seconds / 3600.0);
}