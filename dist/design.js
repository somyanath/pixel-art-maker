// To pick the color and create the row and column elements
var color = document.querySelector('#color-picker').value;
console.log(color);

// To make the grid when the size is submitted by the user
document.querySelector('#create-grid').addEventListener('click', function (e) {
  e.preventDefault();

  var table, rows, columns;

  table = document.querySelector('#pixel-canvas');
  rows = document.querySelector('#input-rows').value;
  columns = document.querySelector('#input-cols').value;

  if (rows > 150) {
    rows = 150;
  }
  if (columns > 150) {
    columns = 150
  }

  while (table.firstChild) {
    table.removeChild(table.firstChild);
  }
  // // Another way to remove the rows
  // table.innerHTML = '';

  for (i = 0; i < rows; i++) {
    var row = document.createElement("tr");
    table.appendChild(row);
    for (j = 0; j < columns; j++) {
      var column = document.createElement("td");
      row.appendChild(column);
    }
  }
});

document.querySelector('#color-picker').addEventListener('change', function () {
  color = document.querySelector('#color-picker').value;
});

document.querySelector('#pixel-canvas').addEventListener('click', function (e) {
  if (e.target.localName == 'td') {
    if (e.target.style.backgroundColor !== '') {
      e.target.style.backgroundColor = '';
    } else {
      e.target.style.backgroundColor = color;
    }
  };
});