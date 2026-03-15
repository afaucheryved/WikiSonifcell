//creation initiale table vide
let carte = document.createElement("table");
carte.style.borderSpacing="0px";
let l1 = document.createElement("tr"); //3lignes
let l2 = document.createElement("tr");
let l3 = document.createElement("tr");

//fonction d'une zone/case
function Case(txtContent="", couleur="#455561", txtContentHoover=""){ //le dernier paramètre correpoond aux explications qui apparaissent en hoover
    // si on met rien, c'est une case fantome (pour la structure)
    let cv = document.createElement("td");
    cv.style.width = "200px";
    cv.style.height = "100px";
    cv.textContent = txtContent;
    cv.style.backgroundColor = couleur;
    cv.addEventListener('mouseenter', function() {
        cv.textContent = txtContentHoover; // si on passe dessus, txt explicatif s'affiche
    }
    )
    cv.addEventListener('mouseleave', function() {
        cv.textContent = txtContent;
    }
    )
    return cv;
}

//Creations zones
let parametre = Case("parametre", "#954141", "exemple exemple exemple");
let userInteraction = Case("user interaction", "#954141", "exemple exemple exemple");
let dataInput = Case("data input", "#954141", "exemple exemple exemple");
let sound = Case("sound", "#5E6FA7", "exemple exemple exemple");
let mapping = Case("mapping", "#4CB081", "exemple exemple exemple");

// pack :
l1.appendChild(Case());
l1.appendChild(parametre);
l1.appendChild(Case());

l2.appendChild(dataInput);
l2.appendChild(mapping);
l2.appendChild(sound);

l3.appendChild(Case());
l3.appendChild(userInteraction);
l3.appendChild(Case());

carte.appendChild(l1);
carte.appendChild(l2);
carte.appendChild(l3);

//à modifier pour le merge
document.body.appendChild(carte);
document.body.style.backgroundColor = "#455561";






