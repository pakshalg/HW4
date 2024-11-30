/*
NAME:  Pakshal Gandhi
SID:   01772844
EMAIL: Pakshal_Gandhi@student.uml.edu
FILE:  js.js

Last modified: 11/19/24
*/


/*
NAME:  Pakshal Gandhi
SID:   01772844
EMAIL: Pakshal_Gandhi@student.uml.edu
FILE:  js.js

Last modified: 11/19/24
*/

$(document).ready(function() {
  $('#inputNum').validate({
    rules: {
      xMin: { required: true, number: true, range: [-50, 50] },
      xMax: { required: true, number: true, range: [-50, 50] },
      yMin: { required: true, number: true, range: [-50, 50] },
      yMax: { required: true, number: true, range: [-50, 50] }
    },
    messages: {
      xMin: { required: "Please enter a starting row number.", number: "Enter a valid number.", range: "Number must be between -50 and 50." },
      xMax: { required: "Please enter an ending row number.", number: "Enter a valid number.", range: "Number must be between -50 and 50." },
      yMin: { required: "Please enter a starting column number.", number: "Enter a valid number.", range: "Number must be between -50 and 50." },
      yMax: { required: "Please enter an ending column number.", number: "Enter a valid number.", range: "Number must be between -50 and 50." }
    },
    errorPlacement: function(error, element) {
      error.insertAfter(element);
      error.css({
        'display': 'inline-block',  // Ensure error message stays on the same line
        'margin-left': '10px',       // Add left margin to error message
      });
    },
    submitHandler: function(form) {
      const xMin = parseInt($('#xMin').val());
      const xMax = parseInt($('#xMax').val());
      const yMin = parseInt($('#yMin').val());
      const yMax = parseInt($('#yMax').val());
      $('#output').empty();
      generateMultiplicationTable(xMin, xMax, yMin, yMax);
    }
  });
});

function generateMultiplicationTable(xMin, xMax, yMin, yMax) {
  let tableHTML = '<table>';
  tableHTML += '<tr><th></th>';

  for (let x = xMin; x <= xMax; x++) {
    tableHTML += `<th>${x}</th>`;
  }
  tableHTML += '</tr>';

  for (let y = yMin; y <= yMax; y++) {
    tableHTML += `<tr><th>${y}</th>`;
    for (let x = xMin; x <= xMax; x++) {
      const isEvenRow = (y - yMin) % 2 === 0;
      const isEvenCol = (x - xMin) % 2 === 0;
      const bgColor = (isEvenRow === isEvenCol) ? '#fff0ff' : '#555555';
      tableHTML += `<td style="background-color: ${bgColor}; border: 1px solid #ddd;">${x * y}</td>`;
    }
    tableHTML += '</tr>';
  }

  tableHTML += '</table>';
  $('#output').html(tableHTML);
}
