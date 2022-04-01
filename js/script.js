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

let c=5;
c+=3;//adauga 3 la varloarea variabilei a                 c=c+3;
c-=2;//scade 2 la valoarea variabilei a                   c=c-2;
c*=2;//inmulteste valoarea variabilei a cu 2              c=c*2;
c/=3;//inparte valoarea variabilei a la 3                 c=c/3;
//in final variabila a va avea valoarea 4
console.log(c);


                                                        // de aici incepe partea de texte


const txt='I\'ve been there!';
console.log(txt);

const numele='Adrian';
const bunvenit=`Bine ai venit ${numele} !`;//In acest caz (concatenate strings) particularitatea este utilizarea ghilimelelor de tipul backtick characters (``)
console.log(bunvenit);
console.log("Bine ai venit "+numele+" !");
console.log(`Bine ai venit ${numele} !`);

const sir='123';
const sirNr=Number(sir);//defineste o noua constanta la care atribuie valoarea constantei vechi si o modifica din sir(string) in numar
console.log(sirNr,typeof sirNr);

const nrTel=0723532975;
const txtTel=nrTel.toString();//defineste o noua constanta la care atribuie valoarea constantei vechi si o modifica din numar in sir(string)
console.log(txtTel,typeof txtTel);

const melodie='The Unforgiven';
const nota=9;
const notaMax=10;
const rez=`Imi place melodia "${melodie}".
Ii acord un scor de ${nota/notaMax*100}%`;//including expresion in strigs (multiline strings - functioneaza si cu \n)
console.log(rez);

const lungime='Acesta este un STRING';
const nrCar=lungime.length;
console.log(nrCar);
console.log(lungime[lungime.length-2]);//din valoarea variabilei "lungime" va cauta penultima pozitie din cadrul stringuli

if (lungime.includes('stra')){//includes()
    console.log('valoarea constantei lungime contine "stra"');
}else{
    console.log('valoarea constantei lungime NU contine "stra"');
}

if (lungime.startsWith('aces')){//startsWith()
    console.log('valoarea constantei lungime incepe cu "aces"');
}else{
    console.log('valoarea constantei lungime NU incepe cu "aces"');
}

if (lungime.endsWith('ing')){//endsWith()
    console.log('valoarea constantei lungime se termina cu "ing"');
}else{
    console.log('valoarea constantei lungime NU se termina cu "ing"');
}

console.log(lungime.slice(0,4));//   slice()  -- se vor extrage caracterele 0,1,2 si 3
console.log(lungime.slice(4));//se vor extrage toate caracterele incepand cu 4

console.log(lungime.toLowerCase());
console.log(lungime.toUpperCase());

const lung=lungime.replace('Acesta','Asta');//replace()   inlocuieste un substrig cu altul
console.log(lung);
console.log(lungime.replace('Acesta','Aista'));
console.log(lungime.indexOf('S'));         //       indexOf()       gaseste indexul lui S in stringul constantei "lungime"


