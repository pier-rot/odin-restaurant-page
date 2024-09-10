import "./styles.css";
import { makeAbout } from "./about";
import { makeContact } from "./contact";
import { makeHome } from "./home";
import { makeMenu } from "./menu";


// Create the containers that will be put in the content
const homeDiv = makeHome();
const aboutDiv = makeAbout();
const contactDiv = makeContact();
const menuDiv = makeMenu();

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

homeBtn.addEventListener("click",() => {fillContent()});
aboutBtn.addEventListener("click",() => {fillContent(aboutDiv)});
menuBtn.addEventListener("click",() => {fillContent(menuDiv)});
contactBtn.addEventListener("click", () => {fillContent(contactDiv)});


// By default, fill page with the homeDiv on reload
fillContent();