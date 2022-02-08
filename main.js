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

    //leggero timeout di 250 millisecondi per permettere ai numeri random di scomparire prima di chiedere i prompt
    setTimeout(function(){
        for(let i = 0; i < 5; i++){
            let valore = parseInt(prompt("Inserisci un numero"));
            console.log(valore);
    
            //riassegno il valore qualora venga inserita una stringa
            valore = controllaValidità(valore);

            //questo while controlla se il valore inserito, non sia già stato inserito in precedenza
            while(numeriIndovinati.includes(valore)){
                valore = parseInt(prompt("VALORE GIA' PRESENTE, inserisci un alro numero"));
                valore = controllaValidità(valore);
            }
    
            if(listaNumeri.includes(valore)){
                
                if(!numeriIndovinati.includes(valore)){
                    numeriIndovinati.push(valore);
                    console.log("ho inserito il numero" + valore);
                }
                
                console.log(numeriIndovinati);
            }
    
        }
    
        if(numeriIndovinati.length < 5){
            document.getElementById("descrizione").innerHTML = "Hai indovinato " + numeriIndovinati.length + " numeri";
        }else if(numeriIndovinati.length == 5){
            document.getElementById("descrizione").innerHTML = "Hai indovinato tutti e " + numeriIndovinati.length + " i numeri, fenomenale!!!";    
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
    }, 250);
    
}


function controllaValidità(numero){
    while(isNaN(numero)){
        numero = parseInt(prompt("Inserisci un numero VALIDO!!!"));
    }

    return numero;
}


//funzione che torna un numero random di un range predefinito
function randomRange(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}