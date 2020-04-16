const API_BASE_URL = "https://sensorbase.kf03w5t5741l.net/api";
//const API_BASE_URL = "http://localhost:9500/api";

/*
 * HTTP GET block
 */

function getSensorBaseQuery(endpoint, runOnReadyStateChange) {
    var http = new XMLHttpRequest();
    http.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE) {
            var responseObjects = JSON.parse(this.responseText);
            runOnReadyStateChange(responseObjects);
        }
    }

    http.open("GET", API_BASE_URL + endpoint);
    http.setRequestHeader("Content-Type", "application/json");
    http.send();
}

function getDevices(runOnReadyStateChange) {
    this.getSensorBaseQuery("/devices", runOnReadyStateChange);
}

function getSensors(runOnReadyStateChange) {
    this.getSensorBaseQuery("/sensors", runOnReadyStateChange);
}

function getSensorReadings(runOnReadyStateChange) {
    this.getSensorBaseQuery("/sensor-readings", runOnReadyStateChange);
}

/* 
 * HTTP POST block
 */

function postSensorBaseQuery(object, endpoint, runOnReadyStateChange) {
    var http = new XMLHttpRequest();
    http.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE) {
            var responseObjects = JSON.parse(this.responseText);
            runOnReadyStateChange(responseObjects);
        }
    }

    http.open("POST", API_BASE_URL + endpoint);
    http.setRequestHeader("Content-Type", "application/json");
    http.send(object);
}