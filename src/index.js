import "./styles.css";
import { makeAbout } from "./about";
import { makeContact } from "./contact";
import { makeHome } from "./home";
import { makeMenu } from "./menu";
import { makeReservation } from "./reservation";


// Create the containers that will be put in the content
const homeDiv = makeHome();
const aboutDiv = makeAbout();
const contactDiv = makeContact();
const menuDiv = makeMenu();
const reservationDiv = makeReservation();

// Selecting the content div
const contentDiv = document.getElementById("content");

function emptyContent() {
    // Remove the contents of the main content (containerDiv).
    contentDiv.innerHTML = "";
};

function fillContent(div=homeDiv) {
    emptyContent();
    contentDiv.appendChild(div);
}


const homeBtn = document.querySelector("#homeBtn");
const aboutBtn = document.querySelector("#aboutBtn");
const menuBtn = document.querySelector("#menuBtn");
const contactBtn = document.querySelector("#contactBtn");
const bookBtn = document.querySelector("#bookBtn");

homeBtn.addEventListener("click",() => {fillContent()});
aboutBtn.addEventListener("click",() => {fillContent(aboutDiv)});
menuBtn.addEventListener("click",() => {fillContent(menuDiv)});
contactBtn.addEventListener("click", () => {fillContent(contactDiv)});
bookBtn.addEventListener("click", makeReservation);


// By default, fill page with the homeDiv on reload
fillContent();