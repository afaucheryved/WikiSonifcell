function creerCategorie(nom, listeFonctions)
{
    let bloc = document.createElement("details");
    let summary = document.createElement("summary");
    summary.textContent = nom;
    let liste = document.createElement("ul");
    for(let i = 0; i < listeFonctions.length; i++) {
        let element = document.createElement("li");
        let lien = document.createElement("a");
        lien.textContent = listeFonctions[i];
        lien.href = "definition.html?fonction=" + listeFonctions[i];
        element.appendChild(lien);
        liste.appendChild(element);
  
        }
    
    bloc.appendChild(summary); 
    bloc.appendChild(liste);   
    return bloc;               
    
}

let grille = document.createElement("div");

let cat1 = creerCategorie("Mathematics functions", ["Atan", "Cos", "Sin", "Tan", "Asin", "Acos"]);
// Base
let catBase = creerCategorie("Base", ["Null", "Custom", "Pass", "Console Log"]);

// Tableaux (Arrays)
let catArrays = creerCategorie("Arrays", ["Get component", "Length", "Serve slice"]);

// Audio & Canaux
let catChannels = creerCategorie("Channels", ["Mono to all channels", "Several to Mono", "Two to Stereo"]);

// Conversions
let catConversions = creerCategorie("Conversions", ["Degrees to radian", "MIDI to Frequency", "Radian to degrees", "Str to ASCII"]);

// Enveloppes & Signaux
let catEnvelopes = creerCategorie("Envelopes", ["ADSR", "Fade In", "Fade Out"]);

// Générateurs & Bruit
let catGenerators = creerCategorie("Generators", ["Click", "Brownian Noise", "White Noise"]);

// Oscillateurs
let catOscillators = creerCategorie("Oscillators", ["CosineWave", "Modulate Sine", "SawTooth", "SineWave", "Square", "TanWave", "Triangle"]);

// Entrées & Fichiers (Inputs)
let catFiles = creerCategorie("Files", ["Load Audio", "Load CSV", "Load Image", "Load TXT", "Load XLSX"]);
let catParameters = creerCategorie("Parameters", ["Number", "Range", "Text"]);

// Réseau & Communication (Sockets)
let catSockets = creerCategorie("Sockets", ["HTTP Text", "HTTP Audio", "TCP", "UDP"]);

// Logique & Comparaisons
let catLogic = creerCategorie("Logic", ["If-then-else", "HigherThan", "GreaterOrEqual", "LowerThan", "LessOrEqual", "Equal", "NotEqual", "And", "Or", "Not"]);

// Mathématiques (Arithmétique & Mappings)
let catMappings = creerCategorie("Mappings", ["Linear"]);
let catArithmetics = creerCategorie("Arithmetics", ["+", "-", "×", "÷", "Abs", "Ceil", "Floor", "Power", "Round", "Sign", "Sqrt"]);
let catTrigonometry = creerCategorie("Trigonometry", ["Acos", "Asin", "Atan", "Atan2", "Cos", "Sin", "Tan"]);

// Parsers
let catParsers = creerCategorie("Parsers", ["Parse Float", "Parse Int", "Parse JSON", "Parse OSC"]);

// Traitement du Signal (Playback & Smooth)
let catPlayback = creerCategorie("Playback", ["Diff + retain", "Retain Max", "Retain Min", "Retain Value", "Smooth", "Speed Multiplier"]);
document.querySelector(".content").appendChild(cat1);

const container = document.querySelector(".content");

container.appendChild(catBase);
container.appendChild(catArrays);
container.appendChild(catChannels);
container.appendChild(catConversions);
container.appendChild(catEnvelopes);
container.appendChild(catGenerators);
container.appendChild(catOscillators);
container.appendChild(catFiles);
container.appendChild(catParameters);
container.appendChild(catSockets);
container.appendChild(catLogic);
container.appendChild(catMappings);
container.appendChild(catArithmetics);
container.appendChild(catTrigonometry);
container.appendChild(catParsers);
container.appendChild(catPlayback);