// NOME
const nome = prompt('Qual è il tuo nome?');
console.log('Nome:', nome);

// COGNOME
const cognome = prompt('Qual è il tuo cognome?');
console.log('Cognome:', cognome);

// COLORE PREFERITO
const colore = prompt('Qual è il tuo colore preferito?');
console.log('colore:', colore);

// GENERAZIONE PASSWORD
const password = nome + cognome + colore + "130";

// COMUNICAZIONE PASSWORD
document.getElementById('pass').innerHTML = 'La tua password è: ' + password;