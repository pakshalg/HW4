/*
NAME:  Pakshal Gandhi
SID:   01772844
EMAIL: Pakshal_Gandhi@student.uml.edu
FILE:  js.js

Last modified: 11/29/24
*/


$(document).ready(function() {
  $('#inputNum').validate({
    rules: {
      xMin: { required: true, number: true, range: [-50, 50] },
      xMax: { required: true, number: true, range: [-50, 50], greaterThan: "#xMin" },
      yMin: { required: true, number: true, range: [-50, 50] },
      yMax: { required: true, number: true, range: [-50, 50], greaterThan: "#yMin" }
    },
    messages: {
      xMin: { required: "Please enter row min.", number: "Enter a valid number.", range: "Number must be between -50 and 50." },
      xMax: { required: "Please enter row max.", number: "Enter a valid number.", range: "Number must be between -50 and 50.", greaterThan: "Row max cannot be greater than row min!" },
      yMin: { required: "Please enter column min.", number: "Enter a valid number.", range: "Number must be between -50 and 50." },
      yMax: { required: "Please enter column max.", number: "Enter a valid number.", range: "Number must be between -50 and 50.", greaterThan: "Column max cannot be greater than column min!" }
    },
    errorPlacement: function(error, element) {
      error.insertAfter(element);
      error.css({
        'display': 'inline-block',
        'margin-left': '10px',
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

  // Custom validation method to check if the maximum value is greater than or equal to the minimum value
  $.validator.addMethod("greaterThan", function(value, element, param) {
    return parseInt(value) >= parseInt($(param).val());
  }, "The value must be greater than or equal to the minimum value.");
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
