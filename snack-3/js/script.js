/*
    Il software deve chiedere per 10 volte all'utente di inserire un numero.
    Il programma stampa la somma di tutti i numeri inseriti.
*/
let sum = 0;

for (let i = 0; i < 10; i++) {
    let n = parseInt(prompt("Inserisci un numero"));
    sum += n;
}

console.log("La somma di tutti i numeri è " + sum);
document.getElementById("sum").innerHTML = `La somma di tutti i numeri è <strong>${sum}</strong>`;