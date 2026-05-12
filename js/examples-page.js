let params = new URLSearchParams(window.location.search);
let nomExemple = params.get("exemple");

let ex = exemples[nomExemple];

let titre = document.createElement("h1");
titre.textContent = ex.title;
document.querySelector(".content").appendChild(titre);

let description = document.createElement("p");
description.textContent = ex.description;
document.querySelector(".content").appendChild(description);

let titreEtapes = document.createElement("h3");
titreEtapes.textContent = "Steps";
document.querySelector(".content").appendChild(titreEtapes);

let listeEtapes = document.createElement("ol");
ex.steps.forEach(step => {
    let li = document.createElement("li");
    li.textContent = step;
    listeEtapes.appendChild(li);
});
document.querySelector(".content").appendChild(listeEtapes);