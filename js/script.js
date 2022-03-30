let myName = 'Adi';
let myAge = 41;
let myPhoneNumber='0723532975';
let myMail= 'adrian.fiak@yahoo.ro';
console.log ('Nume:   ',myName);
console.log ('Varsta: ',myAge);
console.log ('Tel:    ',myPhoneNumber);
console.log ('E-mail: ',myMail);

let nume=['Adi', 'Edi', 'Florin', 'Andrea'];
console.log('Nume copil:',nume[1]);
console.log('Nume frate:',nume[2]);

let dog = { numeCaine : 'Lucky', rasa : 'Canis' }; //acesta este un obiect
console.log('Nume caine:',dog.numeCaine);
console.log('Rasa:',dog.rasa);
 
let nrMeu=500;
console.log(nrMeu, typeof nrMeu);
let nrNou='500';
console.log(nrNou, typeof nrNou);


const numar=1;//constantei i se atribuie o valoare la declarare si schimbarea acesteia rezulta intr-o eroare
console.log('numar:',numar);

const animal={ rasa:'caine'};//valoarea constantei este un obiect
console.log(animal.rasa);
animal.rasa='magar';// unei constante i se poate totusi modifica valoarea cand aceasta este un obiect si i se modifica de fapt valoarea obiectului
console.log(animal.rasa);

const myInt = 5;
const myFloat = 6.667;
const douaZecimale = myFloat.toFixed(2);
console.log(douaZecimale);