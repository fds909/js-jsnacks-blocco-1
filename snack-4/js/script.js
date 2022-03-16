/*
    Snacks 4
    In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
    chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa
*/

const invitati = ["Marco Bruni", "Sergio Rossi", "Elisa Verdi"];

// innput nome utente
const userName = prompt("Qual è il tuo nome");
let nameFound = false;

for (let i = 0; (i < invitati.length) && (nameFound == false); i++) {
    if (invitati[i] === userName) {
        nameFound = true;
    }
}

if (nameFound) {
    alert("Puoi partecipare alla festa.");
} else {
    alert ("Non sei tra gli invitati. Non puoi partecipare alla festa.")
}