function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("survey.json").then((data) => {
    var sampleIds = data.ids;

    sampleIds.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleIds[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
  
}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("survey.json").then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}

// 1. Create the buildCharts function.
function buildCharts(sample) {
  // 2. Use d3.json to load and retrieve the survey.json file 
  d3.json("survey.json").then((data) => {
    console.log(data);
    // 3. Create a variable that holds the food array. 
    var dishes = data.food;
    // 4. Create a variable that filters the samples for the object with the desired sample number.
    var resultSampleArray = dishes.filter(sampleObj => sampleObj.id == sample);
    //  5. Create a variable that holds the first sample in the array.
    var resultSample = resultSampleArray[0];
    // 6. Create variables that hold the ids and dishes.
    var dish = resultSample.fav_dishes;

    // 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order  
    // so the otu_ids with the most bacteria are last.

    // 8. Create the trace for the bar chart. 
    var trace = {
      x: [5 ,4, 3, 2, 1]
      y: dish,
      type: "bar",
      orientation: "h",
      marker: {color: "lightblue"}
    };
    var barData = [trace];
    // 9. Create the layout for the bar chart. 
    var barLayout = {
      title: "Top 5 Favorite Dishes",
    };
    // 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot("bar",barData, barLayout);


    // 1. Create a variable that filters the metadata array for the object with the desired sample number.
    var exercises = data.exercise;
    var resultExerciseArray = exercises.filter(sampleObj => sampleObj.id == sample);

    // 2. Create a variable that holds the first sample in the metadata array.
    var resultMetadata = resultExerciseArray[0];

    // 3. Create a variable that holds the washing frequency.
    var wfreq = parseFloat(resultMetadata.freq);
 
    // 4. Create the trace for the gauge chart.
    var gaugeData = [{
      domain: {x: [0, 1], y: [0, 1]},
      value: wfreq,
      title: {text: "Exercise Frequency per Week"},
      type: "indicator",
      mode: "gauge+number",
      gauge: {
        axis: {range: [null, 7]},
        bar: {color: "#ab7846"},
        steps: [
          {range: [0, 1], color: "#9db8d1", opacity: 0.95},
          {range: [1, 2], color: "#7ea0bf", opacity: 0.95},
          {range: [2, 3], color: "#537da3", opacity: 0.95},
          {range: [3, 4], color: "#37628a", opacity: 0.95},
          {range: [5, 6], color: "#1c4163", opacity: 0.95},
          {range: [6, 7], color: "#091f33", opacity: 0.95}
        ]        
      }
    }];
    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = {
      width: 500, 
      height: 350, 
      margin: { t: 0, b: 0 }
    };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot(gauge, gaugeData, gaugeLayout);
  });
}
