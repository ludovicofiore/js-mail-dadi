// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.


// creazione array con email invitati
const mailList = ["luca@mail", "pippo@mail", "marco@mail", "simone@mail", "andrea@mail"];


// input per inserimento email utente
let userMail = prompt("inserisci la tua mail");


// aggiunta ciclo valori array

for (let i = 0; i < mailList.length; i++) {

    // console.log(mailList[i]);
    let mailListValue = mailList[i];

    // inserimento if 

    // se email presente messaggio positivo
    if (userMail === mailListValue) {
        
        let result = "ammesso";

        document.getElementById("stato").innerHTML = result

        console.log(result);

        // altrimenti messaggio negativo
    } else {

        let result = "non ammesso";

        document.getElementById("stato").innerHTML = result

        console.log(result);
    } 

}







