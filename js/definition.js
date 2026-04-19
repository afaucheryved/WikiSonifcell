let params = new URLSearchParams(window.location.search);
let nomFonction = params.get("fonction");
console.log(nomFonction);

const fonctions = {
    "Null": { description: "Valeur nulle.", input: [], output: "" },
    "Custom": { description: "Permet de coder sa propre fonction selon une syntaxe JavaScript légèrement modifiée. Vous pouvez vous inspirer du code d'autres fonctions en cliquant sur le bloc de la fonction désirée, puis 'advanced'.", input: [], output: "" },
    "Pass": { description: "Transmet l'information sans la modifier.", input: ["(all type)"], output: "" },
    "Console Log": { description: "Transmet l'information et l'affiche dans la console. Accédez à la console en faisant Ctrl + Alt + I.", input: ["(all type)"], output: "" },
    "Get component": { description: "Renvoie un élément d'un tableau, indexé par un entier ou un nom.", input: ["(vecteur 1d) vector", "(int ou string) index"], output: "(type de l'élément)" },
    "Length": { description: "Renvoie la longueur d'une liste, d'un tableau ou d'un vecteur.", input: ["(vecteur 1d) array"], output: "(int)" },
    "Serve slice": { description: "Renvoie une entrée tranche par tranche à intervalle régulier.", input: ["(tableau 2d) 2D array", "(int) start", "(bool) row(0) or col(1)", "(int) period (ms)", "(bool) Loop"], output: "(vecteur 1d)" },
    "Mono to all channels": { description: "Distribue une entrée d'un canal sur tous les canaux audio.", input: ["(all type)"], output: "(vector)" },
    "Several to Mono": { description: "Transforme une entrée sur plusieurs canaux en une sortie unique.", input: ["(vector)"], output: "(int ou float)" },
    "Two to Stereo": { description: "Transforme deux valeurs d'entrée séparées en un vecteur de deux valeurs.", input: ["(int, int ou float, float)"], output: "(int[2] ou float[2])" },
    "Degrees to radian": { description: "Convertit des degrés en radians.", input: ["(double) x0"], output: "(double)" },
    "MIDI to Frequency": { description: "Fait correspondre un identifiant de pitch MIDI à sa fréquence fondamentale. output = 440 * ((input-69)/12)²", input: ["(int) Pitch"], output: "(double)" },
    "Radian to degrees": { description: "Convertit des radians en degrés.", input: ["(double) x0"], output: "(double)" },
    "Str to ASCII": { description: "Convertit une chaîne de caractères en un vecteur d'entiers donnant son encodage ASCII.", input: ["(String) String"], output: "(Char[] ou int[])" },
    "ADSR": { description: "Génère une enveloppe de volume paramétrable composée de 4 parties : Attack (montée), Decay (diminution), Sustain (maintien), Release (diminution jusqu'à 0).", input: ["(float) Sound", "(bool) trigger start", "(int) Attack (ms)", "(int) Decay (ms)", "(int) Sustain (ms)", "(int) Release (ms)"], output: "signal audio" },
    "Fade In": { description: "Avant activation : renvoie 0. Pendant l'activation : montée du signal depuis 0. Après : fonctionne comme un Pass.", input: ["(float) Sound", "(bool) Activation", "(int) Duration (ms)"], output: "" },
    "Fade Out": { description: "Avant activation : fonctionne comme un Pass. Pendant : descente du signal jusqu'à 0. Après : renvoie 0.", input: ["(float) Sound", "(bool) Activation", "(int) Duration (ms)"], output: "" },
    "Click": { description: "Métronome, génère un signal ponctuel à intervalle régulier.", input: ["(int) period (ms)"], output: "(int) → 1 à chaque tick, 0 sinon" },
    "Brownian Noise": { description: "Génère du bruit brownien.", input: ["(float) factor previous val", "(float) factor next val"], output: "(int)" },
    "White Noise": { description: "Génère un bruit aléatoire uniforme sur tout le spectre sonore. output = 2*random()-1", input: [], output: "" },
    "CosineWave": { description: "Signal cosinusoïdal.", input: ["(float) gain (dB)", "(float) frequency (Hz)"], output: "" },
    "Modulate Sine": { description: "Modulation d'un signal sinusoïdal.", input: ["(float) gain", "(float) add gain", "(float) frequency", "(float) add frequency"], output: "signal sinusoïdal" },
    "SawTooth": { description: "Génère un signal en dents de scie, caractérisé par des montées progressives et des chutes abruptes.", input: ["(float) gain (dB)", "(float) frequency (Hz)"], output: "" },
    "SineWave": { description: "Génère un signal sinusoïdal.", input: ["(double) Gain (dB)", "(double) Frequency (Hz)"], output: "" },
    "Square": { description: "Génère un signal en créneaux. Le signal alterne de manière abrupte entre une valeur haute et une valeur basse.", input: ["(double) Gain (dB)", "(double) Frequency (Hz)"], output: "signal sonore" },
    "TanWave": { description: "Signal périodique basé sur la fonction tangente trigonométrique.", input: ["(double) Gain (dB)", "(double) Frequency (Hz)"], output: "signal sonore" },
    "Triangle": { description: "Génère un signal triangulaire. Le signal monte et descend de manière linéaire et symétrique.", input: ["(double) Gain (dB)", "(double) Frequency (Hz)"], output: "signal sonore" },
    "Load Audio": { description: "Charge un fichier audio.", input: ["File", "(bool) Start", "(bool) Loop"], output: "" },
    "Load CSV": { description: "Charge des données tabulaires depuis un fichier CSV.", input: ["File", "(char) Separator"], output: "" },
    "Load Image": { description: "Charge une image et convertit ses pixels en données numériques.", input: ["File"], output: "" },
    "Load TXT": { description: "Charge un fichier texte brut.", input: ["File"], output: "" },
    "Load XLSX": { description: "Charge des données tabulaires depuis un fichier Excel.", input: ["File"], output: "" },
    "Number": { description: "Permet de saisir manuellement une valeur numérique fixe.", input: ["(float) Number", "(float) Min", "(float) Max", "(float) Step"], output: "" },
    "Range": { description: "Affiche un curseur glissant (slider) pour sélectionner une valeur dans un intervalle défini.", input: ["(float) Number", "(float) Min", "(float) Max", "(float) Step"], output: "" },
    "Text": { description: "Champ permettant de saisir une chaîne de caractères.", input: ["(string) Text"], output: "" },
    "HTTP Text": { description: "Récupère des ressources texte directement sur Internet via une URL.", input: ["(string) URL", "(int) Period (ms)"], output: "" },
    "HTTP Audio": { description: "Récupère des ressources son directement sur Internet via une URL.", input: ["(string) URL", "(bool) Start", "(bool) Loop"], output: "" },
    "TCP": { description: "Canal de communication réseau pour recevoir ou envoyer des données. TCP est utilisé pour une transmission sécurisée sans perte.", input: ["IPv4", "Port", "(0 or 1) Bind to port", "(int) Period", "(0 or 1) Raw"], output: "" },
    "UDP": { description: "Canal de communication réseau pour recevoir ou envoyer des données. UDP est utilisé pour une transmission rapide.", input: ["IPv4", "Port", "(0 or 1) Bind to port", "(int) Period", "(0 or 1) Raw"], output: "" },
    "If-then-else": { description: "Structure de contrôle : Si [condition] alors [résultat A] sinon [résultat B].", input: ["(bool) Condition", "(all type) Value Then", "(all type) Value Else"], output: "" },
    "HigherThan": { description: "Compare deux valeurs et renvoie un résultat binaire (vrai/faux).", input: ["(float) x0", "(float) x1"], output: "(bool) 1 or 0" },
    "GreaterOrEqual": { description: "Strictement positif. Compare deux valeurs et renvoie un résultat binaire.", input: ["(float) x0", "(float) x1"], output: "(bool) 1 or 0" },
    "LowerThan": { description: "Compare deux valeurs et renvoie un résultat binaire (vrai/faux).", input: ["(float) x0", "(float) x1"], output: "(bool) 1 or 0" },
    "Equal": { description: "Vérifie si deux valeurs sont égales.", input: ["(float) x0", "(float) x1"], output: "(bool) 1 or 0" },
    "NotEqual": { description: "Vérifie si deux valeurs sont différentes.", input: ["(float) x0", "(float) x1"], output: "(bool) 1 or 0" },
    "And": { description: "Permet de combiner plusieurs conditions. Vrai si toutes les conditions sont vraies.", input: ["(bool) x0", "(bool) x1"], output: "(bool) 1 or 0" },
    "Or": { description: "Permet de combiner plusieurs conditions. Vrai si au moins une condition est vraie.", input: ["(bool) x0", "(bool) x1"], output: "(bool) 1 or 0" },
    "Not": { description: "Inverse le résultat (Vrai devient Faux).", input: ["(bool) x0"], output: "" },
    "Linear": { description: "Fonction affine (y=ax+b) permettant d'associer une plage de valeurs d'entrée à une plage de sortie.", input: ["(float) val", "(float) xmin", "(float) xmax", "(float) ymin", "(float) ymax"], output: "" },
    "Abs": { description: "Renvoie la valeur absolue (transforme les nombres négatifs en positifs).", input: ["(float) Value"], output: "" },
    "Ceil": { description: "Arrondit à l'entier supérieur.", input: ["(float) Value"], output: "" },
    "Floor": { description: "Arrondit à l'entier inférieur.", input: ["(float) Value"], output: "" },
    "Power": { description: "Exposant.", input: ["(float) Value"], output: "" },
    "Round": { description: "Arrondi mathématique à l'entier le plus proche.", input: ["(float) Value"], output: "" },
    "Sign": { description: "Récupère le signe de l'entrée. Renvoie -1, 0, ou 1 selon que l'entrée est négative, nulle ou positive.", input: ["(float) Value"], output: "" },
    "Sqrt": { description: "Racine carrée.", input: ["(float) Value"], output: "" },
    "Acos": { description: "Fonction réciproque (arc cosinus).", input: ["(float) x0"], output: "" },
    "Asin": { description: "Fonction réciproque (arc sinus).", input: ["(float) x0"], output: "" },
    "Atan": { description: "Fonction réciproque (arc tangente).", input: ["(float) x0"], output: "" },
    "Atan2": { description: "Fonction réciproque (arc tangente à deux arguments).", input: ["(float) x0"], output: "" },
    "Cos": { description: "Fonction trigonométrique de base.", input: ["(float) x0"], output: "" },
    "Sin": { description: "Fonction trigonométrique de base.", input: ["(float) x0"], output: "" },
    "Tan": { description: "Fonction trigonométrique de base.", input: ["(float) x0"], output: "" },
    "+": { description: "Addition de deux entrées.", input: ["(float) x0", "(float) x1"], output: "" },
    "-": { description: "Soustraction de deux entrées.", input: ["(float) x0", "(float) x1"], output: "" },
    "×": { description: "Multiplication de deux entrées.", input: ["(float) x0", "(float) x1"], output: "" },
    "÷": { description: "Division de deux entrées.", input: ["(float) x0", "(float) x1"], output: "" },
    "Parse Float": { description: "Convertit une chaîne de caractères en un nombre décimal.", input: ["(string) x0"], output: "" },
    "Parse Int": { description: "Convertit une chaîne de caractères en un nombre entier.", input: ["(string) x0"], output: "" },
    "Parse JSON": { description: "Analyse une chaîne structurée au format JSON pour la transformer en objet ou tableau de données manipulable.", input: ["(string) x0"], output: "" },
    "Parse OSC": { description: "Décode un paquet de données au format Open Sound Control (OSC), standard de communication utilisé en informatique musicale.", input: ["(bytes[]) Bytes"], output: "" },
    "Diff": { description: "Différence entre la valeur d'entrée actuelle et la précédente.", input: ["(float) Value"], output: "" },
    "Retain Max": { description: "Retient et affiche continuellement la plus grande valeur rencontrée depuis le début.", input: ["(float) x0"], output: "" },
    "Retain Min": { description: "Retient et affiche continuellement la plus petite valeur rencontrée depuis le début.", input: ["(float) x0"], output: "" },
    "Retain Value": { description: "Renvoie continuellement la dernière valeur retenue. Retient une nouvelle valeur si le paramètre booléen 'change' est vrai.", input: ["(bool) change", "(float) x0"], output: "" },
    "Smooth": { description: "Adoucit les transitions brusques entre deux valeurs.", input: ["(float) Value"], output: "" },
    "Speed Multiplier": { description: "Modifie la vitesse de déroulement de la branche d'opération. Valeur > 1 pour accélérer, entre 0 et 1 pour ralentir.", input: ["(any type) Stream", "(float) Multiplier"], output: "" }
};

let definition = fonctions[nomFonction];

let titre = document.createElement("h1");
titre.textContent = nomFonction;

let description = document.createElement("p");
description.textContent = fonctions[nomFonction].description;
document.querySelector(".content").appendChild(titre);
document.querySelector(".content").appendChild(description);


let f = fonctions[nomFonction];

if(f.input.length > 0) {
    let titreInput = document.createElement("h3");
    titreInput.textContent = "Inputs";
    let listeInput = document.createElement("ul");
    f.input.forEach(i => {
        let li = document.createElement("li");
        li.textContent = i;
        listeInput.appendChild(li);
    });
    document.querySelector(".content").appendChild(titreInput);
    document.querySelector(".content").appendChild(listeInput);
}

if(f.output) {
    let titreOutput = document.createElement("h3");
    titreOutput.textContent = "Output";
    let output = document.createElement("p");
    output.textContent = f.output;
    document.querySelector(".content").appendChild(titreOutput);
    document.querySelector(".content").appendChild(output);
}

