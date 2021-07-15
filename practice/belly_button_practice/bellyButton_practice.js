// retrieve data from samples.json
d3.json("samples.json").then(function(data){
    console.log(data);
});

// extract only the wfreq (weekly belly button washing frequency), 
// of each person into a new array,
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
    // sort the wfreq array in descending order
    person.wfreq).sort((a,b) => b - a);
    // delete null values from the sorted wfreq array
    filteredWfreq = wfreq.filter(element => element !=
null);
    console.log(filteredWfreq);
});

// display the metadata of the first individual in the dataset
d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});


// Open Git Bash, navigate to folder, type "python -m http.server" 
// open http://127.0.0.1:8000/ on browser