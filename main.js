let listaNumeri = [];

for(let i = 0; i < 5; i++){
    let numero = randomRange(1, 99);

    if(!listaNumeri.includes(numero)){
        listaNumeri.push(numero);
    }

    document.getElementById("number-container").innerHTML += listaNumeri[i]+ ",";
}

console.log(listaNumeri);













//funzione che torna un numero random di un range predefinito
function randomRange(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}