$( document ).ready(function() {
    let urlParams = new URLSearchParams(window.location.search);
    if (!urlParams.has('hwuid')) {
        return;
    } 
    let hardwareUidHex = urlParams.get('hwuid');

    if (document.getElementById("device-details") != null) {
        getDevice(hardwareUidHex, populateDeviceDetails);
    }

    if (document.getElementById("component-card-deck") != null) {
        getComponents(hardwareUidHex, populateComponentCardDeck);
    }
});

function populateDeviceDetails(device) {
    console.log(device);
        let deviceNameHeader = document.getElementById("device-name");
        deviceNameHeader.innerHTML = device.name;
}

function populateComponentCardDeck(components) {
    for (var i = 0; i < components.length; i++) {
        console.log(components[i]);
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
        cardTitle.innerHTML = components[i].inputType;

        let cardText = document.createElement("p");
        cardText.setAttribute("class", "card-text");
        cardText.innerHTML = `componentId: ${components[i].componentId}<br>componentNumber: ${components[i].componentNumber}`;

        let cardLink = document.createElement("a");
        cardLink.setAttribute("class", "stretched-link");
        cardLink.setAttribute("href", `component.html?componentId=${components[i].componentId}`)

        deviceCardDeck = document.getElementById("component-card-deck");
        deviceCardDeck.appendChild(cardDiv);
        //cardDiv.appendChild(cardImg);
        cardDiv.appendChild(cardBodyDiv);
        cardBodyDiv.appendChild(cardTitle);
        cardBodyDiv.appendChild(cardText);
        cardBodyDiv.appendChild(cardLink);
    }
}