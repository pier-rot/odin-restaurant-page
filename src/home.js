function makeHome(){
    const contentDiv = document.getElementById("content");
    const containerDiv = document.createElement("div");
    const valhallaP = document.createElement("p");
    const cuisineP = document.createElement("p");
    
    containerDiv.setAttribute("id", "container");
    valhallaP.setAttribute("id", "name");
    cuisineP.setAttribute("id", "cuisine");

    valhallaP.innerText = "valhalla";
    cuisineP.innerText = "norse cuisine";

    containerDiv.appendChild(valhallaP);
    containerDiv.appendChild(cuisineP);

    return containerDiv;
};

export {makeHome};