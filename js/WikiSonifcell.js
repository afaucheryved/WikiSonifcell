const Bloc = class{
    constructor(couleur, question, reponse){
        if(couleur == "rouge"){
            this.couleur="#954141";
        }
        else{
            this.couleur="#226B49";
        }
        this.question=question;
        this.reponse=reponse;
        this.bloc = document.createElement("details");
        //style de bloc:
        this.bloc.style.color=couleur;
        this.bloc.style.border = `10px, solid, ${couleur}`;
        this.bloc.style.opacity = 0.1;
        this.summary = document.createElement("summary");
        this.summary.textContent = question;
        this.answer = document.createElement("p");
        this.answer.textContent = reponse;
        this.bloc.appendChild(this.summary);
        this.bloc.appendChild(this.answer);
        return this.bloc
    }
}