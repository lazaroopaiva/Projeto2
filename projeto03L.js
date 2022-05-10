const prompt = require("prompt-sync")();

console.log('Com os avanços da tecnologia, os meios de entreterimento mudaram, e assim começou a surgir reality shows onde a vida humana é posta em risco em troca de um prêmio em dinheiro. Você é o participante do "CHOICE", reality onde você irá se arriscar em alguns terrenos com o objetivo de sair vivo. ');
console.log();
console.log('O valor do prêmio será proporcional ao restante do status do seu personagem! ');
console.log();
let nomeParticipante = prompt('Digite o seu nome: ')
console.log();
console.log(`Olá, ${nomeParticipante}, Você tem 100 pontos para dividir entre VIDA e ENERGIA: `);
console.log();

function danoDia() {
    console.log('Você tomou dano!');
    statusParticipante.vida = statusParticipante.vida - 10
    statusParticipante.energia = statusParticipante.energia - 10
   let morte =  checaVida(statusParticipante.vida, statusParticipante.energia);
   return morte
}
function danoDia2() {
    console.log('Você tomou dano!');
    statusParticipante.vida = statusParticipante.vida - 2
    statusParticipante.energia = statusParticipante.energia - 5

}
function danoFome() {
    console.log('Você tomou dano!');
    statusParticipante.vida = statusParticipante.vida - 20
    let morte =  checaVida(statusParticipante.vida, statusParticipante.energia);
   return morte
}
function danoNoite() {
    console.log('Você tomou dano!');
    statusParticipante.vida = statusParticipante.vida - 3
    statusParticipante.energia = statusParticipante.energia - 3
    let morte =  checaVida(statusParticipante.vida, statusParticipante.energia);
   return morte

}
function danoNoite2() {
    console.log('Você tomou dano!');
    statusParticipante.vida = statusParticipante.vida - 6
    statusParticipante.energia = statusParticipante.energia - 6
    let morte =  checaVida(statusParticipante.vida, statusParticipante.energia);
   return morte


}
function gastaItem() {
    console.log('Você gastou um item!');
    statusParticipante.item = statusParticipante.item - 3
    

}
function checaVida (vida, energia ){
if(vida<=0){
    return true
}
if(energia <= 0){
    return true
}



}

let tempo = {
    horas: 0,
    dia: 1,
    periodo: 'Manhã',
    passagemTempo: function (horas) {
        this.horas += horas
        if(this.horas >= 24){
            this.horas -= 24;
            this.dia++ }



        if (this.horas >= 19) {
            this.periodo = 'Está de noite!'
        } else if (this.horas >= 12) {
          this.periodo = 'Está de tarde! ';
        } else if (this.horas >= 6) {
            this.periodo = 'Está de manhã!'
        }else{
            this.periodo = 'Está de madrugada'
        }
        
    },
    
}




do {

    (vida = +prompt('Quanto você quer de vida? '))
    console.log();
    energia = +prompt('Quanto você quer de energia? ')
    console.log();
    if (vida + energia != 100) {
        console.log('Você distribuiu os pontos de forma errada, distribua a quantidade de pontos corretamente');

    }

} while (vida + energia != 100)

let statusParticipante = {
    vida,
    energia,
    item: 6,
}

console.log(nomeParticipante, ', esses são os seus status: ', statusParticipante)


locais = ['FLORESTA',
    'MONTANHA',
    'DESERTO',]
let rotaFloresta;
let rotaMontanha;
let rotaDeserto;


