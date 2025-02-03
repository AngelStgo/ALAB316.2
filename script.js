let randomNumber, attemptsLeft;
let guessedNumbers = new Set(); // typed numbers


    randomNumber = Math.floor(Math.random() * 100) + 1; //  random number from 1-100
    attemptsLeft = 8;
    guessedNumbers.clear();

    window.alert("Guess the Number Game!\nYou have 8 attempts to guess The Number between 1 - 100.");
    playRound();


function playRound() {
    if (attemptsLeft === 0) {
        window.alert(`Oh nourrr, you lost :(\n The correct number was ${randomNumber}.`);
        return;
    }

    let userGuess = window.prompt(`You have ${attemptsLeft} attempts left.\nEnter a number between 1 and 100:`);

    // if the game gets cancelled
    if (userGuess === null) {
        window.alert("Oops...Refresh the page to play again.");
        return;
    }

    userGuess = parseInt(userGuess);

    // if not typed a number
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        window.alert("Invalid input! Please enter a NUMBER between 1 and 100.");
        playRound();
        return;
    }

    // Check if number was already typed
    if (guessedNumbers.has(userGuess)) {
        window.alert("welppp, You already used this number.");
        playRound();
        return;
    }

    // Mark the typed number
    guessedNumbers.add(userGuess);
    attemptsLeft--;

    
    // const userIncorrectNumber = [];
    // let divNumber = document.createElement("div");
    // let displayNumber = document.createElement("h2")
    // divNumber.appendChild(displayNumber);

    // guess message for typed numbers
    if (userGuess === randomNumber) {
        window.alert(`Yeyyyy! You got the correct number: ${randomNumber}.`);
    } else if (userGuess < randomNumber) {
        window.alert(`oohh Too Low! Do it again.`);
        playRound();
    } else {
        window.alert(`Ok, too High... Try another one.`);
        h2.textContext =("");
        playRound();
    }
    
}



        //! attemp to use a table, but I can't get it yet :,(

// const div = document.createElement("div")
// const h1 = document.createElement("h1")
// // div.appendChild("h1");
// h1.textContent =`Guess the Number!`;

// // trying to recreate table
// const arrays = Array(100).fill(1).map((n, i) => n + i)

// const app = document.getElementById("app");
// const table = document.createElement("table");
// const rows = 10;
// const cols = 10;

// let index = 0;

// for (let r = 0; r < rows; r++) {
//   const tr = document.createElement("tr");

//   for (let c = 0; c < cols; c++) {
//     const td = document.createElement("td");
//     td.textContent = arrays[index];
//     index++;
//     tr.appendChild(td);
// }
// table.appendChild(tr);
// };

// app.appendChild(table);


