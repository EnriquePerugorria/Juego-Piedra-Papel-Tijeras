
const imgPlayerChoice = document.getElementById('playerChoice')
const imgComputerChoice = document.getElementById('computerChoice')

const pResult = document.getElementById('result');
const pScore = document.getElementById('score');

const buttons = document.querySelectorAll('button');
const choices = ['piedra','papel','tijeras'];//Posiciones, 0,1,2 ARREGLO
const objfileNames = { // OBJETO

	'piedra': 'images/rock.png',
	'papel': 'images/paper.png',
	'tijeras': 'images/scissors.png',
}

let positiveScore = 0;
let negativeScore = 0;
buttons.forEach(

	button => button.addEventListener('click', startGame)

	);

function startGame(event){
	// determinar la elección del jugador
	const button =	event.currentTarget;
	const playerChoice =	button.dataset.choice;
	//console.log(playerChoice);


	//determinar la elección de la computadora
	const computerChoice = getComputerChoice();
	//console.log(computerChoice);
	
	//determinar quién gana
	const winner = getWinner(playerChoice, computerChoice);
	//console.log(`El ganador es: ${winner}`);


	//mostrar resultado
	imgPlayerChoice.setAttribute('src', objfileNames[playerChoice]);
	imgComputerChoice.setAttribute('src', objfileNames[computerChoice]);

let result;
if (winner=== 'player') {
		result='GANAS'
		positiveScore +=1;
	} else if (winner === 'computer'){
		result='PIERDES'
		negativeScore +=1;
	} else { //empate
		result='EMPATAS'
	}

	pResult.innerHTML = `Tú ${result} eligiendo
					 <strong>${playerChoice}</strong> en contra de
					 <strong>${computerChoice}</strong>`

	pScore.innerHTML = `Has Ganado ${positiveScore} veces,
						Has Perdido ${negativeScore} veces.`				
}

function getComputerChoice(){
	// obtener un valor aleatorio i (0,1,2)
  	const i = parseInt(Math.random()*3)//parseInt Convierte valores decimales en ENTEROS(Sin Coma)

  	//DEVOLER ELECCIÓN DE LA COMPUTADORA

  	return choices[i];
  }


function getWinner(playerChoice, computerChoice){

if (playerChoice === computerChoice) {
	return null;
	} 

if(playerChoice==='piedra') {
		if(computerChoice==='papel'){
		return'computer';
 		}	 else { //computer Tijeras
 		return 'player';
 		}	

} else if (playerChoice==='papel') {
 		if(computerChoice==='piedra'){
		return'player';
 		}	 else{ //computer Tijeras
 		return 'computer';
		}

} else //player Tijeras

 if(computerChoice=='papel'){
	return'player';
 	}	 else{ //computer piedra
 		return 'computer';
 }

}

