const randomNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    const userGuess = parseInt(document.getElementById("userGuessInput").value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 30) {
        document.getElementByid("message").textContent =
            "please enter a valid number between 1 and 30.";
    } else {
        if (userGuess === randomNumber) {
            document.getElementById("message").textContent = "Are you serious i said dont geuss it you bumboo but you did get it right";
        } else {
            document.getElementById("message").textContent =
                "hhahahahahahahhahahahahahahahahahahahahahahahahah your so dumb";
        }
    }
}