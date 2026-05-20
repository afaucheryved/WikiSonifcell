
// examples-list.js
// Generates the list of all examples on the examples-list.html page.
// Each item links to examples.html?exemple=[key]

let container = document.querySelector(".content");

let titre = document.createElement("h1");
titre.textContent = "Examples";
container.appendChild(titre);

let liste = document.createElement("ul");

// EXAMPLE LIST
// To add a new example to the list:
//   1. Add its data in examples.js first
//   2. Then add a new entry here: { nom: "key", titre: "Display Name" }
//   The "nom" must match the key used in examples.js

const listeExemples = [
    { nom: "condition", titre: "Condition Example" },
    { nom: "deviation", titre: "Deviation from Reference" },
    { nom: "scale",     titre: "Play a Scale" },
    { nom: "mouse",     titre: "Mouse Sonification" },
    { nom: "morse",     titre: "Morse Code" }
];

listeExemples.forEach(ex => {
    let li = document.createElement("li");
    let lien = document.createElement("a");
    lien.textContent = ex.titre;
    lien.href = "examples.html?exemple=" + ex.nom;
    li.appendChild(lien);
    liste.appendChild(li);
});

container.appendChild(liste);