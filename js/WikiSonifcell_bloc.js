let grille = document.createElement("div");
grille.className = "grille";
grille.style.display = "flex";
grille.style.flexDirection = "row";
grille.style.justifyContent = "center";
grille.style.gap = "50px";

let colonneRouge = document.createElement("div");
colonneRouge.className = "colonne-rouge";

let colonneVerte = document.createElement("div");
colonneVerte.className = "colonne-verte";


function creerBlocRouge(texte, reponse) {
    let bloc = document.createElement("details");
    let summary = document.createElement("summary");
    summary.textContent = texte;
    bloc.appendChild(summary);
    let paragraphe = document.createElement("p");
    paragraphe.textContent = reponse;
    bloc.appendChild(paragraphe);
    bloc.className = "bloc rouge";
    bloc.style.borderRadius = "15px";
    bloc.style.border = "4px solid rgba(160, 65, 65)";
    bloc.style.backgroundColor = "#95414133"
    bloc.style.width = "450px";
    bloc.style.minHeight = "100px";
    bloc.style.color = "white";
    bloc.style.margin = "30px";
    summary.style.textAlign = "center";
    bloc.addEventListener('toggle', () => {
    if(bloc.open) {
         bloc.style.backgroundColor = "#E65E5E33";
    } else {
         bloc.style.backgroundColor = "#95414133";
    }
    });
    return bloc;
}



let bloc1 = creerBlocRouge("question 1", "ma réponse 1");
let bloc2 = creerBlocRouge("question 2", "ma réponse 2");
let bloc3 = creerBlocRouge("question 3","ma reponse 3");
colonneRouge.appendChild(bloc1);
colonneRouge.appendChild(bloc2);
colonneRouge.appendChild(bloc3);
grille.appendChild(colonneRouge);



function creerBlocVert(texte, reponse) {
    let bloc = document.createElement("details");
    let summary = document.createElement("summary");
    summary.textContent = texte;
    bloc.appendChild(summary);
    let paragraphe = document.createElement("p");
    paragraphe.textContent = reponse;
    bloc.appendChild(paragraphe);
    bloc.className = "bloc rouge";
    bloc.style.borderRadius = "15px";
    bloc.style.border = "4px solid #226B49";
    bloc.style.backgroundColor = "#226B4933";
    bloc.style.width = "450px";
    bloc.style.minHeight = "100px";
    bloc.style.color = "white";
    bloc.style.margin = "30px";
    summary.style.textAlign = "center";
    bloc.addEventListener('toggle', () => {
    if(bloc.open) {
         bloc.style.backgroundColor = "#2C845B33";
    } else {
         bloc.style.backgroundColor = "#226B4933";
    }
    });
    return bloc;
}
let blocv1 = creerBlocVert("question 1", "ma réponse 1");
let blocv2 = creerBlocVert("question 2", "ma réponse 2");
let blocv3 = creerBlocVert("question 3","ma reponse 3");
colonneVerte.appendChild(blocv1);
colonneVerte.appendChild(blocv2);
colonneVerte.appendChild(blocv3);
grille.appendChild(colonneVerte);
document.querySelector(".content").appendChild(grille);

