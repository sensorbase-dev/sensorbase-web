/* globals Chart:false, feather:false */

$( document ).ready(function() {
  let inputSelector = document.getElementById('input-type-selector');
  let inputType = inputSelector.value;
  getSensorReadingsByType(inputType, populateComponentChart);
});

function populateInputTypeSelector() {
  let inputSelector = document.getElementById('input-type-selector');

}

function populateComponentChart(sensorReadings) {
  'use strict'

  console.log(sensorReadings);
  let data = [];
  sensorReadings.forEach( (sr) => {
    let datapoint = {
      x : sr.time,
      y : sr.value
    }
    data.push(datapoint);
  });
  console.log(data);

  feather.replace()

  // Graphs
  var ctx = document.getElementById('component-chart')
  // eslint-disable-next-line no-unused-vars
  var componentChart = new Chart(ctx, {
    type: 'line',
    data: {
      datasets: [{
        data: data,
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      scales: {
        xAxes : [{
          type: 'time'
        }],
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false
      }
    }
  })
}
