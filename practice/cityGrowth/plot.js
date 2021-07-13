console.log(cityGrowths);

// sort the cities by population growth
var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse(); 

// select only the top five cities by population growth
var topFiveCities = sortedCities.slice(0,5);

// use the map() method to extract top 5' city names and growth figures
// and put them into 2 arrays
// use parseInt()method to convert strings to integers
var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));

// create a bar chart for the top 5 cities by population growth
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);

/*
  // Use the same dataset to create a bar chart of
// the seven largest cities by population.

    // sort the cities by population
var sortedCitiesbyPopulation = cityGrowths.sort((a,b) =>
a.population - b.population).reverse(); 

    // select only the top 7 cities by population
var topSevenCities = sortedCitiesbyPopulation.slice(0,7);

    // use the map() method to extract top 7' city names and population
    // and put them into 2 arrays
    // use parseInt()method to convert strings to integers
var topSevenCityNames = topSevenCities.map(city => city.City);
var topSevenCityPopulation = topSevenCities.map(city => parseInt(city.population));

    // create a bar chart for the top 7 cities by population
var trace = {
    x: topSevenCityNames,
    y: topSevenCityPopulation,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Cities with largest population",
    xaxis: {title: "City" },
    yaxis: {title: "Population"}
  };
  Plotly.newPlot("bar-plot", data, layout);
*/


