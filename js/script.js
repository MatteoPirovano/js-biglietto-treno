// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km);
// va applicato uno sconto del 20% per i minorenni;
// va applicato uno sconto del 40% per gli over 65.

var chilometri = prompt('Quanti chilometri desideri fare?');
console.log(chilometri);
var anni = prompt('Quanti anni hai?');
var prezzoAlChilometro = 0.21;
var minorenni = 18;
var anziani = 65;
var sconto1 = 20;
var sconto2 = 40;
var prezzoScontanto;
var prezzo;
prezzo = chilometri * prezzoAlChilometro;

if (anni < minorenni) {
  prezzoScontantosconto = prezzo - ((prezzo * sconto1) / 100);
  document.getElementById('sconto').innerHTML = prezzoScontantosconto;
} else if (anni > anziani) {
  prezzoScontantosconto = prezzo - ((prezzo * sconto2) / 100);
  document.getElementById('sconto').innerHTML = prezzoScontantosconto;
} else {
  document.getElementById('sconto').innerHTML = prezzo;
}
