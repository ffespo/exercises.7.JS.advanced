/*
In questo esercizio dato un array di studenti:
Utilizza forEach per stampare i nomi degli studenti.
Utilizza find per trovare uno studente con un voto superiore a 90.
Utilizza reduce per calcolare la media dei voti degli studenti.
Utilizza map per creare un nuovo array contenente i nomi degli studenti in maiuscolo.
Utilizza filter per trovare gli studenti con voti superiori a 85.
*/
const studenti = [
  { nome: "Alice", voto: 95 },
  { nome: "Bob", voto: 88 },
  { nome: "Carol", voto: 76 },
  { nome: "David", voto: 92 },
  { nome: "Eve", voto: 84 },
];

// Stampa i nomi degli studenti
function stampaNomi(studenti) {
  studenti.forEach((studente) => {
    console.log(studente.nome);
  });
}
stampaNomi(studenti);

// Trova uno studente con un voto superiore a 90
function trovaStudenteVotoAlto(studenti) {
  const studente = studenti.find((studente) => studente.voto > 90);
  return studente;
}
const studenteVotoAlto = trovaStudenteVotoAlto(studenti);
console.log(studenteVotoAlto);

// Calcola la media dei voti degli studenti
function calcolaMediaVoti(studenti) {
  const sommaVoti = studenti.reduce((acc, studente) => acc + studente.voto, 0);
  const media = sommaVoti / studenti.length;
  return media;
}
const mediaVoti = calcolaMediaVoti(studenti);
console.log(mediaVoti);

// Crea un nuovo array contenente i nomi degli studenti in maiuscolo
function nomiMaiuscolo(studenti) {
  const nomi = studenti.map((studente) => studente.nome.toUpperCase());
  return nomi;
}
const nomiStudentiMaiuscolo = nomiMaiuscolo(studenti);
console.log(nomiStudentiMaiuscolo);

// Trova gli studenti con voti superiori a 85
function trovaStudentiVotoAlto(studenti) {
  const studentiVotoAlto = studenti.filter((studente) => studente.voto > 85);
  return studentiVotoAlto;
}
const studentiVotoAlto = trovaStudentiVotoAlto(studenti);
console.log(studentiVotoAlto);
