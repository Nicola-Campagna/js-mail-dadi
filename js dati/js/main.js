// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// PASSAGGI:
// generatore n random da 1 a 6
const randomNumberPc = Math.floor(Math.random() * 6 + 1);
const randomNumberUser = Math.floor(Math.random() * 6 + 1);
// console.log(randomNumber);

// SE il Pc ha il n > di user: Pc vince
if (randomNumberPc > randomNumberUser) {
    console.log("PC HA VINTO con il numero " + randomNumberPc);
}
// ALTRIMENTI SE il n di Pc è = al n User : pareggio
else if (randomNumberPc >= randomNumberUser) {
    console.log("PAREGGIO");
}
// ALTRIMENTI se il n di pc è < al n di user: perde
else {
    console.log("USER HA VINTO con il numer " + randomNumberUser)
}
