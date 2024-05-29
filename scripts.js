const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')


let humanScoreNumber = 0 /* esse cara aqui vai ficar contando quantos pontos eu tenho */
let machineScoreNumber = 0

const playHuman = (humanChoice) => {   /*pegar o click e a escolha do humano */
    playTheGame(humanChoice, playMachine())

}

const playMachine = () => {  /* "escolha" da maquina */
    const choices = ['rock', 'paper', 'scissors'] /* a maquina tem 3 opções */
    const randomNumber = Math.floor(Math.random() * 3) /* o Math.random vai sortear as opções, e como ele so sorteia numeros entre 0 a 1, vamos multiplicar o valor que der por 3 */
    /* e com ajuda do Math.floor, os numeros depois de sorteados e multiplicados, serão arredondados pra baixo */

    return choices[randomNumber] /* vai retornar o que a maquina escolheu */
}

const playTheGame = (human, machine) => {  /* vai verificar quem ganhou, humano ou maquina */ 
    /* quem vai chamar o playTheGame é o playHuman, por que toda dez que humano escolher alguma coisa, eu pego
    o humanChoice, chamo o playMachine */

    console.log('Humano: ' + human + ' Maquina: ' + machine) 

    /* neste caso vamos usar o else if */

        /* vamoes ter 3 casos, ou deu empate ou o humano ganha ou a maquina ganha */

    if (human === machine) {  /* se o que o humano escolheu é o mesmo que a maquina escolheu, deu empate! */
        result.innerHTML = 'Empate!'   /* paragrafo result que mapeamos aqui no Js e estamos fazendo com que
        apareça na tela 'Empate' com ajuda do innerHTML */

    } else if (
        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')
    ) {
        humanScoreNumber++ /* toda vez que o humano ganhar eu adiciono mais um */
        humanScore.innerHTML = humanScoreNumber /* para o numero que esta no span, mudar conforme a pontuação for mudando! */
        result.innerHTML = 'Você ganhou'  /* para aparecer está mensagem no paragrafo*/
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = 'Você perdeu'
    }
}
    /* pedra ganha de tesoura, tesoura ganha de papel e papel ganha de pedra  */
  
    /*  pedra -> tesoura -> papel */