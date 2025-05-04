// variables
let humanScore = 0;
let computerScore = 0;

// Función para obtener la elección de la computadora
function getComputerChoice() {
    const choices = ["piedra", "papel", "tijera"];
    const randomIndex = Math.floor(Math.random() * choices.length); // Multiplica Math.random() por el tamaño del array
    return choices[randomIndex];
}

// Función para jugar una ronda
function playRound(humanChoice, computerChoice) {
    const resultDiv = document.getElementById('result');
    console.log("Tu elección: " + humanChoice);
    console.log("Elección de la computadora: " + computerChoice);

    // En caso de empate
    if (humanChoice === computerChoice) {
        resultDiv.textContent = "¡Es un empate!";
        return 0;
    } 
    // Si gana el jugador
    else if (
        (humanChoice === "piedra" && computerChoice === "tijera") ||
        (humanChoice === "papel" && computerChoice === "piedra") ||
        (humanChoice === "tijera" && computerChoice === "papel")
    ) {
        resultDiv.textContent = `¡Ganaste! ${humanChoice} le gana a ${computerChoice}`;
        return 1;
    } 
    // Si gana la maquina
    else {
        resultDiv.textContent = `¡Pierdes! ${computerChoice} le gana a ${humanChoice}`;
        return -1;
    }
}

// actualizar el puntaje
function updateScore() {
    const scoreDiv = document.getElementById('score');
    scoreDiv.textContent = `Puntuación - Jugador: ${humanScore} | Computadora: ${computerScore}`;

    // Verificar si hay un ganador
    if (humanScore === 5) {
        scoreDiv.textContent += "\n¡Felicidades! ¡Ganaste el juego!";
        disableButtons(); // apagar botones a los 5
    } else if (computerScore === 5) {
        scoreDiv.textContent += "\n¡La computadora gana el juego!";
        disableButtons(); 
    }
}
// funcion desabilitar botones
function disableButtons() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.disabled = true);
}

document.getElementById('piedra').addEventListener('click', () => {
    let humanChoice = 'piedra';
    let computerChoice = getComputerChoice();
    let result = playRound(humanChoice, computerChoice);
    if (result === 1) humanScore++;
    else if (result === -1) computerScore++;
    updateScore();
});

document.getElementById('papel').addEventListener('click', () => {
    let humanChoice = 'papel';
    let computerChoice = getComputerChoice();
    let result = playRound(humanChoice, computerChoice);
    if (result === 1) humanScore++;
    else if (result === -1) computerScore++;
    updateScore();
});

document.getElementById('tijera').addEventListener('click', () => {
    let humanChoice = 'tijera';
    let computerChoice = getComputerChoice();
    let result = playRound(humanChoice, computerChoice);
    if (result === 1) humanScore++;
    else if (result === -1) computerScore++;
    updateScore();
});



