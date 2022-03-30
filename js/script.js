let myName = 'Adi';
let myAge = 41;
let myPhoneNumber='0723532975';
console.log ('Nume:   ',myName);
console.log ('Varsta: ',myAge);
console.log ('Tel:    ',myPhoneNumber);

let nume=['Adi', 'Edi', 'Florin', 'Andrea'];
console.log('Nume copil:',nume[1]);

let dog = { numeCaine : 'Lucky', rasa : 'Canis' }; //acesta este un obiect
console.log('Nume caine:',dog.numeCaine);
 
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

let cifra='5';
cifra=Number(cifra)**2;//converteste valoarea cifrei din string in number
console.log(cifra);

let nr1=1;
nr1++;//creste valoarea variabilei nr1 cu 1 (increment)
nr1--;//scade valoarea variabilei nr1 cu 1 (decrement)
console.log(nr1);

let x=3;
let y=4;
x=y;//acum x=y adica va lua valoarea lui Y (4)
console.log (x);

let a=5;
a+=3;//adauga 3 la varloarea variabilei a                 a=a+3;
a-=2;//scade 2 la valoarea variabilei a                   a=a-2;
a*=2;//inmulteste valoarea variabilei a cu 2              a=a*2;
a/=3;//inparte valoarea variabilei a la 3                 a=a/3;
//in final variabila a va avea valoarea 4
console.log(a);

