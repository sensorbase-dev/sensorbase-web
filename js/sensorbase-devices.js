
$( document ).ready(function() {
    if (document.getElementById("deviceCardDeck") != null) {
        getDevices(populateDeviceCardDeck);
    }
});

function populateDeviceCardDeck(devices) {
    for (var i = 0; i < devices.length; i++) {
        //console.log(devices[i]);
        let cardDiv = document.createElement("div");
        cardDiv.setAttribute("class", "card mb-3");
        cardDiv.setAttribute("style", "min-width: 12rem;");

        let cardImg = document.createElement("img");
        cardImg.setAttribute("class", "card-img=top");
        cardImg.setAttribute("src", "img/ttn.svg");

        let cardBodyDiv = document.createElement("div");
        cardBodyDiv.setAttribute("class", "card-body");

        let cardTitle = document.createElement("h5");
        cardTitle.setAttribute("class", "card-title");
        cardTitle.innerHTML = devices[i].name;

        let cardText = document.createElement("p");
        cardText.setAttribute("class", "card-text");
        cardText.innerHTML = `DeviceId: ${devices[i].deviceId}<br>HWUID: ${devices[i].hardwareUidHex}`;

        let cardLink = document.createElement("a");
        cardLink.setAttribute("class", "stretched-link");
        cardLink.setAttribute("href", `device.html?hwuid=${devices[i].hardwareUidHex}`)

        deviceCardDeck = document.getElementById("deviceCardDeck");
        deviceCardDeck.appendChild(cardDiv);
        //cardDiv.appendChild(cardImg);
        cardDiv.appendChild(cardBodyDiv);
        cardBodyDiv.appendChild(cardTitle);
        cardBodyDiv.appendChild(cardText);
        cardBodyDiv.appendChild(cardLink);
    }
}
