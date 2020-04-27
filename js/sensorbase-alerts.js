
$( document ).ready(function() {
  if (document.getElementById("alertCardDeck") != null) {
    getAlerts(populateAlertCardDeck);
  }
  if (document.getElementById("alertSensorSelector") != null) {
    getSensors(populateAlertModalSensorSelector);
  }
});

function populateAlertCardDeck(alerts) {
  for (var i = 0; i < alerts.length; i++) {
    console.log(alerts[i]);
    let cardDiv = document.createElement("div");
    cardDiv.setAttribute("class", "card mb-3");
    cardDiv.setAttribute("style", "min-width: 13rem;");
    
    let cardImg = document.createElement("img");
    cardImg.setAttribute("class", "card-img=top");
    cardImg.setAttribute("src", "img/ttn.svg");
    
    let cardBodyDiv = document.createElement("div");
    cardBodyDiv.setAttribute("class", "card-body");
    
    let cardTitle = document.createElement("h5");
    cardTitle.setAttribute("class", "card-title");
    cardTitle.innerHTML = `If ${alerts[i].sensor.inputType} #${alerts[i].sensor.componentNumber} on ${alerts[i].sensor.parentDevice.name} is ${alerts[i].alertCondition} ${alerts[i].threshold}`;
    
    let cardText = document.createElement("p");
    cardText.setAttribute("class", "card-text");
    cardText.innerHTML = `${alerts[i].sensor.parentDevice.name}<br>${alerts[i].emailAddress}`;
    
    let cardLink = document.createElement("a");
    cardLink.setAttribute("class", "stretched-link");
    cardLink.setAttribute("href", "#");
    cardLink.setAttribute("data-toggle", "modal");
    cardLink.setAttribute("data-target", `#editAlertModal-${alerts[i].alertId}`);

    let cardModal = document.createElement("div");
    cardModal.innerHTML = `
        <div class="modal fade" id="editAlertModal-${alerts[i].alertId}" tabindex="-1" role="dialog" aria-labelledby="createAlertModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="editAlertModalLabel">Edit alert</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                    <h5>${alerts[i].sensor.inputType} #${alerts[i].sensor.componentNumber}</h5>
                    <h5 id="componentId-${alerts[i].alertId}">${alerts[i].sensor.componentId}</h5>
                    <h5>${alerts[i].sensor.parentDevice.name}</h5>
                  <div class="form-group">
                    <label for="emailAddress">Email address (String):</label>
                    <input class="form-control" type="text" id="emailAddress-${alerts[i].alertId}" value="${alerts[i].emailAddress}">
                  </div>
                  <div class="form-group">
                    <label for="conditionselector">Condition: </label>
                    <select class="form-control" id="conditionselector-${alerts[i].alertId}" value="${alerts[i].alertCondition}">
                      <option>ABOVE</option>
                      <option>BELOW</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="threshold">Threshold value (double):</label>
                    <input class="form-control" type="text" id ="threshold-${alerts[i].alertId}" value="${alerts[i].threshold}"><br>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal" onclick="deleteAlert(${alerts[i].alertId});">Delete</button>
                <button type="button" class="btn btn-primary" data-dismiss="modal" onclick="updateAlert(${alerts[i].alertId});">Save</button>
              </div>
            </div>
          </div>
        </div>
    `;
    
    alertCardDeck = document.getElementById("alertCardDeck");
    alertCardDeck.appendChild(cardDiv);
    //cardDiv.appendChild(cardImg);
    cardDiv.appendChild(cardBodyDiv);
    cardBodyDiv.appendChild(cardTitle);
    cardBodyDiv.appendChild(cardText);
    cardBodyDiv.appendChild(cardLink);
    cardBodyDiv.appendChild(cardModal);
  }
}

function populateAlertModalSensorSelector(sensors) {
  let alertSensorSelector = document.getElementById('alertSensorSelector');
  for (var i = 0; i < sensors.length; i++) {
    console.log(sensors[i]);
    let option = document.createElement("option");
    option.setAttribute('value', `${sensors[i].componentId}`)
    option.innerHTML = `${sensors[i].inputType} #${sensors[i].componentNumber} on ${sensors[i].parentDevice.name}`;
    alertSensorSelector.appendChild(option);
  }
}

function addAlert() {
  let emailAddress = document.getElementById('emailAddress').value;
  let componentId = document.getElementById("alertSensorSelector").value;
  let alertCondition = document.getElementById("conditionselector").value;
  let threshold = document.getElementById("threshold").value;
  
  let alert = {
    emailAddress : emailAddress,
    alertCondition : alertCondition,
    threshold : threshold 
  }
  
  var alertJSON = JSON.stringify(alert);
  console.log(alert);
  
  postSensorBaseQuery(alertJSON, `/sensors/${componentId}/alerts`, redirectAlerts);
}

function updateAlert(alertId) {
  let emailAddress = document.getElementById(`emailAddress-${alertId}`).value;
  let alertCondition = document.getElementById(`conditionselector-${alertId}`).value;
  let threshold = document.getElementById(`threshold-${alertId}`).value;

  let alert = {
    alertId : alertId,
    emailAddress : emailAddress,
    alertCondition : alertCondition,
    threshold : threshold 
  }
  
  var alertJSON = JSON.stringify(alert);
  console.log(alert);
  
  putSensorBaseQuery(alertJSON, `/alerts/${alertId}`, redirectAlerts);
}

function deleteAlert(alertId) {
  deleteSensorBaseQuery(`/alerts/${alertId}`, redirectAlerts);
}

let redirectAlerts = function (postResponse) {
  console.log(postResponse);
  window.location.replace("alerts.html");
}