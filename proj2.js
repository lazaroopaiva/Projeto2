console.clear();
const prompt = require('prompt-sync')();

let nome = prompt('Digite o seu nome: ')
console.log('Seja bem-vindo,', nome, 'esse é o seu jogo de JOKENPO, escolha entre "pedra", "papel", "tesoura"');
let continuar = 'sim'
while(continuar == 'sim'){
   

let elementos = [ 'pedra', 'papel', 'tesoura']
let vitoriasUsu = 0
let vitoriasCpu = 0
let empates = 0

let numRandom = Math.random();
let multiplicarNum = numRandom * 3;
let computador = Math.floor(multiplicarNum);
let escolhaCpu = elementos [computador]

let rodadas = +prompt('Quantas vezes você quer jogar? ')
for(i= 0; i < rodadas; i++){

    let usuario = prompt('Escolha sua opção: ')

    console.log('Escolha do computador: ', escolhaCpu)

    while(usuario !== 'pedra' && usuario !== 'papel' && usuario !== 'tesoura'){
        usuario = prompt('Entrada inválida, encolha entre: Pedra, Papel e Tesoura ')
    } 

    if(escolhaCpu=='pedra'){   
        if(usuario=='pedra'){
            console.log('Empatou')
            empates++
        }else if(usuario  == 'papel'){
            console.log(`${nome} venceu` );
            vitoriasUsu++
        }else if(usuario == 'tesoura'){
            console.log('O computador venceu! ');
            vitoriasCpu++
        }

    }else if(escolhaCpu == 'papel'){
        if(usuario=='pedra'){
            console.log('O computador venceu! ');
            vitoriasCpu++
        }else if(usuario== 'tesoura'){
            console.log(`${nome} venceu`);
            vitoriasUsu++
        }else if(usuario== 'papel'){
            console.log('Empatou!')
            empates++
        }

    }else if(escolhaCpu== 'tesoura') {
        if(usuario == 'pedra'){
            console.log(`${nome} venceu`);
            vitoriasUsu++
        }else if(usuario=='papel'){
            console.log('O computador venceu');
            vitoriasCpu++
        }else if(usuario=='tesoura'){
            console.log('Empatou');
            empates++
        }
    }
}

console.log(`Computador venceu: ${vitoriasCpu} vezes`);
console.log(`${nome} venceu: ${vitoriasUsu} vezes`);
console.log(`Houveram ${empates} empates`);

if(vitoriasUsu > vitoriasCpu){
    console.log(`${nome} foi o grande campeão!`)
}else if(vitoriasCpu > vitoriasUsu){
    console.log('O computador foi o grande campeão');
}else{
    console.log('Empate');
}
continuar = prompt('Deseja jogar novamente? ').toLowerCase()
while(continuar!='sim'&& continuar!='nao' && continuar !== 'não'){ 
    continuar = prompt('Deseja jogar novamente? ').toLowerCase()

}
} 
console.log('Jogo encerrado! ');

 