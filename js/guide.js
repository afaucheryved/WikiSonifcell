
function creerAstuce(titre, texte, image) {
    let div = document.createElement("div")// crée un div
    let h2 = document.createElement("h2")// crée un h2 avec le titre
    let p = document.createElement("p")// crée un p avec le texte
    
    h2.textContent = titre;
    p.textContent = texte;

    div.appendChild(h2);
    div.appendChild(p);

    if(image) {
        let img = document.createElement("img");
        img.src = "../assets/" + image;
        img.style.cssText = "width: 400px; max-width: 400px; height: auto; display: block; margin-top: 10px; border-radius: 8px;";        div.appendChild(img);
    }

    return div;
}

let astuce1 = creerAstuce("Delete a block", "Select a block and press the Delete key to remove it.");
let astuce2 = creerAstuce("Resize a block", "Touch and drag the bottom-right corner of a block to resize it.");
let astuce3 = creerAstuce("Live output", "Right-click on a block to see its output value in real time.");
let astuce4 = creerAstuce("Connect blocks", "Draw a wire from an output to an input to connect two blocks together.");
let astuce5 = creerAstuce("Add a block","Double-click to place a block on the canvas");
let astuce6 = creerAstuce("Reset view"," Click the home button to re-center the view");
let astuce7 = creerAstuce("Select a block"," Click on a block to select it");
let astuce8 = creerAstuce("Rename a block","Use the Name field to change a block's name","rename.png");
let astuce9 = creerAstuce("Connect generators"," Don't forget to connect the sound output on generator blocks","sound.png");
let astuce10 = creerAstuce("Advanced mode", " Click Advanced to edit or create a custom block, then click Apply");
let astuce11 = creerAstuce("Play / Stop / Record"," Use the toolbar buttons to play, stop or record","play.png");
let astuce12 = creerAstuce("Settings"," Sampling rate, buffer duration, number of audio channels","parameters.png");


let container = document.querySelector(".content");
container.appendChild(astuce1);
container.appendChild(astuce2);
container.appendChild(astuce3);
container.appendChild(astuce4);
container.appendChild(astuce5);
container.appendChild(astuce6);
container.appendChild(astuce7);
container.appendChild(astuce8);
container.appendChild(astuce9);
container.appendChild(astuce10);
container.appendChild(astuce11);
container.appendChild(astuce12);