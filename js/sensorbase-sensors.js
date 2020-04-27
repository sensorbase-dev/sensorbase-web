
$( document ).ready(function() {
    if (document.getElementById("sensorCardDeck") != null) {
        getSensors(populateSensorCardDeck);
    }
});

function populateSensorCardDeck(sensors) {
    for (var i = 0; i < sensors.length; i++) {
        console.log(sensors[i]);
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
        cardTitle.innerHTML = sensors[i].inputType;

        let cardText = document.createElement("p");
        cardText.setAttribute("class", "card-text");
        cardText.innerHTML = `${sensors[i].parentDevice.name}<br>ComponentNumber: ${sensors[i].componentNumber}<br>ComponentId: ${sensors[i].componentId}`;

        let cardLink = document.createElement("a");
        cardLink.setAttribute("class", "stretched-link");
        cardLink.setAttribute("href", `component.html?componentId=${sensors[i].componentId}`)

        sensorCardDeck = document.getElementById("sensorCardDeck");
        sensorCardDeck.appendChild(cardDiv);
        //cardDiv.appendChild(cardImg);
        cardDiv.appendChild(cardBodyDiv);
        cardBodyDiv.appendChild(cardTitle);
        cardBodyDiv.appendChild(cardText);
        cardBodyDiv.appendChild(cardLink);
    }
}
