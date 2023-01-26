// TRACCIA
// Mail
// Chiedi all'utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull'esito del controllo.

// PASSAGGI:

// CHIEDERE all'utente la sua email:
let insertMail = (prompt("inserire mail"));

// ARRAY CON TUTTE LE MAIL CHE HANNO ACCESSO
const userAllMails = [
    "nicola@gmail.com",
    "hello@gmail.com",
    "ciao123@gmail.com"
]

// ciclo+array:

for (let i = 0; i < userAllMails.length; i++) {
    const validMail = userAllMails[i];
    // console.log(currentMail);
    // const currentMail = userAllMails[i];

    // SE non combacia mai riprova
    if (insertMail = validMail) {
        console.log("accesso verificato");
        alert("accesso verificato");
    }
    // SE LA MAIL E' IDENTICA AD ALMENO UNA MAIL ALL'INTERNO DELL'ELENCO DI TUTTE LA MAIL , stampa messaggio e acceddi:
    else {
        let insertMail = (prompt("inserire mail"));
        alert("accesso vietato");
        console.log("accesso vietato");
    }

}






