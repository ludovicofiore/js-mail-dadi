// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.


// creazione array con email invitati
const mailList = ["luca@mail", "pippo@mail", "marco@mail", "simone@mail", "andrea@mail"];


// input per inserimento email utente
let userInput = document.querySelector(".mail-input")


// dichiaro variabile container
const divContainer = document.querySelector(".container");

// gestione attività del bottone al click

const myButton = document.querySelector(".input-button");

myButton.addEventListener("click",
    function(){

        // value input 
        let userMail = userInput.value;


        // condizione di partenza
        let result = false 


        // aggiunta ciclo valori array

        for (let i = 0; i < mailList.length; i++) {

            
            let mailListValue = mailList[i];

            // inserimento if valore corrispondente
            if (userMail === mailListValue) {
                
                result = true;

            }
            
        }


        // if fuori dal ciclo con output
        if (result === false) {

             const element = `<p>non ammesso</p>`;

            divContainer.innerHTML += element;
        } else {

            const element = `<p>ammesso</p>`;
            divContainer.innerHTML += element;

        }
        

    }
)





