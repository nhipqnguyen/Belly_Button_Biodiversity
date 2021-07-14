
// Skill Drill

// create an event listener
// when an event occurs on the page, such as selection of a dropdown menu option, 
// the updatePage() function is triggered
d3.selectAll("body").on("change", updatePage);

function updatePage() {
    // select the dropdown menu, which has an id of selectOption
    var dropdownMenu = d3.selectAll("#selectOption").node();
    // Assign the id of the dropdown menu, selectOption, to the variable dropdownMenuID
    var dropdownMenuID = dropdownMenu.id;
    // Whenever a dropdown menu option is selected, 
    // its value is assigned the variable selectedOption
    var selectedOption = dropdownMenu.value.text;
    // print the id value of the dropdown menu 
    // and the value of the chosen menu option
    console.log(selectedOption);
};