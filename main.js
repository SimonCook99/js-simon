let numberContainer = document.getElementById("number-container");

//array che conterrà la lista dei numeri random
let listaNumeri = [];




let i = 0;

//ciclo while che aggiunge i 5 numeri nel vettore e aggiorna l'html
while(i < 5){
    let numero = randomRange(1, 99);
    
    if(!listaNumeri.includes(numero)){
        listaNumeri.push(numero);

        if(i == 4){
            numberContainer.innerHTML += listaNumeri[i];
        }else{
            numberContainer.innerHTML += listaNumeri[i]+ ",";
        }

        i++;

    }
}


console.log(listaNumeri);


setTimeout(inserisciNumeri, 3000);


//funzione che verrà chiamata dopo i 30 secondi d'attesa
function inserisciNumeri(){
    numberContainer.innerHTML = "";

    //array che conterrà i numeri che l'utente indovinerà
    let numeriIndovinati = [];

    for(let i = 0; i < 5; i++){
        let valore = parseInt(prompt("Inserisci un numero"));
        console.log(valore);

        while(isNaN(valore)){
            valore = prompt("Inserisci un numero VALIDO!!!");
        }

        if(listaNumeri.includes(valore)){
            numeriIndovinati.push(valore);
        }

        /* if(numeriIndovinati.includes(valore)){
            alert("VALORE GIA' PRESENTE");
        } */

    }

    console.log(numeriIndovinati);

    //ultimo ciclo che scorre l'array dei numeri indovinati, e aggiorna l'html per mostrare all'utente
    for(let j = 0; j < numeriIndovinati.length; j++){
        if(j == numeriIndovinati.length - 1){
            numberContainer.innerHTML += numeriIndovinati[j];
        }else{
            numberContainer.innerHTML += numeriIndovinati[j] + ",";   
        }
    }
    
    
}

//funzione che torna un numero random di un range predefinito
function randomRange(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}