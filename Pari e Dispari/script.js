// Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

// utente sceglie pari o dispari

const sceltaUtente = prompt('scegli "pari" o "dispari"');
console.log(sceltaUtente);

// utente inserisce un numero da 1 a 5
const numeroUtente = parseInt(prompt('inserisci un numero da 1 a 5'));
console.log(numeroUtente);

// genero un numero random da 1 a 5 per il computer con una funzione
function generaNumero(){
    let numero = Math.floor(Math.random() * 4 ) + 1;
    return numero;
}

const numeroComp = generaNumero();
console.log(numeroComp);

// funzione che somma i due numeri per stabilire se la somma dei due numeri è pari o dispari

function pariDispari(num1, num2){
    let somma = num1 + num2;
    console.log(somma);
    if(somma % 2 == 0){
        return true;
    }
    return false;
};

//invoco la funzione

if(pariDispari(numeroUtente, numeroComp)){
    console.log('utente hai vinto!');
}else{
    console.log('utente hai perso!');
}



