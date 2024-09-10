function makeAbout() {
    const container = document.createElement("div");
    container.setAttribute("id", "container");

    const aboutUs = document.createElement("h2");
    aboutUs.innerText = "About Us";
    container.appendChild(aboutUs);

    const story = document.createElement("p");
    story.setAttribute("id","story");
    story.innerText = "Sed semper porta ligula, ac faucibus nibh rutrum imperdiet. Proin ac lacus quis sem efficitur porta vel eget ipsum. Nullam ac ipsum lorem. Fusce mollis, arcu quis facilisis scelerisque, dui odio hendrerit tellus, sed condimentum purus ex vel eros. Vivamus pulvinar sed felis vel rutrum. Nullam vel augue at dolor pulvinar tincidunt. Nunc tempor dui nec mi porttitor, at vulputate eros bibendum. Aliquam mollis diam tincidunt viverra finibus. Vivamus placerat egestas odio, ac scelerisque sapien efficitur id. Mauris tempus, nibh quis laoreet efficitur, sem tortor pretium neque, a ultricies odio ex ut lectus. Nullam nisl augue, elementum scelerisque sem id.";
    container.appendChild(story);

    const teamHeader = document.createElement("h2");
    teamHeader.innerText = "our team";
    teamHeader.setAttribute("id", "team-header");
    container.appendChild(teamHeader);

    const teamDiv = document.createElement("div");
    teamDiv.setAttribute("id", "team-container");
    container.appendChild(teamDiv);

    for(let i = 0; i < team.length; i++) {
        const teamMember = document.createElement("div");
        teamMember.setAttribute("class", "team-member");
        teamDiv.appendChild(teamMember);

        const role = document.createElement("p");
        role.setAttribute("class", "role");
        teamMember.appendChild(role);
        
        const name = document.createElement("p");
        name.setAttribute("class", "member-name");
        teamMember.appendChild(name);
        
        const email = document.createElement("p");
        email.setAttribute("class", "member-email");
        teamMember.appendChild(email);

        name.innerText = `${team[i].firstname} ${team[i].lastname}`;
        role.innerText = `${team[i].role}`;
        email.innerText = `contact : ${team[i].email}`;
    }

    return container;
};

function makeTeamMember(firstname, lastname, role) {
    const email = `${firstname}.${lastname}@valhalla.com`;
    return {firstname, lastname, email, role};
}

const team = [
    makeTeamMember("astrid", "nilsen", "Chef Patron"),
    makeTeamMember("erik", "johansson", "head chef"),
    makeTeamMember("freja", "lundberg", "general manager"),
    makeTeamMember("magnus", "sorensen", "sous chef")
];

export {makeAbout};