for (i = 0; i < 3; i++) {
    console.log(` ${nomeParticipante}, você será lançado para sua aventura! `);
    console.log();
    let escolhaAmbiente = +prompt(`Escolha o ambiente em que irá jogar: 
ESCOLHA 0 PARA: FLORESTA

ESCOLHA 1 PARA: MONTANHA

ESCOLHA 2 PARA: DESERTO
`)
    console.log();

    while (escolhaAmbiente != 0 && escolhaAmbiente != 1 && escolhaAmbiente != 2) {
        escolhaAmbiente = +prompt('ENTRADA INVÁLIDA! ESCOLHA ENTRE 0, 1 OU 2: ')
    }
    console.log('Você escolheu: ', locais[escolhaAmbiente]);
    console.log();



    if (escolhaAmbiente == 0) {
        
        
        console.log(`Bom dia! Este é o dia ${tempo.dia}, são ${tempo.horas} horas ${tempo.periodo}`);
        console.log();
        console.log('Você foi lançado para FLORESTA!');
        console.log();
        //FLORESTA

        ///PRIMEIRA ESCOLHA DO DIA /////
        tempo.passagemTempo(8)
        console.log('Agora escolha sua rota: ');
        console.log();
        rotaFloresta = +prompt('Para ir pelo rio, digite 1. Para ir pela mata fechada digite 2: ')
        console.log();
        console.log('Agora escolha sua rota: ');
        console.log();
        while (rotaFloresta != 1 && rotaFloresta != 2) {
            rotaFloresta = +prompt('ENTRADA INVÁLIDA! DIGITE 1 OU 2: ');
        }
        if (rotaFloresta == 1) {
            console.log('Você escolheu ir pelo rio.')
            console.log();
            console.log('Isso fez você se desgastar muito e você também se machucou durante o trajeto. Isso te custou 10 pontos te energia e 10 de vida');
            console.log();
            if(danoDia()){
                console.log('Você morreu!');
                break;
            }
            console.log(statusParticipante.vida, statusParticipante.energia);
            console.log();
            
        } else if (rotaFloresta == 2) {
            console.log();
            console.log('Você escolheu ir pela mata fechada. ')
            console.log();
            console.log('O caminho é longo, e cheio de insetos. Isso te custou 2 pontos de vida e 5 pontos de energia')
            console.log();
            if(danoDia2()){
                console.log('Você morreu!');
                
                break;
              
            }}console.log(statusParticipante.vida, statusParticipante.energia);
            

        //// SEGUNDA ESCOLHA DO DIA /////
        
        tempo.passagemTempo(8);
        console.log();
        console.log( `Olá! São ${tempo.horas} horas ${tempo.periodo} e você ainda não comeu nada`);
        console.log();
        let comidaFloresta = prompt('Deseja usar um item pra caçar? Digite 1 para "SIM" ou 2 para "NÃO" ')
        while (comidaFloresta != 1 && comidaFloresta != 2) {
            comidaFloresta = prompt('ENTRADA INVÁLIDA! DIGITE 1 OU 2: ');
        } if (comidaFloresta == 1) {
            console.log();
            console.log('Você se alimentou direito! Por isso não tomará nenhum dano!');
            gastaItem();
            console.log();

        } else if (comidaFloresta == 2) {
            console.log();
            console.log('Você escolheu ficar com fome e poupar um item. Isso te custará 20 pontos de vida! ');
            console.log();
            if(danoFome()){
                console.log('Você morreu!');
                break;
            }
       
        }
        ///// TERCEIRA ESCOLHA DO DIA 
       
        tempo.passagemTempo(8);
        console.log();
        console.log(`Olá! São ${tempo.horas} horas da ${tempo.periodo} e você precisa imediatamente de um descanso!`);
        console.log();
        console.log('Você poderá dormir em cima de uma arvore ou ao na grama cercada por arbustos')
        console.log();
        noiteFloresta = prompt('Onde você deseja dormir? Digite 1 para dormir na arvore ou digite 2 para dormir no chão: ')
        while (noiteFloresta != 1 && noiteFloresta != 2) {
            noiteFloresta = prompt('ENTRADA INVÁLIDA! DIGITE 1 OU 2: ');
        }
        if (noiteFloresta == 1) {
            console.log();
            console.log('Você escolheu dormir em uma arvore, a escolha é mais segura. Você foi apenas picado por alguns insetos. ');
            console.log();
            console.log('Isso te custou apenas 3 pontos de vida e 3 de energia.');
            if(danoNoite()){
                console.log('Você morreu!');
                break;
            }
            console.log();
            console.log(statusParticipante.vida, statusParticipante.energia);
        } else if (noiteFloresta == 2) {
            console.log();
            console.log('Você escolheu o pior lugar para dormir! Você ficou no chão e foi atacado por um lobo!');
            console.log();
            console.log('Isso te custou 6 pontos de vida e 6 pontos de energia! ');
            if(danoNoite2()){
                console.log('Você morreu!');
                break;


            }
            console.log();
            console.log(statusParticipante.vida, statusParticipante.energia);
            
        
        }
    } 

   
    // MONTANHA

    //// PRIMEIRA ESCOLHA DO DIA /////
    console.log();

    console.log();
   
    

    console.log();
    
    if (escolhaAmbiente == 1) {
        console.log(`Bom dia! Este é o dia ${tempo.dia}, são ${tempo.horas}  ${tempo.periodo}`);
        console.log();
        console.log('Você foi lançado para MONTANHA!');
      
        console.log()
        console.log('Você foi lançado para uma montanha!');
        console.log();
        console.log('Você precisa escolher o lado da montanha pelo qual pretende subir!');
        console.log();
        rotaMontanha = +prompt('Por onde você quer subir? Digite: 1 para subir pelo norte, ou digite 2 para ir pelo sul:  ')
        while (rotaMontanha != 1 && rotaMontanha != 2) {
            console.log();
            rotaMontanha = +prompt('ENTRADA INVÁLIDA! DIGITE 1 OU 2: ');
        } if (rotaMontanha == 1) {
            console.log();
            console.log('Você escolheu ir pelo norte!');
            console.log();
            console.log('O lado norte é lado mais seguro, pois ele é melhor de escalar e tem menos animais. Isso te custou 2 pontos de vida e 5 de energia');
            if(danoDia2()){
                console.log('Você morreu!');
                
                break;
              
            }



        } else if (rotaMontanha == 2) {
            console.log('Você escolheu ir pelo sul!');
            console.log();
            console.log('O lado sul é mais perigoso, pois ele é mais íngrime e tem mais animais. Isso te custou 10 pontos de vida e 10 pontos de energia');
            if(danoDia()){
                console.log('Você morreu!');
                break;
            }
            console.log(statusParticipante.vida, statusParticipante.energia);
            console.log();


        }

        ////// SEGUNDA ESCOLHA DO DIA /////
        tempo.passagemTempo(8)
        console.log( `Olá! São ${tempo.horas} horas da  ${tempo.periodo} e você ainda não comeu nada`);
         console.log();
        let comidaMontanha = +prompt('Deseja usar um item para caçar? Digite 1 para sim ou 2 para não: ')
        while (comidaMontanha != 1 && comidaMontanha != 2) {
            console.log();
            comidaMontanha = +prompt('ENTRADA INVÁLIDA! DIGITE 1 OU 2: ');
        } if (comidaMontanha == 1) {
            console.log();
            console.log('Você se alimentou direito! Por isso não tomará nenhum dano!');
            gastaItem();
            console.log();
        } else if (comidaMontanha == 2) {
            console.log();
            console.log('Você escolheu ficar com fome e poupar um item. Isso te custará 20 pontos de vida! ');
            if(danoFome()){
                console.log('Você morreu!');
                break;
            }
            console.log(statusParticipante);
            console.log();

        }

        ////// TERCEIRA ESCOLHA DO DIA //////

       
        tempo.passagemTempo(8);
        console.log(`Olá! São ${tempo.horas} horas da ${tempo.periodo} e você precisa imediatamente de um descanso!`);
        console.log();
       
        noiteMontanha = +prompt('Onde deseja dormir? Digite 1 para dormir numa caverna ou digite 2 para dormir entre as rochas: ')
        while (noiteMontanha != 1 && noiteMontanha != 2) {
            noiteMontanha = +prompt('ENTRADA INVÁLIDA! DIGITE 1 OU 2: ');
        } if (noiteMontanha == 1) {
            console.log('Você escolheu dormir na carverna!');
            console.log('A caverna é mais segura, porém ela está cheia de larvas que te fazem mal');
            console.log('Isso te custará 3 pontos de vida e 3 pontos de energia');
            if(danoNoite()){
                console.log('Você morreu!');
                break;
            }

        } else if (noiteMontanha == 2) {
            console.log('Você escolheu o pior lugar pra dormir! As rochas são muito expostas e você ficou vulnerável');
            console.log('Isso te custará 6 pontos de vida e 6 pontos de energia');
            if(danoNoite2()){
                console.log('Você morreu!');
                break;


            }

        }

        
      

    }
    //// DESERTO //////
    //// PRIMEIRA ESCOLHA DO DIA //////
    tempo.passagemTempo(8)
    if (escolhaAmbiente == 2) {
        console.log();
        
        console.log(`Bom dia! Este é o dia ${tempo.dia}, são ${tempo.horas} ${tempo.periodo}`);
          console.log()
        console.log('Você foi lançado para DESERTO!');
        console.log();
        console.log('Você precisa escolher o lado do deserto por onde quer entrar!');
        console.log();
        rotaDeserto = +prompt('Por onde você quer entrar? Digite: 1 para entrar pelo norte, ou digite 2 para entrar pelo sul:  ')
        while (rotaDeserto != 1 && rotaDeserto != 2) {
            rotaDeserto == +prompt('ENTRADA INVÁLIDA! DIGITE 1 OU 2: ')
        }


        if (rotaDeserto == 1) {
            console.log();
            console.log('Você escolheu ir pelo norte!');
            console.log('O lado norte é lado mais perigoso, pois ele é mais quente e as tempestades de areia são mais frequentes. isso te custou 10 pontos de vida e 10 de energia ');
            console.log();
            if(danoDia()){
                console.log('Você morreu!');
                break;
            }
            console.log(statusParticipante.vida, statusParticipante.energia);
            console.log();

        } else if (rotaDeserto == 2) {
            console.log('Você escolheu ir pelo sul!');
            console.log('O lado sul é mais seguro, pois os ventos são mais frequentes e as tempestades de areia não. Isso te custou 2 pontos de vida e 5 de energia. ');
            if(danoDia2()){
                console.log('Você morreu!');
                
                break;
              
            }
        }
      
        tempo.passagemTempo(8);
        console.log();
        console.log( `Olá! São ${tempo.horas} horas da  ${tempo.periodo} e você ainda não comeu nada`);
        console.log();
        console.log('Já se passaram algumas horas e você ainda não comeu nada.');
        console.log();
        comidaDeserto = prompt('Deseja usar um item pra caçar? Digite 1 para "SIM" ou 2 para "NÃO" ')
        while (comidaDeserto != 1 && comidaDeserto != 2) {
            comidaDeserto = prompt('ENTRADA INVÁLIDA! DIGITE 1 OU 2: ');
        } if (comidaDeserto == 1) {
            console.log();
            console.log('Você se alimentou direito! Por isso não tomará nenhum dano!');
            gastaItem();

            console.log();

        } else if (comidaDeserto == 2) {
            console.log();
            console.log('Você escolheu ficar com fome e poupar um item. Isso te custará 20 pontos de vida! ');
            console.log();
            if(danoFome()){
                console.log('Você morreu!');
                break;
            }
        }
        //// TERCEIRA ESCOLHA DO DIA ///// 

       
        tempo.passagemTempo(8);
        console.log(`Olá! São ${tempo.horas} horas da ${tempo.periodo} e você precisa imediatamente de um descanso!`);
         let noiteDeserto = +prompt('Onde deseja dormir? Digite 1 para dormir entre as dunas ou digite 2 para dormir no campo aberto: ')
        while (noiteDeserto != 1 && noiteDeserto != 2) {
            noiteDeserto = +prompt('ENTRADA INVÁLIDA! DIGITE 1 OU 2: ');
        } if (noiteDeserto == 1) {
            console.log('Você escolheu dormir entre as dunas!');
            console.log('Entre as dunas é mais seguro pois você fica protegido dos ventos gelados do deserto e também de animais ');
            console.log('Isso te custará 3 pontos de vida e 3 pontos de energia');
            if(danoNoite()){
                console.log('Você morreu!');
                break;
            }


        } else if (noiteDeserto == 2) {
            console.log('Você escolheu o pior lugar pra dormir! O campo aberto te deixou exposto ao vento gelado do deserto e isso te causou hipotermia');
            console.log('Isso te custará 6 pontos de vida e 6 pontos de energia');
            if(danoNoite2()){
                console.log('Você morreu!');
                break;


            }

           
        }
    }
       console.log('ESTE É O SEU PRÊMIO:');
       console.log((statusParticipante.vida + statusParticipante.energia) * 1000000, 'DE DÓLARES');


}