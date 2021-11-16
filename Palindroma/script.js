// Palidroma Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

const parola = prompt('inserisci una parola');

function palindroma(word){
    for(let i = 0; i < word.length / 2 ;i++){
        if (word[i] != word[word.length-1-i]){
            return false;
        }
    }
    return true;
}


if(palindroma(parola)){
    console.log('la parola è palindroma');
}else{
    console.log('la parola NON è palindroma');
}