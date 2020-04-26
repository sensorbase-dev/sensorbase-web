
$( document ).ready(function() {
    if (document.getElementById("deviceTable") != null) {
        getDevices(populateDeviceTable);
    }
    if (document.getElementById("sensorTable") != null) {
        getSensors(populateSensorTable);
    }
    if (document.getElementById("sensorReadingTable") != null) {
        getSensorReadings(populateSensorReadingTable);
    }
});

function populateDeviceTable(devices) {
    for (var i = 0; i < devices.length; i++) {
        //console.log(devices[i]);
        var deviceRow = document.createElement("tr");
        var deviceId = document.createElement("td");
        var hardwareUidHex = document.createElement("td");
        var deviceName = document.createElement("td");
        var deviceOwner = document.createElement("td");
        var lastUplink = document.createElement("td");

        deviceId.innerHTML = devices[i].deviceId;
        hardwareUidHex.innerHTML = devices[i].hardwareUidHex;
        deviceName.innerHTML = devices[i].name;
        //deviceOwner.innerHTML = devices[i].owner.userName;
        //lastUplink.innerHTML = devices[i].lastUplink;

        deviceTable = document.getElementById("deviceTable");
        deviceTable.appendChild(deviceRow);
        deviceRow.appendChild(deviceId);
        deviceRow.appendChild(hardwareUidHex);
        deviceRow.appendChild(deviceName);
        deviceRow.appendChild(deviceOwner);
        deviceRow.appendChild(lastUplink);
    }
}

function populateSensorTable(sensors) {
    for (var i = 0; i < sensors.length; i++) {
        //console.log(sensors[i]);
        var sensorRow = document.createElement("tr");
        var componentId = document.createElement("td");
        var componentNumber = document.createElement("td");
        var hardwareUidHex = document.createElement("td");
        var deviceName = document.createElement("td");
        var inputType = document.createElement("td");
        var lastUplink = document.createElement("td");

        componentId.innerHTML = sensors[i].componentId;
        componentNumber.innerHTML = sensors[i].componentNumber;
        hardwareUidHex.innerHTML = sensors[i].parentDevice.hardwareUidHex;
        deviceName.innerHTML = sensors[i].parentDevice.name;
        inputType.innerHTML = sensors[i].inputType;
        //lastUplink.innerHTML = devices[i].lastUplink;

        sensorTable = document.getElementById("sensorTable");
        sensorTable.appendChild(sensorRow);
        sensorRow.appendChild(componentId);
        sensorRow.appendChild(componentNumber);
        sensorRow.appendChild(hardwareUidHex);
        sensorRow.appendChild(deviceName);
        sensorRow.appendChild(inputType);
        sensorRow.appendChild(lastUplink);
    }
}

function populateSensorReadingTable(sensorReadings) {
    for (var i = 0; i < sensorReadings.length; i++) {
        //console.log(sensorReadings[i]);
        var sensorReadingRow = document.createElement("tr");
        var sensorReadingId = document.createElement("td");
        var componentId = document.createElement("td");
        var deviceName = document.createElement("td");
        var inputType = document.createElement("td");
        var value = document.createElement("td");
        var time = document.createElement("td");

        sensorReadingId.innerHTML = sensorReadings[i].sensorReadingId;
        componentId.innerHTML = sensorReadings[i].sensor.componentId;
        deviceName.innerHTML = sensorReadings[i].sensor.parentDevice.name;
        inputType.innerHTML = sensorReadings[i].sensor.inputType;
        value.innerHTML = sensorReadings[i].value;
        time.innerHTML = sensorReadings[i].time;

        sensorReadingTable = document.getElementById("sensorReadingTable");
        sensorReadingTable.appendChild(sensorReadingRow);
        sensorReadingRow.appendChild(sensorReadingId);
        sensorReadingRow.appendChild(componentId);
        sensorReadingRow.appendChild(deviceName);
        sensorReadingRow.appendChild(inputType);
        sensorReadingRow.appendChild(value);
        sensorReadingRow.appendChild(time);
    }
}