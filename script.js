//*Esercizio 1
/* 
function sommaInteri(a, b) {
    if(a === 50 || b === 50 || a + b === 50) {
        return true;
    }
    else { return false };
}

console.log(sommaInteri(60, 0)); */


//*Esercizio 2
/* function rimuoviCarattere(stringa, indice) {
    return stringa.replace(stringa[indice], "");
}
console.log(rimuoviCarattere("ciao", 1)); */

//*Esercizio 3
/* function numeriCompresi(a, b){
   if(a && b >= 40 && a && b<= 60 || a && b >= 70 && a && b <= 100)return true;
   else return false;
}
console.log(numeriCompresi(48, 100)); */
//*Esercizio 4

/* function nomiCitta(stringa){
    if(stringa.toLowerCase().includes("los") || stringa.toLowerCase().includes("new"))return stringa;
    else return false;
}
console.log(nomiCitta("neW angeles")); */
//*Esercizio 5
/*let array = [1, 3, 15, 6];
function sommaArray(array){
    let somma = 0;
    for(let i=0; i< array.length; i++){
      somma += array[i];
    }
    return somma;
}
console.log(sommaArray(array)); */
//*Esercizio 6
/* let array = [5, 7, 15, 6];
function notInclude(array){
    if(array.includes(1) || array.includes(3))return false;
    else return true;
}

console.log(notInclude(array)); */
//*Esercizio 7
/* function angoloGradi(angolo){
    switch(angolo != 0){
        case (angolo<90):
            console.log("Angolo acuto  ", angolo);
            break;
        case ((angolo>90) && (angolo<180)):
            console.log("Angolo ottuso  ", angolo);
            break;
        case (angolo = 90):
            console.log("Angolo retto  ", angolo);
            break;
        case (angolo = 180):
            console.log("Angolo piatto  ", angolo);     
            break;
        default:
            console.log("Errore");    
    }
}
console.log(angoloGradi(190)); */
//*Esercizio 8
/* function creaAcronimo(stringa){
    let parola = stringa.split(" ");
    let firstParola = "";
    for (let i = 0; i < parola.length; i++) {
       firstParola += parola[i].charAt(0);
    }
    return firstParola;
}
console.log(creaAcronimo("Hyper Text Marckup Lenguages"));
 */
//*Esercizio 9 EXTRA
/*  function caratteriDoppioni(stringa) {
  let totale = [];
  for (let i = 0; i < stringa.length; i++) {
    let carattere = stringa[i];
    let duplicato = totale.find(obj => obj.carattere === carattere);//*Find restituisce il primo elemento trovato nell'array che soddisfa la funzione di test passata come parametro
    if (!duplicato) {
      totale.push({ carattere: carattere, n: 1 });
    } else {
      duplicato.n++;
    }
  }
  let maggiore = totale.sort((a, b) => b.n - a.n)[0];
  return maggiore;
}

console.log(caratteriDoppioni("aaaahhhhhhhhhrr"));  */

//*Esercizio 10 EXTRA
/* 
function sonoAnagrammi(stringa1, stringa2) {
  // Rimuovi punteggiatura e spazi
  stringa1 = stringa1.replace(/[^\w]/g, '');
  stringa2 = stringa2.replace(/[^\w]/g, '');

  // Converti entrambe le stringhe in minuscolo
  stringa1 = stringa1.toLowerCase();
  stringa2 = stringa2.toLowerCase();

  // Ordina i caratteri delle due stringhe
  stringa1 = stringa1.split('').sort().join('');
  stringa2 = stringa2.split('').sort().join('');

  // Confronta le due stringhe
  return stringa1 === stringa2;
}


console.log(sonoAnagrammi("L a tte", "Tetal")); 
 */
//*Esercizio 11 EXTRA

/* let lista =['carenti', 'incerta', 'espatrio'];
let parola = 'carenti';

function trovaAnagrami(parola, lista){
    let anagrammi = [];
    for(let i=0; i<lista.length; i++){
        if(sonoAnagrammi(parola, lista[i])){
            anagrammi.push(lista[i]);
        }
    }
    return anagrammi;
} 

console.log(trovaAnagrami(parola, lista)); */

//*Esercizio 12  EXTRA
/* function trovaPalindroma(stringa){
    stringa = stringa.replace(/[^\w]/g, '');
    stringa.toLowerCase();
    let parola = stringa.split("").reverse().join("");
    if(stringa === parola)return true;
    else return false;
}
console.log(trovaPalindroma("ai lati d' italia")); */

//*Esercizio 13 EXTRA
/* function numeroAlContrario(numero){
    numero = numero.toString();
    let numeroContrario = numero.split('').reverse().join('');
    return numeroContrario;
}

console.log(numeroAlContrario(12345)); */


//*Esercizio 14 EXTRA
/* function scala(numero) {
    let scala = [];
    for (let i = 0; i < numero; i++) {
      scala.push("#".repeat(i + 1));
    }
    return scala;
  }
  
  console.log(scala(35)); */

//*Esercizio 15 EXTRA

/* function stringaAlContrario(stringa){
    return stringa.split("").reverse().join("");
}

console.log(stringaAlContrario("ciao"));
   */

//*Esercizio 16 EXTRA
/* let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function divideArray(array, y) {
    let result = [];
    for (let i = 0; i < array.length; i += y) {
      result.push(array.slice(i, i + y));
    }
    return result;
  }
  
  console.log(divideArray(array,2)); */


  //*Esercizio 17 EXTRA
  /* function stampaPiramide(x) {
    for (let i = 1; i <= x; i++) {
      let space = " ".repeat(x - i);
      let blocks = "#".repeat(2 * i - 1);
      console.log(space + blocks + space);
    }
  }
  
  stampaPiramide(6);
 */

//*Esercizio 18 EXTRA
/* function generaSpirale(N) {
    let matrice = [];
    for (let i = 0; i < N; i++) {
      matrice.push([]);
    }
  
    let num = 1;
    let startRow = 0;
    let endRow = N - 1;
    let startCol = 0;
    let endCol = N - 1;
  
    while (startRow <= endRow && startCol <= endCol) {
      // riga superiore
      for (let i = startCol; i <= endCol; i++) {
        matrice[startRow][i] = num++;
      }
      startRow++;
  
      // Colonna destra
      for (let i = startRow; i <= endRow; i++) {
        matrice[i][endCol] = num++;
      }
      endCol--;
  
      // riga inferiore
      for (let i = endCol; i >= startCol; i--) {
        matrice[endRow][i] = num++;
      }
      endRow--;
  
      // colonna sinistra
      for (let i = endRow; i >= startRow; i--) {
        matrice[i][startCol] = num++;
      }
      startCol++;
    }
  
    return matrice;
  }
  
  console.log(generaSpirale(4)); */

  
  