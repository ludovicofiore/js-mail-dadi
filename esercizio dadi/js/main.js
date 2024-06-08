// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.


// dichiaro variabile container
const divContainer = document.querySelector(".container");


// gestione attività del bottone al click

const myButton = document.querySelector(".go-button");

myButton.addEventListener("click",
    function() {

        // genero numero casuale per utente
        let randomUser = Math.floor(Math.random() * 6) + 1;

        console.log(randomUser);


        // genero numero casuale per pc
        let randomPc = Math.floor(Math.random() * 6) + 1;

        console.log(randomPc);


        // aggiunta condizioni if

            // se numero utente maggiore numero pc
        if (randomUser > randomPc) {

            let result = "Utente vince"

            // creo elemento e porto risultato in pagina
            const element = `<h2>${result}</h2>`;
            divContainer.innerHTML += element;

            console.log("utente vince");

            // se numero utente uguale numero pc
        } else if (randomUser === randomPc) {

            let result = "Ha vinto l'amicizia"

            // creo elemento e porto risultato in pagina
            const element = `<h2>${result}</h2>`;
            divContainer.innerHTML += element;

            console.log("ha vinto l'amicizia");
        
            // se numero utente minore numero pc
        } else {

            let result = "PC vince"

            // creo elemento e porto risultato in pagina
            const element = `<h2>${result}</h2>`;
            divContainer.innerHTML += element;

            console.log("PC vince");
        }



    }
)

