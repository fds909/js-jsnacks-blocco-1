/*
    Snacks 5
    Crea un array vuoto.
    Chiedi per 6 volte all’utente di inserire un numero,
    se è dispari inseriscilo nell’array
*/

const odds = [];

// richiesta numeri all'utente
for (let i = 0; i < 6; i++) {
    let num = prompt("Inserisci un numero");
    if (num % 2 == 1) {
        odds.push(num);
    }
}

// output
console.log(odds);
for (let i = 0; i < odds.length; i++) {
    document.getElementById("odds").innerHTML += `<li>${odds[i]}</li>`;
}