// Palidroma
// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma.

const userWord = prompt('dammi un parola');
const wordReverse = reverseWord(userWord)



if (userWord == wordReverse) {
    console.log('la parola è palindroma');
} else {
    console.log('la parola non è palindroma');
}



// Funzione per invertire una parola
function reverseWord(parola) {
    let wordReverse = '';

    // parti dall'ultima lettera
    let i = parola.length - 1;

    // scrivi la parola al contrario 
    while (i >= 0) {
        wordReverse += parola[i];

        i--;
    }

    console.log(wordReverse);

    return wordReverse;

}


// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let userSelect = prompt('scegli tra pari o dispari').toLowerCase();

let i = 0;

// controllo per inserimento pari o dispari
while(userSelect != 'pari' && userSelect != 'dispari'){
    userSelect = prompt('scegli tra pari o dispari');

    i++
}

let userNumberSelect = parseInt(prompt('scegli un numero tra 1 e 5'));

while(isNaN(userNumberSelect) || userNumberSelect < 1 || userNumberSelect > 5){
    userNumberSelect = parseInt(prompt('scegli un numero tra 1 e 5'));
} 

const min = 1;
const max = 5;
const numerorandom = randomNumber(min, max);
let risultato = numerorandom + userNumberSelect;
let isEven = false;

console.log('numero utente ' + userNumberSelect);
console.log('numero pc random ' + numerorandom);
console.log('somma = ' + risultato);

evenAndOdd(risultato);

if (userSelect == 'pari' && isEven == true){
    console.log('Utente hai vinto il numero è pari');
} else if (userSelect == 'dispari' && isEven == false) {
    console.log('Utente hai vinto il numero è dispari');
} else {
    console.warn('Ha vinto il PC')
}




// Funzione numero randomico
function randomNumber(min, max) {
    number = Math.floor(Math.random() * (max - min) + min)
    return number
}

// Funzione pari e dispari
function evenAndOdd(result){
    if (result % 2 == 0){
        console.log('il risultato è pari')
        isEven = true;
    } else {
        console.log('il risultato è dispari')
    }

}