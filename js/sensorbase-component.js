
$( document ).ready(function() {
  let urlParams = new URLSearchParams(window.location.search);
  if (!urlParams.has('componentId')) {
    return;
  } 
  let componentId = urlParams.get('componentId');
  
  if (document.getElementById('component-details') != null) {
    getComponent(componentId, populateComponentDetails);
  }
  
  if (document.getElementById("sensorReadingTable") != null) {
    getSensorReadingsByComponentId(componentId, populateSensorReadingTable);
  }
});

function populateComponentDetails(component) {
  let componentTitle = document.getElementById('component-title');
  componentTitle.innerHTML = `${component.inputType} - ${component.parentDevice.name}`;
}

function populateSensorReadingTable(sensorReadings) {
  for (var i = 0; i < sensorReadings.length; i++) {
    console.log(sensorReadings[i]);
    var sensorReadingRow = document.createElement("tr");
    var sensorReadingId = document.createElement("td");
    var value = document.createElement("td");
    var time = document.createElement("td");
    
    sensorReadingId.innerHTML = sensorReadings[i].sensorReadingId;
    value.innerHTML = sensorReadings[i].value;
    time.innerHTML = sensorReadings[i].time;
    
    sensorReadingTable = document.getElementById("sensorReadingTable");
    sensorReadingTable.appendChild(sensorReadingRow);
    sensorReadingRow.appendChild(sensorReadingId);
    sensorReadingRow.appendChild(value);
    sensorReadingRow.appendChild(time);
  }
}