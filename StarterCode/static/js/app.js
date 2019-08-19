// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// loop through data in the tableData
tableData.forEach((item) => {
    // Use d3 to append one table row `tr` for each weather report object
    var row = tbody.append("tr");
    Object.entries(item).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Select the button
var button = d3.select("#filter-btn");

// Complete the click handler for the form
button.on("click", function() {


    // Get the value property of the input element
    var inputDate = d3.select("#datetime").property("value");
    var inputCity = d3.select("#city").property("value");
    var inputState = d3.select("#state").property("value");
    var inputCountry = d3.select("#country").property("value");
    var inputShape = d3.select("#shape").property("value");

    // initialize the filtered data
    var filtered = tableData;

    // filter for data
    if (inputDate.length > 0) {
    filtered = filtered.filter(item => item.datetime === inputDate)
    }

    // filter for city
    if (inputCity.length > 0) {
    filtered = filtered.filter(item => item.city === inputCity)
    }

    // filter for state
    if (inputState.length > 0) {
    filtered = filtered.filter(item => item.state === inputState)
    }

    // filter for country
    if (inputCountry.length > 0) {
    filtered = filtered.filter(item => item.country === inputCountry)
    }

    // filter for ufo shape
    if (inputShape.length > 0) {
    filtered = filtered.filter(item => item.shape === inputShape)
    }

    // remove original table
    tbody.html('');

    // add filtered data to table body
    filtered.forEach((item) => {
        var row = tbody.append("tr");
        Object.entries(item).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
    });
  });
});