// let salario;
// salario = prompt("Sua Renda");
// let idade; 
// idade = prompt("Sua idade");
// let emprestimo;
// emprestimo = prompt ("Valor do imprestimo");
// if (idade > 21 && idade <55){
//     console.log("Idade Aprovado");
//     if(salario*10<emprestimo){
//         console.log ("negado");
//     }
//     else{
//         console.log("Parabéns você foi aprovado");
//     }
// }
// else {
//     console.log("Desculpa, não foi possivel");
// }


// let Numero = 17 ;
// let Palpite = prompt ("Digite um número de 1 a 50");

// while(Palpite !== Numero){
// if(Palpite > Numero){
//     console.log( "Não deu match ");
//     }
//     else{(Palpite < Numero);
//     console.log ("Não deu match AZARADO");
//     }
// }
//     else if(Palpite == numero );

let number = Math.floor(Math.random()* 50 + 1);
let chute = prompt("Adivinhe o número coração");

while(chute != number){

    if(chute > number){
        console.log ("Um numero menor");
    }
    if(chute < number ){
        console.log ("Um numero maior");
    }
    else{
    console.log ("Você acertou");
    }
}
alert("acertoh")