import "./styles.css";
import { makeAbout } from "./about";
import { makeContact } from "./contact";
import { makeHome } from "./home";
import { makeMenu } from "./menu";
import { makeReservation } from "./reservation";


const homeDiv = makeHome();
const aboutDiv = makeAbout();
const contactDiv = makeContact();
const menuDiv = makeMenu();
const reservationDiv = makeReservation();
const containerDiv = document.getElementById("container");

function emptyContainer() {
    // Remove the contents of the main container (containerDiv).
    containerDiv.innerHTML = "";
};


// By default the container is filled with the home tab.
containerDiv.appendChild(homeDiv);