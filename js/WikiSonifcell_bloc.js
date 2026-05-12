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



let bloc1 = creerBlocRouge("Pourquoi aucun son ne sort de mon programme ?", "1: Vérifiez que vous avez bien vun bloc de type 'générator' dans la sonne Sound. \n2: Vérifiez de celui-ci est connecté (symbole interrupteur fermé). \n3: vérifiez que sa sortie est non-nulle (clique doit dnas l'angla en haut à gdroite du bloc). \n4: Si tout échoue, si vous avez mis un bloc 'CosWave', remplcez-le par un 'SinWave'. ");
let bloc2 = creerBlocRouge("Comment vérifier la sortie de mes bloc en directe ?", "Double cliquez sur l'angle en haut à droite de votre bloc. Une fenêtre jaune s'ouvrira, contenant ce qui sort du bloc, avec son type spécifié.");
let bloc3 = creerBlocRouge("Comment enregistrer le rendu sonor de mon programme ?","Assurez-vous que tout les interrupteurs de vos blocs générateurs de son soient connectés, puis appuyez sur le carré noir, en haut du panneau de contrôle. Appuyez sur carré rouge pour stopper l'enregistrement. Enregistez ensuite.");
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
let blocv1 = creerBlocVert("Comment réinitialiser le zoom ?", "Cliquez sur le logo en forme de maison en haut à gauche.");
let blocv2 = creerBlocVert("Comment supprimer un bloc ?", "Cliquez sur le bloc en question, puis appuiyez sur la touche suppr.");
let blocv3 = creerBlocVert("Comment créer un bloc ?","Double cliquez sur l'emplaçement où vous voulez mettre votre bloc.");
colonneVerte.appendChild(blocv1);
colonneVerte.appendChild(blocv2);
colonneVerte.appendChild(blocv3);
grille.appendChild(colonneVerte);
document.querySelector(".content").appendChild(grille);

