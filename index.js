let score = 0;

const button = document.getElementById("btn");

function scoreChange() {
    score = score + 1;
    console.log(score);
}

button.addEventListener("click", scoreChange);
