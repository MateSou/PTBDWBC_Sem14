class Aluno {
    constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
        this.primeiroNome = primeiroNome;
        this.segundoNome = segundoNome;
        this.primeiraNota = primeiraNota;
        this.segundaNota = segundaNota;
    }

    nomeCompleto () {
        return this.primeiroNome + this.segundoNome; 
    }

    media(){
        return (this.primeiraNota*0.6) + (this.segundaNota*0.4);   
    }

    situacao() {
        return this.media() > 6 ? "Aprovado!" : "Reprovado!";
    }
}

//Array de alunos
var alunos = new Array();
alunos = [];
alunos[0] = new Aluno("João", "Silva", 7, 8.5);
alunos[1] = new Aluno("Lima", "Barreto", 10, 7.5);
alunos[2] = new Aluno("Mariana", "Costa", 6, 9.1);
alunos[3] = new Aluno("Fernando", "Pessoa", 3, 7.4);
alunos[4] = new Aluno("Machado", "de Assis", 8, 5.6);

function percorre() {
    var alun = new Array();
    alun = [];
    alun[0] = document.getElementById("alun1");
    alun[1] = document.getElementById("alun2");
    alun[2] = document.getElementById("alun3");
    alun[3] = document.getElementById("alun4");
    alun[4] = document.getElementById("alun5"); 
    for(i = 0; i < 5; i++) {    
       alun[i].innerText = "Nome: " + alunos[i].nomeCompleto() + "\n" +
                            "Media: " + alunos[i].media() + "\n" +
                            "Situação: " + alunos[i].situacao() + "\n";
    }
} 

percorre();
