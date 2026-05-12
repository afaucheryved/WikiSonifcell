//creation initiale table vide
let carte = document.createElement("table");
carte.style.borderSpacing="0px";
carte.style.fontFamily = "Segoe UI, Roboto, Helvetica, Arial, sans-serif";
carte.style.marginLeft = "25px";
carte.style.marginTop = "50px";
//carte.style.color = "#455561";
carte.style.fontWeight = "bold";

// Dans ton constructeur :
let l1 = document.createElement("tr"); //3lignes
let l2 = document.createElement("tr");
let l3 = document.createElement("tr");

//fonction d'une zone/case
function Case(l= "130px", L= "200px",txtContent="", couleur="#455561", txtContentHoover="", txtContentClick=""){ //le dernier paramètre correpoond aux explications qui apparaissent en hoover
    // si on met rien, c'est une case fantome (pour la structure)
    //attention, on mettera sans doute des elements explicatif en appendChild qui ne sera pas forcement du string, mais des div pas ex.
    //   --> dans ce cas, changer la valeur par default "" en null.
    let cv = document.createElement("td");
    isCliked = false; //pour si on a cliqué, le txt reste le même jusqu'au clique suivant
    cv.style.verticalAlign = "top";
    cv.style.textAlign = "left";
    cv.style.width = L;
    cv.style.height = l;
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
let parametre = Case("171px", "553px","parametre", "#954141", "'number', 'range', ...", "Place des paramètres fixes par raport au programme, qui ne varient pas selon les entrés.");
let userInteraction = Case("171px", "553px","user interaction", "#954141", "'UCP', 'UDP', ...", "Place pour les blocs d'interaction avec l'utilisateur (cf exempel souris)");
let dataInput = Case("301px", "251px", "data input", "#954141", "'loadCSV', 'HTTP text', ...", "Place des données à traiter, récupérées sous forme de tableau, texte, etc...");
let sound = Case("301px", "251px", "sound", "#5E6FA7", "'CowWave', 'TanWave', ...", "Vous devez obligatoirement mettre vos blocs générant du son dnas cette zone pour qu'ils fonctionnent");
let mapping = Case("301px", "552px", "mapping", "#4CB081", "'+', 'if-else-then', MID to frequency', ...", "C'est cette zone où vous devait faire le gros de votre programme. Les bloc que vous y mettez doivent donc traiter les entrées des autres zones ('Parameter', 'Input Data' et ' pour  orienter les signaux traités au final vers la zone 'sound'.");

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
let main = document.querySelector(".content");
main.appendChild(carte);