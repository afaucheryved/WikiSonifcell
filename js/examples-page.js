let params = new URLSearchParams(window.location.search);
let nomExemple = params.get("exemple");

let ex = exemples[nomExemple];

// Breadcrumb
let breadcrumb = document.createElement("div");
breadcrumb.style.fontSize = "11px";
breadcrumb.style.letterSpacing = "0.1em";
breadcrumb.style.marginBottom = "32px";
breadcrumb.style.opacity = "0.5";

let lienAccueil = document.createElement("a");
lienAccueil.textContent = "Home";
lienAccueil.href = "../index.html";

let lienListe = document.createElement("a");
lienListe.textContent = "Examples";
lienListe.href = "examples-list.html";

let sep1 = document.createElement("span");
sep1.textContent = " — ";

let sep2 = document.createElement("span");
sep2.textContent = " — ";

let courant = document.createElement("span");
courant.textContent = ex.title;

breadcrumb.appendChild(lienAccueil);
breadcrumb.appendChild(sep1);
breadcrumb.appendChild(lienListe);
breadcrumb.appendChild(sep2);
breadcrumb.appendChild(courant);

document.querySelector(".content").appendChild(breadcrumb);

// Titre
let titre = document.createElement("h1");
titre.textContent = ex.title;
document.querySelector(".content").appendChild(titre);

// Description
let description = document.createElement("p");
description.textContent = ex.description;
document.querySelector(".content").appendChild(description);

// Image principale
if(ex.image) {
    let img = document.createElement("img");
    img.src = "../assets/" + ex.image;
    img.style.cssText = "width: 100%; max-width: 700px; display: block; margin-top: 24px; margin-bottom: 8px; border-radius: 8px;";
    document.querySelector(".content").appendChild(img);
}

// Étapes
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

// Code (pour l'exemple Mouse)
if(ex.code) {
    let titreCode = document.createElement("h3");
    titreCode.textContent = "Python Script";
    document.querySelector(".content").appendChild(titreCode);

    let bloc = document.createElement("pre");
    let code = document.createElement("code");
    code.textContent = ex.code;
    bloc.appendChild(code);
    bloc.style.cssText = "background-color: rgba(0,0,0,0.2); padding: 20px; border-radius: 8px; overflow-x: auto; font-size: 13px; line-height: 1.6; margin-top: 16px;";
    document.querySelector(".content").appendChild(bloc);
}

// Téléchargement
if(ex.download) {
    let titreDl = document.createElement("h3");
    titreDl.textContent = "Download";
    document.querySelector(".content").appendChild(titreDl);

    let lien = document.createElement("a");
    lien.textContent = "Download example file";
    lien.href = "../assets/downloads/" + ex.download;
    lien.download = ex.download;
    document.querySelector(".content").appendChild(lien);
}

// Fonctions utilisées dans cet exemple
if(ex.fonctions) {
    let titreFonctions = document.createElement("h3");
    titreFonctions.textContent = "Functions used in this example";
    document.querySelector(".content").appendChild(titreFonctions);

    let listeFonctions = document.createElement("ul");
    ex.fonctions.forEach(f => {
        let li = document.createElement("li");
        let lien = document.createElement("a");
        lien.textContent = f;
        lien.href = "definition.html?fonction=" + f;
        li.appendChild(lien);
        listeFonctions.appendChild(li);
    });
    document.querySelector(".content").appendChild(listeFonctions);
}