/*
EXERCÍCIO 1
console.log("O vinicius eh muito faixa branca");

let nome = "Rafaella", idade = 20;

console.log(`Seu nome é ${nome} e sua idade é ${idade}`);


EXERCÍCIO 2
let suaIdade = prompt("Sua idade: ")

if (suaIdade >= 18){
    console.log("Você pode entrar!");
} else {
    console.log("Acesso negado!");
}


EXERCÍCIO 3
function pessoa (nome, idade){
    this.nome = nome;
    this.idade = idade;
    return console.log(`Olá ${nome}, sua idade é ${idade}. \n Seja bem-vindo!`);
}

let nome = prompt("Digite seu nome: ");
let idade = prompt("Digite sua idade: ");

console.log(pessoa(nome, idade));



EXERCÍCIO 4
let numero = 20;

function parImpar (numero){

    if(numero % 2 == 0){
        let numero = 10;
        console.log("Este número é par");
        console.log(numero);
    }else{
        console.log("Este número é ímpar!");
    }
}

parImpar(numero);
console.log(numero);


EXERCÍCIO 5
//Function Arrow => : se eu tenho só uma função, posso usar Arrow

    //Exemplo 1 sem Arrow:

    function potencia (numero){
        return numero * numero;
}

console.log(potencia(5));

    //Exemplo 2 com Arrow

    const potencia = (numero) => {
        return numero * numero;
}

console.log(potencia(6));
*/
