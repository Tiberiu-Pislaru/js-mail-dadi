// MAIL

// 1 chiediamo inizialmente la mail al nostro utente
const mailAddress = prompt('Ho bisogno della tua e-mail per effettuare il controllo');
// 2 controlliamo che sia nella lista delle persone che possono accedere
// 2.a creiamo una lista (array) con diverse mail al suo interno
// 2.b creiamo una variabile 'flag' che inizialmente avrà valore false
// 2.c creiamo il ciclo for e successivamente controlliamo
// se la mail fornita dall'utente si trova nella lista di mail
const listMail = ['gino22@gmail.com', 'alberto2@hotmail.com', 'gordonramsey16@icloud.com', 'barneystinson7on7@gmail.com'];
let mailFound = false;
for (i = 0; i < listMail.length; i++){
    if (mailAddress.toLowerCase() === listMail[i].toLowerCase()){
        mailFound = true;
        console.log(i);
    }
}
// 3 stampiamo un messaggio in base all'esito del controllo
if (mailFound){
    console.log('Puoi accedere al nostro sito');
}
else{
    console.log('Mi dispiace, non abbiamo nessun riscontro della sua mail nel nostro database')
}

// DADI
// 1 usiamo la funzione random di JS,
// per avere un numero che va da 1 a 6
// successivamnete con Math.floor lo trasformiano in un int
// sia umano sia computer
const humanNumber = Math.floor(Math.random() * 6) + 1;
const pcNumber = Math.floor(Math.random() * 6) + 1;

// 2 stabilire il vincitore
if (humanNumber > pcNumber){
    console.log(`The results are: human ${humanNumber} - ${pcNumber} computer`);
    console.log('The winner is: the human');
}
else if (humanNumber < pcNumber){

    console.log(`The results are: human ${humanNumber} - ${pcNumber} computer`);
    console.log('The winner is: the computer');

}else{

    console.log(`The results are: human ${humanNumber} - ${pcNumber} computer`);
    console.log('It\'s a tie');

}
