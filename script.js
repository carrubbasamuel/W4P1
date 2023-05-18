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
function caratteriDoppioni(stringa) {
    let totale = [];
    for (let i = 0; i < stringa.length; i++) {
      let slices = stringa.slice(i +1);
      for (let j = 0; j < slices.length; j++) {
        let lettera = slices[j];
        if (stringa[i] === lettera) {
          let obj = totale.find(obj => obj.carattere === lettera);
          if (!obj) {
            totale.push({ carattere: lettera, n: 1 });
          } else {
            obj.n++;
          }
        }
      }
    }
    return totale;
  }
  
  console.log(caratteriDoppioni("papa"));
/* 
  function caratterePiuFrequente(stringa) {
    let letteri = {};
    let maxFrequenza = 0;
    let caratterePiuFrequente = "";

    for (let i = 0; i < stringa.length; i++) {
      let carattere = stringa[i];
      if (letteri[carattere]) {
        letteri[carattere]++;
      } else {
        letteri[carattere] = 1;
      }

      if (letteri[carattere] > maxFrequenza) {
        maxFrequenza = letteri[carattere];
        caratterePiuFrequente = carattere;
      }
    }

    return caratterePiuFrequente;
  }
   console.log(caratterePiuFrequente("abbbbccc")); */
  
 

  //*Esercizio 10

/*   function stringheUguali(stringa1, stringa2){
    if(stringa.split(" ")

  } */