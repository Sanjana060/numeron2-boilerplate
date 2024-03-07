// Iteration 8: Making scoreboard functional
document.addEventListener('DOMContentLoaded', function () {
    // Initialize score
    let score = 0;
    const scoreBoard = document.getElementById('score-board');

    // Function to update score
    function updateScore(points) {
        score += points;
        scoreBoard.textContent = score;
    }

    // Increment score when the user makes a correct guess
    // Call this function whenever a correct guess is made
    function correctGuess() {
        updateScore(10); // Increment score by 10 points for a correct guess
    }

    // Decrement score when the user makes an incorrect guess
    // Call this function whenever an incorrect guess is made
    function incorrectGuess() {
        updateScore(-5); // Decrement score by 5 points for an incorrect guess
    }
});

