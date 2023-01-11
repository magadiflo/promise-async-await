// *Task 2: Create a guessing game. (Juego de Adivinanzas)

//* User story: User can enter a number
//* User story: The system pick a random number from 1 to 6
//* User story: If user number is equal to a random number, give user 2 points
//* User story: If the user number is different from the random number by 1,
//* give the user 1 point, otherwise, give the user 0 points.
//* User story: User can decide to play the game as long as they want to

const enterNumber = () => {
    return new Promise((resolve, reject) => {
        const userNumber = Number(window.prompt('¿Ingrese un número entre (1-6) e inclusive?'));
        const randomNumber = Math.floor(Math.random() * 6 + 1);

        if (isNaN(userNumber)) {
            reject(new Error('Tipo de entrada incorrecto'))
        }

        if (userNumber === randomNumber) {
            resolve({ points: 2, userNumber, randomNumber });

        } else if (userNumber + 1 === randomNumber || userNumber - 1 === randomNumber) {
            resolve({ points: 1, userNumber, randomNumber });

        } else {
            resolve({ points: 0, userNumber, randomNumber });
        }
    });
};

const continueGame = () => {
    return new Promise((resolve) => { //* Como no usamos el reject, podemos no escribir el parámetro reject
        if (window.confirm("¿Quieres continuar?")) {
            resolve(true);
        } else {
            resolve(false);
        }
    });
}

//** Método más largo */
//* const handleGuess = () => {
//*     enterNumber()
//*         .then(result => {
//*             alert(`Dice: ${result.randomNumber}, Tú dijiste: ${result.userNumber}, entonces tienes ${result.points} puntos`);

//*             continueGame().then(result => {
//*                 if (result) {
//*                     handleGuess();
//*                 } else {
//*                     alert('Juego finalizado!');
//*                 }
//*             });
//*         })
//*         .catch(error => alert(error));
//* }

//** Método refactorizado usando async - await */
const handleGuess = async () => {
    try {
        const result = await enterNumber();
        alert(`Dice: ${result.randomNumber}, Tú dijiste: ${result.userNumber}, entonces tienes ${result.points} puntos`);

        const isContinue = await continueGame();
        if (isContinue) {
            handleGuess();
        } else {
            alert('Juego finalizado!');
        }
    } catch (error) {
        alert(error)
    }
}

const start = () => {
    handleGuess();
};

start();