let carte = document.createElement("table");
carte.style.borderSpacing="0px";
carte.style.fontFamily = "Segoe UI, Roboto, Helvetica, Arial, sans-serif";
carte.style.marginLeft = "25px";
carte.style.marginTop = "50px";
carte.style.fontWeight = "bold";

let l1 = document.createElement("tr");
let l2 = document.createElement("tr");
let l3 = document.createElement("tr");

function Case(l= "130px", L= "200px",txtContent="", couleur="#1C2B4A", txtContentHoover="", txtContentClick=""){
let cv = document.createElement("td");
let isCliked = false;
cv.style.verticalAlign = "middle";
cv.style.textAlign = "center";
cv.style.width = L;
cv.style.height = l;
cv.style.fontSize = "22px";
cv.textContent = txtContent;
cv.style.backgroundColor = couleur;
cv.style.color = "white";
cv.style.cursor = "pointer";

cv.addEventListener('mouseenter', function() {
    if(!isCliked){
        cv.textContent = txtContentHoover;
        cv.style.fontWeight = "normal";
        cv.style.fontStyle = "italic";
        cv.style.color = "#2c3e50";
    }
})
cv.addEventListener('mouseleave', function() {
    if(!isCliked){
        cv.textContent = txtContent;
        cv.style.fontWeight = "bold";
        cv.style.fontStyle = "normal";
        cv.style.color = "white";
    }
})
cv.addEventListener('click', function(){
    if(isCliked){
        cv.style.fontWeight = "bold";
        cv.style.fontStyle = "normal";
        cv.style.color = "white";
        cv.textContent = txtContent;
        isCliked = false;
    }
    else{
        cv.style.fontWeight = "normal";
        cv.style.fontStyle = "normal";
        cv.style.color = "white";
        cv.textContent = txtContentClick;
        isCliked = true;
    }
})
return cv;
}

let parametre = Case("171px", "553px","parametre", "#954141", "'number', 'range', ...", "Place des paramètres fixes par raport au programme, qui ne varient pas selon les entrés.");
let userInteraction = Case("171px", "553px","user interaction", "#954141", "'UCP', 'UDP', ...", "Place pour les blocs d'interaction avec l'utilisateur (cf exempel souris)");
let dataInput = Case("301px", "251px", "data input", "#954141", "'loadCSV', 'HTTP text', ...", "Place des données à traiter, récupérées sous forme de tableau, texte, etc...");
let sound = Case("301px", "251px", "sound", "#5E6FA7", "'CowWave', 'TanWave', ...", "Vous devez obligatoirement mettre vos blocs générant du son dnas cette zone pour qu'ils fonctionnent");
let mapping = Case("301px", "552px", "mapping", "#4CB081", "'+', 'if-else-then', MID to frequency', ...", "C'est cette zone où vous devait faire le gros de votre programme. Les bloc que vous y mettez doivent donc traiter les entrées des autres zones ('Parameter', 'Input Data' et ' pour  orienter les signaux traités au final vers la zone 'sound'.");

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

let main = document.querySelector(".content");
main.appendChild(carte);