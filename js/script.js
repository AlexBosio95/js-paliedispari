// Palidroma
// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma.

const userWord = prompt('dammi un parola')
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

    return wordReverse;
}