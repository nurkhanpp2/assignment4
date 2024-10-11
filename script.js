document.getElementById("rollButton").addEventListener("click", function() {
    const playerRoll1 = Math.floor(Math.random() * 6) + 1;
    const playerRoll2 = Math.floor(Math.random() * 6) + 1;
    const computerRoll1 = Math.floor(Math.random() * 6) + 1;
    const computerRoll2 = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dice1").src = `images/dice${playerRoll1}.png`;
    document.getElementById("dice2").src = `images/dice${playerRoll2}.png`;
    const playerSum = playerRoll1 + playerRoll2;
    const computerSum = computerRoll1 + computerRoll2;
    let resultMessage = `Your sum: ${playerSum}, Computer's sum: ${computerSum}. `;
    if (playerSum > computerSum) {
        resultMessage += "You won! 🎉";
    } else if (playerSum < computerSum) {
        resultMessage += "You lost. 😞";
    } else {
        resultMessage += "It's a draw!";
    }
    document.getElementById("result").textContent = resultMessage;
});