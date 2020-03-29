/ from data.js
var tableData = data;
// Get a reference to the table body
function builtTable (data) {

var tbody = d3.select("tbody");
tbody.html('')
// Console.log the weather data from data.js
console.log(tableData);
data.forEach((ufoSight) => {
    var row = tbody.append("tr");
    Object.values(ufoSight).forEach((value) => {
      var cell = row.append("td");
      cell.text(value);
    });
});
}
builtTable (tableData);
var filters = {};

function updateFilters () {
  var changedelement = d3.select (this).select('input');
  var elementValue = changedelement.property ('value');
  var filterId = changedelement.attr ('id');
  if (elementValue) {
    filters [filterId] = elementValue;
  }
  else {
  delete filters[filterId];
  }

filterTable();
}
function filterTable () {
  let filterData = tableData;
  Object.entries (filters).forEach(([key, value])=>{
    filterData=filterData.filter(row => row [key] === value);
  });
  builtTable(filterData);
}
d3.selectAll('.filter').on ('change', updateFilters);

 

