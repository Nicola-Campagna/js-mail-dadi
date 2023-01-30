// TRACCIA
// Mail:
// Chiedi all'utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull'esito del controllo.

// PASSAGGI:

// CHIEDERE all'utente la sua email:
const insertMail = (prompt("inserire mail"));

// ARRAY CON TUTTE LE MAIL CHE HANNO ACCESSO
const mails = [
    "nicola@gmail.com",
    "ciao@gmail.com",
    "ciao123@gmail.com"
]

let validMail = false;

// Ciclo+Array
for (let i = 0; i < mails.length; i++) {
    const currentMail = mails[i];
    // console.log(currentMail);
    // SE nell'array una mail è uguale alla mail inserita (email da false diventa true)
    if (currentMail == insertMail) {
        validMail = true;
    }
}
// SE l'email non è corretta (quindi falsa) : nega l'accesso
if (validMail == false) {
    console.log("accesso vietato");
}
// Altrimenti: consenti l'accesso
else {
    console.log("accesso consentito");
}
