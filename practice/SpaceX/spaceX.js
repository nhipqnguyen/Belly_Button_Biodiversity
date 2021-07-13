const url = "https://api.spacexdata.com/v2/launchpads";

// retrieve data from the url
d3.json(url).then(receivedData => console.log(receivedData));

// retrieve the details only from the Vandenberg Air Force Base
d3.json(url).then(spaceXResults =>
    console.log(spaceXResults[0]));

// retrieve full name of the Vandenberg Airforce Base:
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

// access the latitude of the Vandenberg Airforce Base
d3.json(url).then(spaceXResults =>
    console.log(spaceXResults[0].location.latitude));

/*
    // print only the latitude and longitude coordinates of each SpaceX launch station
 var receivedData = d3.json(url).then(receivedData => receivedData);
var latLong = receivedData.map(station => station.location);
console.log(latLong);
*/