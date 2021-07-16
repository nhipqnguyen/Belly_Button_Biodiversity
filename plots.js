function init() {
    // select the dropdown menu, which has an id of #selDataset. 
    // The dropdown menu is assigned to the variable selector
    var selector = d3.select("#selDataset");
  
    // read the data from samples.json
    // and assign it to the variable data
    d3.json("samples.json").then((data) => {
        console.log(data);
        // assign the array 'names' containing ID numbers 
        // of all the study participants to the variable sampleNames
        var sampleNames = data.names;
        // For each element in the names array,
        sampleNames.forEach((sample) => {
            selector
                // a menu option is appended to the dropdown menu    
                .append("option")
                // assign the ID to the text of each dropdown menu option
                .text(sample)
                // its value property is also assigned the ID
                .property("value", sample);
      });
  })}

// Call the function
init();

// create a function to filter a volunteer's demographic information 
// from samples.json and placed in the panel
// The function takes in sample, or an ID number, as its argument
function buildMetadata(sample) {
    // read the data from samples.json
    // and assign it to the variable data
    d3.json("samples.json").then((data) => {
        // The metadata array in the dataset
        // is assigned the variable metadata
        var metadata = data.metadata;
        // filter the metadata array for an object in the array 
        // whose id property matches the ID number passed into buildMetadata() as sample
        var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
        // Because the results of the filter() method are returned as an array, 
        // assign the 1st item in the array to the variable result
        var result = resultArray[0];
        // create a string variable to hold the volunteer's demogrpahic info
        /*var demogrpahicInfo = `ID: ${result.id}`
                            + newLine
                            + `ETHNICITY: ${result.ethnicity}`
                            + newLine
                            + `GENDER: ${result.gender}`
                            + newLine
                            + `AGE: ${result.age}`
                            + newLine
                            + `LOCATION: ${result.location}`
                            + newLine
                            +`BBTYPE: ${result.bbtype}`
                            + newLine
                            + `WFREQ: ${result.wfreq}`; */
        // select the div of the Demographic Info panel (whose id is sample-metadata)
        // and assign it to the variable PANEL
        var PANEL = d3.select("#sample-metadata");
        // ensure that the contents of the panel are cleared 
        // when another ID number is chosen from the dropdown menu
        PANEL.html("");
        result.forEach((info) => {
            PANEL.append("h6").appendChild("br").text(info);
        });
        // append a h6 heading to the panel 
        // and print the demographic info to the panel, respectively
        //PANEL.append("h6").text(demogrpahicInfo);
    });
}

// create a function to be called in index.html so that
// when an ID number is selected from the menu,
    // 1. the demographic information panel is populated with a specific volunteer's information.
    // 2. the volunteer's data is visualized in a separate div
function optionChanged(newSample) {
    buildMetadata(newSample);
    //buildCharts(newSample);
  }