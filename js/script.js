/*
!!!!!!!!!!!!!AULA 1!!!!!!!!!!!!!
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


!!!!!!!!!!!!!AULA 2!!!!!!!!!!!!!
EXERCÍCIO 1: Faça um formulário que receba informações do usuário na página web

const enviar = document.querySelector("#enter");

enviar.addEventListener('click', function(form){

    form.preventDefault();

    const txnome = document.querySelector("#txnome");
    const nome = txnome.value;

    console.log(`Nome: ${nome}`);

});

const enviar = document.querySelector("#enter");

enviar.addEventListener("click", function(form){

        form.preventDefault();

    const txnome = document.querySelector("#txnome");
    const nome = txnome.value;

    console.log(`Nome: ${nome}`);

    const txemail = document.querySelector("#txemail");
    const email = txemail.value;

    console.log(`Email: ${email}`);

    const txtelefone = document.querySelector("#txtelefone");
    const telefone = txtelefone.value;

    console.log(`Telefone: ${telefone}`);

    const txendereco = document.querySelector("#txendereco");
    const endereco = txendereco.value;

    console.log(`Endereço: ${endereco}`);

    const txmensagem = document.querySelector("#txmensagem");
    const mensagem = txmensagem.value;

    console.log(`Mensagem: ${mensagem}`);


});

AULA 3!!!!!!!!!!!!!!!
EXERCICIO 1

const pessoa = {
    nome: 'Jorge Silva',
    dtNascimento: 1995,

};
function mostrar (nome, dtNascimento){
    console.log(`${this.nome} nasceu em ${this.dtNascimento}`);
};

mostrar.call(pessoa);
*/

const carro = {
    marca: "Ford",
    cor: "preto",
    placa: "SVG 2267",
    velocidade_atual: 50,
    marcha_atual: "Quarta",
    freio_de_mao_puxado: true,
    chave_virada: true


};
function mostrar(marca, cor, placa, velocidade_atual,marcha_atual, freio_de_mao_puxado, chave_virada) {
    console.log(`${this.marca} da cor ${this.cor} de placa ${this.placa} de velocidade atual ${this.velocidade_atual} na marcha ${this.marcha_atual} com o freio de mão ${this.freio_de_mao_puxado} e a chave virada ${this.chave_virada}`);

};

mostrar.call(carro);
