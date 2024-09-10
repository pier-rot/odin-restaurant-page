function makeMenu() {
    const container = document.createElement("div");
    container.setAttribute("id", "container");
    const menuHeader = document.createElement("h1");
    menuHeader.innerText = "menu";
    container.appendChild(menuHeader);

    const menuDiv = document.createElement("div");
    menuDiv.setAttribute("id", "menu");
    container.appendChild(menuDiv)


    for(let i = 0; i <menu.length; i++) {
        const itemDiv = document.createElement("div");
        itemDiv.setAttribute("class", "menu-item");
        itemDiv.setAttribute("id", `item-${i}`);

        const mealNameP = document.createElement("p");
        const ingredientsP = document.createElement("p");
        const wineP = document.createElement("p");

        mealNameP.setAttribute("class", "meal-name");
        ingredientsP.setAttribute("class", "ingredients");
        wineP.setAttribute("class", "wine");

        mealNameP.innerText = menu[i].name;
        ingredientsP.innerText = menu[i].ingredients;
        wineP.innerText = menu[i].wine;

        itemDiv.appendChild(mealNameP);
        itemDiv.appendChild(ingredientsP);
        itemDiv.appendChild(wineP);

        menuDiv.appendChild(itemDiv);
    };
    return container;
};

function makeMenuItem(name, ingredients, wine="") {
    return {name, ingredients, wine};
};

const menu = [
    makeMenuItem("stuzzichini",'Pizza shoot, fake tomato, Eggs "carbonara", crab salad', "Bisol, Belstar Prosecco Brut DOC, Valdobbiadene"),
    makeMenuItem("antipasti", "local prawns, parsnip and mango"),
    makeMenuItem("zuppe", "pumpkin soup, truffle oil and parmesan", "michele chiarlo palas gavi, piemonte"),
    makeMenuItem("primi",
        'Pasta "calamarata" seafood and white beans',
        "J. Hofstatter Meczan Pinot Nero, DOC, Trentino-Altor Adige"
    ),
    makeMenuItem("secondi",
        'Hamachi, bean needle and "cacciucco" sauce',
        "Montepulciano d'Abruzzo DOC, Abruzzo"
    ),
    makeMenuItem("dolci",
        "Sbrisolona cake, ricotta ice cream, pear and chianti"
    )
];

export {makeMenu};