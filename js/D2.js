/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const n1 = 14
const n2 = 22

if (n1 > n2) {
  console.log("n1 è il più grande")
} else {
  console.log("n2 è il più grande")
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const numeroFornito = 35

if (numeroFornito !== 5) {
  console.log("not equal")
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const numeroDivisibilePerCinque = 10

if (numeroDivisibilePerCinque % 5 === 0) {
  console.log("divisibile per 5")
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x1 = 15;
let x2 = 7;

let condizioneVerificata = false;

if (x1 === 8 || x2 === 8) {
  condizioneVerificata = true;
}
else if (x1 + x2 === 8) {
  condizioneVerificata = true;
}
else if (Math.abs(x1 - x2) === 8) {
  condizioneVerificata = true;
}

if (condizioneVerificata) {
  console.log("Per i numeri " + x1 + " e " + x2 + ": Una delle condizioni è vera.");
} else {
  console.log("Per i numeri " + x1 + " e " + x2 + ": Nessuna delle condizioni è vera.");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 20

if (totalShoppingCart > 50) {
  console.log("Il tuo carrello supera €50 hai il diritto alla spedizione gratuita")
} else {
  totalShoppingCart = totalShoppingCart + 10
  console.log("Non hai raggiunto il minimo per la spedizione gratuita. Totale ordine: €" + totalShoppingCart)
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

totalShoppingCartBlack = 60

totalShoppingCartBlack = totalShoppingCartBlack * 0.80

if (totalShoppingCartBlack > 50) {
  console.log("Il tuo carrello supera €50 hai il diritto alla spedizione gratuita. Totale con sconto €" + totalShoppingCartBlack)
} else {
  totalShoppingCartBlack = totalShoppingCartBlack + 10
  console.log("Non hai raggiunto il minimo per la spedizione gratuita. Totale ordine: €" + totalShoppingCartBlack)
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const num1 = 5
const num2 = 15
const num3 = 11

let numeri = [num1, num2, num3];

numeri.sort((a, b) => b - a);

console.log("Numeri ordinati (dal più alto al più basso):", numeri[0], numeri[1], numeri[2]);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const number = "s"

if (typeof number === 'number') {
  console.log("è un numero")
} else {
  console.log("non è un numero")
}
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const numberpari = 10

if (numberpari % 2 === 0) {
  console.log(numberpari + " è un numero pari")
} else {
  console.log(numberpari + " è un numero dispari")
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 7
if (val < 10) {
  console.log("Meno di 10");
} else if (val < 5) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

me.city = "Toronto";

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName;

console.log(me)


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

me.skills.pop();

console.log(me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numeriDaUnoADieci = [];

numeriDaUnoADieci.push(1);
numeriDaUnoADieci.push(2);
numeriDaUnoADieci.push(3);
numeriDaUnoADieci.push(4);
numeriDaUnoADieci.push(5);
numeriDaUnoADieci.push(6);
numeriDaUnoADieci.push(7);
numeriDaUnoADieci.push(8);
numeriDaUnoADieci.push(9);
numeriDaUnoADieci.push(10);

console.log(numeriDaUnoADieci)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let indiceUltimoElemento = numeriDaUnoADieci.length - 1;

numeriDaUnoADieci[indiceUltimoElemento] = 100;

console.log(numeriDaUnoADieci)
