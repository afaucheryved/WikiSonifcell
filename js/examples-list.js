let container = document.querySelector(".content");

let titre = document.createElement("h1");
titre.textContent = "Examples";
container.appendChild(titre);

let liste = document.createElement("ul");

const listeExemples = [
    { nom: "condition", titre: "Condition Example" },
    { nom: "deviation", titre: "Deviation from Reference" },
    { nom: "scale", titre: "Play a Scale" },
    { nom: "mouse", titre: "Mouse Sonification" },
    { nom: "morse", titre: "Morse Code" }
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