// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

// genero numero casuale per utente
let randomUser = Math.floor(Math.random() * 6) + 1;

console.log(randomUser);


// genero numero casuale per pc
let randomPc = Math.floor(Math.random() * 6) + 1;

console.log(randomPc);