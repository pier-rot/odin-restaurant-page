function makeContact() {
    const container = document.createElement("div");
    container.setAttribute("id", "container");

    // Make a reservation header
    const header = document.createElement("h2");
    header.innerText = "Make a reservation";
    container.appendChild(header);

    // Lil text to make it a bit more visually full and complete.
    const hook = document.createElement("p");
    hook.innerText = "If you would to dine with us, please contact us via the information below. We will get back to you as soon as we can.";
    container.appendChild(hook);
    

    // Contact info div
    const infoDiv = document.createElement("div");
    infoDiv.setAttribute("id", "info");
    container.appendChild(infoDiv);
    // Phone number paragraph
    const phone = document.createElement("p");
    phone.setAttribute("id", "contact-phone");
    phone.innerText = "Call us : 123-456-7890";
    infoDiv.appendChild(phone);
    // Email paragraph
    const email = document.createElement("p");
    email.innerText = "Contact us via email : reservation@valhalla.com";
    email.setAttribute("id", "contact-email");
    infoDiv.appendChild(email);
    return container;
};

export {makeContact};