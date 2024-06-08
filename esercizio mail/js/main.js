// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.


// creazione array con email invitati
const mailList = ["luca@mail", "pippo@mail", "marco@mail", "simone@mail", "andrea@mail"];


// input per inserimento email utente
let userMail = prompt("inserisci la tua mail");

// dichiaro variabile container
const divContainer = document.querySelector(".container");


// aggiunta ciclo valori array

for (let i = 0; i < mailList.length; i++) {

    
    let mailListValue = mailList[i];

    // inserimento if 
    // se email presente messaggio positivo
    if (userMail === mailListValue) {
        
        let result = "ammesso";

        // creo elemento e porto risultato in pagina
        const element = `<p>${result}</p>`;
        divContainer.innerHTML += element;

        console.log(result);

        // altrimenti messaggio negativo
    } else {

        let alternativeResult = "non ammesso";

        // creo elemento e porto risultato in pagina
        const element = `<p>${alternativeResult}</p>`;
        divContainer.innerHTML += element;

        console.log(alternativeResult);
    } 

    
}







