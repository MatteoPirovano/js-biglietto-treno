var chilometri = prompt('Quanti chilometri desideri fare?');
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
