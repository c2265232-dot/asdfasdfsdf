let score = 0;

const button = document.getElementById("btn");
const scoreText = document.getElementById("scoreText");

function scoreChange() {
    score = score + 1;
    scoreText.textContent = "Score: " + score;
}

button.addEventListener("click", scoreChange);
