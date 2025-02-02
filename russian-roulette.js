let players = [];
let currentPlayerIndex = 0;
let bulletPosition;
let gameOver = false;

function addPlayer() {
    let playerName = document.getElementById("player-name").value.trim();

    if (playerName === "") {
        alert("Please enter a name.");
        return;
    }

    if (players.length >= 2) {
        alert("Only 2 players are allowed per round.");
        return;
    }

    players.push(playerName);
    document.getElementById("player-list").innerHTML = `<p>${players.join(" vs ")}</p>`;
    document.getElementById("player-name").value = "";

    if (players.length === 2) {
        document.getElementById("start-btn").disabled = false;
    }
}

function startGame() {
    bulletPosition = Math.floor(Math.random() * 6); // Random bullet position (1 out of 6)
    currentPlayerIndex = 0;
    gameOver = false;

    document.getElementById("game-status").innerHTML = `<p>Game Started! ${players[currentPlayerIndex]}'s turn.</p>`;
    document.getElementById("shoot-btn").disabled = false;
    document.getElementById("start-btn").disabled = true;
}

function shoot() {
    if (gameOver) return;

    let chamber = Math.floor(Math.random() * 6);
    let statusText = "";

    if (chamber === bulletPosition) {
        statusText = `<p>💥 ${players[currentPlayerIndex]} got shot! ${players[1 - currentPlayerIndex]} wins!</p>`;
        gameOver = true;
        document.getElementById("shoot-btn").disabled = true;
    } else {
        statusText = `<p>🔫 Click! ${players[currentPlayerIndex]} survived.</p>`;
        currentPlayerIndex = 1 - currentPlayerIndex; // Switch turns
        statusText += `<p>Next turn: ${players[currentPlayerIndex]}</p>`;
    }

    document.getElementById("game-status").innerHTML = statusText;
}
