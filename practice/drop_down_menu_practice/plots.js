// When the user first loads the page, init() is called, 
// and the initial plot is rendered
function init() {
    data = [{
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 4, 8, 16] }];
    Plotly.newPlot("plot", data);
  };
  
  // when a change takes place to the HTML DOM element with the id of dropdownMenu, 
  // the upDatePlotly() function is triggered
  d3.selectAll("#dropdownMenu").on("change", updatePlotly);

function updatePlotly() {
    // The variable dropdownMenu is assigned to 
    // the DOM element with the id of dropdownMenu from index.html
    var dropdownMenu = d3.select("#dropdownMenu");

    // The variable dataset is assigned to the value of 
    // the dropdown menu option selected by the user
    var dataset = dropdownMenu.property("value");
  
    // the x-axis values, remain the same
    var xData = [1, 2, 3, 4, 5];

    // initialize the y-axis values with a blank array
    var yData = [];
  
    // Depending on which value of the dropdown menu option is selected, 
    // yData is assigned an array of integers
    if (dataset === 'dataset1') {
      yData = [1, 2, 4, 8, 16];
    };
  
    if (dataset === 'dataset2') {
      yData = [1, 10, 100, 1000, 10000];
    };
  
    var trace = {
      x: [xData],
      y: [yData],
    };

    // re-render the page on the browser
    // thePlotly.restyle() method defaults to accepting an object
    // as its data argument, rather than an array.
    Plotly.restyle("plot", trace);
  };
  
init();