//creation initiale table vide
let carte = document.createElement("table");
carte.style.borderSpacing="0px";
carte.style.fontFamily = "Segoe UI, Roboto, Helvetica, Arial, sans-serif";
//carte.style.color = "#455561";
carte.style.fontWeight = "bold";

// Dans ton constructeur :
let l1 = document.createElement("tr"); //3lignes
let l2 = document.createElement("tr");
let l3 = document.createElement("tr");

//fonction d'une zone/case
function Case(txtContent="", couleur="#455561", txtContentHoover="", txtContentClick=""){ //le dernier paramètre correpoond aux explications qui apparaissent en hoover
    // si on met rien, c'est une case fantome (pour la structure)
    //attention, on mettera sans doute des elements explicatif en appendChild qui ne sera pas forcement du string, mais des div pas ex.
    //   --> dans ce cas, changer la valeur par default "" en null.
    let cv = document.createElement("td");
    isCliked = false; //pour si on a cliqué, le txt reste le même jusqu'au clique suivant
    cv.style.verticalAlign = "top";
    cv.style.textAlign = "left";
    cv.style.width = "200px";
    cv.style.height = "130px";
    cv.textContent = txtContent;
    cv.style.backgroundColor = couleur;
    cv.addEventListener('mouseenter', function() {
        if(!isCliked){
            cv.textContent = txtContentHoover; // si on passe dessus, txt explicatif s'affiche
            cv.style.textAlign = "center";
            cv.style.fontWeight = "normal";
        }
    }
    )
    cv.addEventListener('mouseleave', function() {
        if(!isCliked){
            cv.textContent = txtContent;
            cv.style.textAlign = "left";
            cv.style.fontWeight = "bold";
        }
    }
    )
    cv.addEventListener('click', function(){
        if(isCliked){
            cv.style.textAlign = "left";
            cv.style.fontWeight = "bold";
            cv.textContent = txtContent
            isCliked = false;
        }
        else{
            cv.style.textAlign = "center";
            cv.style.fontWeight = "normal";
            cv.textContent = txtContentClick;
            isCliked = true;
        }
    })
    return cv;
}

//Creations zones
let parametre = Case("parametre", "#954141", "exemple exemple exemple", "tu as cliqué \n truc \n autre truc");
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






