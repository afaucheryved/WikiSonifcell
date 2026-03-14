
const Bloc = class{ // class qui definie un bloc
    constructor(couleur, question, reponse){
        if(couleur == "rouge"){
            this.couleur="149, 65, 65";
        }
        else{
            this.couleur="34, 107, 73";
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
        this.bloc.style.border = `10px solid rgba(${this.couleur})`;
        this.bloc.style.opacity = 0.9;
        this.bloc.style.backgroundColor = `rgba(${this.couleur}, 0.1)`;
        this.bloc.style.minHeight = "50px";
        this.bloc.style.maxWidth = "300px";
        this.bloc.style.borderRadius = "25px";
        this.bloc.style.textAlign = "center";
        this.bloc.style.fontSize = "35px";
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
document.body.style.backgroundColor="#455561";

let tableBlocs = document.createElement("table");
let c1 = document.createElement("th")//on fait 2 colonnes de bloc
let c2 = document.createElement("th")

let listeBlocs = [];
listeBlocs.append(new Bloc("rouge", "question", "reponse").bloc);
listeBlocs.append(new Bloc("vert", "question2", "reponse2").bloc);

let i=0;
array.forEach(element => { // de façon à remplire 1 col puis l'autre
    if(i%2==0){
        c1.appendChild(element);
    }
    else{
        c2.appendChild(element);
    }
    i++;
    })
tableBlocs.appendChild(c1);
tableBlocs.appendChild(c2);