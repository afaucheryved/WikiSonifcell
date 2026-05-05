
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
        img.src = "../assets/images/" + image;
        img.style.width = "100%";
        img.style.maxWidth = "500px";
        img.style.marginTop = "10px";
        div.appendChild(img);
    }

    return div;
}

let astuce1 = creerAstuce("Delete a block", "Select a block and press the Delete key to remove it.");
let astuce2 = creerAstuce("Resize a block", "Touch and drag the bottom-right corner of a block to resize it.");
let astuce3 = creerAstuce("Live output", "Right-click on a block to see its output value in real time.");
let astuce4 = creerAstuce("Connect blocks", "Draw a wire from an output to an input to connect two blocks together.");

let container = document.querySelector(".content");
container.appendChild(astuce1);
container.appendChild(astuce2);
container.appendChild(astuce3);
container.appendChild(astuce4);