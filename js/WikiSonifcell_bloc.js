// WikiSonifcell_bloc.js
// Generates the FAQ blocks on the homepage (index.html).
// Red blocks = troubleshooting questions
// Green blocks = basic usage questions

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

// Creates a collapsible red FAQ block.
// To add a red block: creerBlocRouge("Your question", "Your answer")

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
    bloc.style.backgroundColor = "#95414133";
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


function creerBlocVert(texte, reponse) {
    let bloc = document.createElement("details");
    let summary = document.createElement("summary");
    summary.textContent = texte;
    bloc.appendChild(summary);
    let paragraphe = document.createElement("p");
    paragraphe.textContent = reponse;
    bloc.appendChild(paragraphe);
    bloc.className = "bloc vert";
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

// FAQ CONTENT — edit questions and answers here
let bloc1 = creerBlocRouge(
    "Why is no sound coming out of my program?",
    "1: Check that you have a 'generator' type block in the Sound zone. \n2: Check that it is connected (closed switch symbol). \n3: Check that its output is non-zero (right-click in the top-right corner of the block). \n4: If all else fails, if you used a 'CosineWave' block, replace it with a 'SineWave'."
);
let bloc2 = creerBlocRouge(
    "How to check the output of my blocks live?",
    "Double-click on the top-right corner of your block. A yellow window will open, showing what is coming out of the block, with its type specified."
);
let bloc3 = creerBlocRouge(
    "How to record the audio output of my program?",
    "Make sure all the switches of your sound generator blocks are connected, then press the black square at the top of the control panel. Press the red square to stop recording. Then save your file."
);

let blocv1 = creerBlocVert(
    "How to reset the zoom?",
    "Click on the house-shaped logo at the top left."
);
let blocv2 = creerBlocVert(
    "How to delete a block?",
    "Click on the block in question, then press the Delete key."
);
let blocv3 = creerBlocVert(
    "How to create a block?",
    "Double-click on the location where you want to place your block."
);

colonneRouge.appendChild(bloc1);
colonneRouge.appendChild(bloc2);
colonneRouge.appendChild(bloc3);
grille.appendChild(colonneRouge);

colonneVerte.appendChild(blocv1);
colonneVerte.appendChild(blocv2);
colonneVerte.appendChild(blocv3);
grille.appendChild(colonneVerte);

document.querySelector(".content").appendChild(grille);