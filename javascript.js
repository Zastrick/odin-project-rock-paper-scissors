// variables
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["piedra", "papel", "tijera"]; // array
    const randomIndex = Math.floor(Math.random() * choices.length); // multiplica Math.floor por array 
    return choices[randomIndex];
}

function getHumanChoice() {
    return prompt("Piedra, Papel o Tijeras").toLowerCase(); // lowercase para hacer minusculas
}

// funcion de cada ronda
function playRound(humanChoice, computerChoice) {
    console.log("Tu elección: " + humanChoice);
    console.log("Elección de la computadora: " + computerChoice);

    // en caso de empate
    if (humanChoice === computerChoice) {
        console.log("¡Es un empate!");
        return 0; 
    } 
    // evaluo si gana el jugador
    else if (
        (humanChoice === "piedra" && computerChoice === "tijera") ||
        (humanChoice === "papel" && computerChoice === "piedra") ||
        (humanChoice === "tijera" && computerChoice === "papel")
    ) {
        console.log("¡Ganaste! " + humanChoice + " le gana a " + computerChoice);
        return 1; // se da puntaje
    } 
    // si no hay empate y no gano el jugador, punto para la maquina
    else {
        console.log("¡Pierdes! " + computerChoice + " le gana a " + humanChoice);
        return -1; 
    }
}

// funcion para 5 rondas
function playGame() {
    for (let round = 1; round <= 5; round++) {
        console.log(`\n--- Ronda ${round} ---`);

        let humanChoice = getHumanChoice();  
        let computerChoice = getComputerChoice();  
        let result = playRound(humanChoice, computerChoice);  

        // nuevas puntuaciones
        if (result === 1) {
            humanScore++;  
        } else if (result === -1) {
            computerScore++;  
        }

        // mostrar puntuaciones
        console.log("Puntuación humana: " + humanScore);
        console.log("Puntuación de la computadora: " + computerScore);
    }

    // declarar ganador
    if (humanScore > computerScore) {
        console.log("\n¡Felicidades! Ganaste el juego con " + humanScore + " puntos.");
    } else if (humanScore < computerScore) {
        console.log("\n¡La computadora gana el juego con " + computerScore + " puntos.");
    } else {
        console.log("\n¡Es un empate! Ambos tienen " + humanScore + " puntos.");
    }
}

playGame();



