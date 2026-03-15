
const Bloc = class{ // class qui definie un bloc
    constructor(couleur, question, reponse){
        if(couleur == "rouge"){
            this.couleur="160, 65, 65";
        }
        else{
            this.couleur="44,132,91";//"34, 107, 73";
        }
        this.question=question;
        this.reponse=reponse;
        this.bloc = document.createElement("details");
        this.summary = document.createElement("summary");
        this.summary.textContent = question;
        this.answer = document.createElement("p");
        this.answer.textContent = reponse;
        //style bloc
        this.bloc.style.color=couleur;
        this.bloc.style.border = `5px solid rgba(${this.couleur})`;
        this.bloc.style.opacity = 0.9;
        this.bloc.style.backgroundColor = `rgba(${this.couleur}, 0.2)`;
        this.bloc.style.minHeight = "50px";
        this.bloc.style.maxWidth = "300px";
        this.bloc.style.borderRadius = "15px";
        this.bloc.style.textAlign = "center";
        this.bloc.style.fontSize = "25px";
        this.bloc.style.color = `rgba(${this.couleur})`;
        this.bloc.style.fontFamily = "Segoe UI, Roboto, Helvetica, Arial, sans-serif";
        this.bloc.style.fontWeight = "bold";
        //style answer
        this.answer.style.fontSize = "15px";
        //append
        this.bloc.appendChild(this.summary);
        this.bloc.appendChild(this.answer);
    }
}
document.body.style.backgroundColor="#455561"; // à enlever apres merge

let tableBlocs = document.createElement("table");
tableBlocs.style.borderCollapse = "separate";
tableBlocs.style.borderSpacing = "15px";

let c1 = document.createElement("tr");//on fait 2 colonnes de bloc
let c2 = document.createElement("tr");

const listeBlocs = [];
listeBlocs.push(new Bloc("rouge", "question1 question1 question1", "reponse").bloc);
listeBlocs.push(new Bloc("vert", "question2question2 question2", "reponse2").bloc);
listeBlocs.push(new Bloc("rouge", "question3 question3 question3", "reponse3").bloc);
listeBlocs.push(new Bloc("rouge", "question3 question3 question3", "reponse3").bloc);

for(let i =0; i<listeBlocs.length; i++){ // de façon à remplire 1 col puis l'autre
    let cel = document.createElement("td");
    cel.appendChild(listeBlocs[i]);
    if(i%2==0){
        c1.appendChild(cel);
    }
    else{
        c2.appendChild(cel);
    }
    }
tableBlocs.appendChild(c1);
tableBlocs.appendChild(c2);
document.body.appendChild(tableBlocs);