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

const nrTel=723532975;
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

if (lungime.includes('stra')){                    //      includes()
    console.log('valoarea constantei lungime contine "stra"');
}else{
    console.log('valoarea constantei lungime NU contine "stra"');
}

if (lungime.startsWith('aces')){                  //      startsWith()
    console.log('valoarea constantei lungime incepe cu "aces"');
}else{
    console.log('valoarea constantei lungime NU incepe cu "aces"');
}

if (lungime.endsWith('ing')){                    //        endsWith()
    console.log('valoarea constantei lungime se termina cu "ing"');
}else{
    console.log('valoarea constantei lungime NU se termina cu "ing"');
}

console.log(lungime.slice(0,4));                //   slice()  -- se vor extrage caracterele 0,1,2 si 3
console.log(lungime.slice(4));//se vor extrage toate caracterele incepand cu 4

console.log(lungime.toLowerCase());
console.log(lungime.toUpperCase());

const lung=lungime.replace('Acesta','Asta');   //    replace()   inlocuieste un substrig cu altul
console.log(lung);
console.log(lungime.replace('Acesta','Aista'));
console.log(lungime.indexOf('S'));         //       indexOf()       gaseste indexul lui S in stringul constantei "lungime"



                                                // de aici incepe zona de ARRAYS

const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
console.log(shopping);
const matrice = [1,2,3,'adi',shopping,[4,5,6]];
console.log(matrice);
console.log(shopping[0]);
shopping[0]='pizza';           // modifica valoarea unui element din array
console.log(shopping[0]);
console.log(matrice[4][1]);
console.log(shopping.indexOf('cheese'));      //   indexOf()    returneaza indexul(pozitia) la care se afla un element in cadrul unui array (indexarea incepe de la zero)

shopping.push('onion','melon');               //   push()       adauga un element la sfarsitul unui ARRAY
shopping.unshift('paine');                    //   unshift()    adauga un element la inceputul unui ARRAY

shopping.pop();                               //   pop()        sterge ultimul element dintr-un ARRAY
shopping.shift();                             //   shift()      sterge primul  element dontr-un ARRAY
shopping.splice(2,1);                         //   splice()     sterge elemente din continutul unui ARRAY specificand indexul de la care sterge,
                                              //                       si numarul de elemente (in acest caz un element de la indexul 2)      -- slice() extrage si splice() sterge
console.log(shopping);                        

for (product of shopping){                    // for..of acceseaza fiecare element din ARRAY(matrice)
    console.log(product);
}

const arie=[2,3,4,5];
function dublare(arie){
    return arie*2;
}
const arieDublata=arie.map(dublare);         //    map()      aplica functia dublare la fiecare element din arie
console.log(arieDublata);

console.log(shopping);

function filtrare(shopping){
    return shopping.length>5;                  //     return   reprezinta rezultatul conditiei: lungimea mai mare decat 5
}
const shoppingLung=shopping.filter(filtrare);   //    filter()    aplica functia filtrare la fiecare element din arie si filtreaza doar elementele care indeplinesc conditia functiei (lungimea elementului este mai mare decat 5)
console.log(shoppingLung);

const numere=[3,5,8,4,9,11,14];
console.log('numere: ',numere);
const numerePare=numere.filter(function(numar){
    if(numar%2===0){return numar}
});
console.log('numere pare: ',numerePare);


//Converting between strings and arrays:
const data = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
const cities=data.split(',');                  //    split()    ia stringul atribuit constantei data si il imparte la fiecare virgula in substringuri atribuite constantei cities formand o arie (array)
console.log(data);
console.log(cities);
const dataNou=cities.join(',');                //    join()     este inversul functiei split(); ia elementele ariei si le imbina intr-un string(sir) fiind delimitate de operatorul definit intre parantezele functiei join()
console.log(dataNou);

const arieJoin=arie.join('--');
console.log(arieJoin);




const myArray = [ "Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri" ];
for (nume of myArray){
    let index=myArray.indexOf(nume);
    myArray[index]=`${nume} (${index})`;
}
console.log(myArray);


//Find the index of the "Eagles" item, and use that to remove the "Eagles" item.
//Make a new array from this one, called eBirds, that contains only birds from the original array whose names begin with the letter "E". 
//Note that startsWith() is a great way to check whether a string starts with a given character.
//If it works, you should see "Emus,Egrets" appear in the page.
const birds = [ "Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets" ];
console.log(birds);
let index=birds.indexOf('Eagles');
console.log(index);
birds.splice(index,1);
console.log(birds);

function select(birds){
    return birds.startsWith('E');
}
let eBirds=birds.filter(select);
console.log(eBirds);

const grades=[10,8,13];
grades.forEach(                                      //    array.forEach(callback) aplica o functie/conditie pentru fiecar element al unui array
    function (grades){
        grades+=1;                                   //    callback function
        console.log(grades);
}
);

let sum=0;
function insumareGrades(grades){
grades.forEach(function(grade){                       //    forEach() - callback function              array.filter(callback)
    sum = sum+grade;
    console.log(grade);
});
return sum;
}
console.log(insumareGrades([10,20,30,40]));

const finds=['Adi','Edi','Andrea'];
const findEdi=finds.find(function(cop){               //    array.find(callback)   este o metoda similara cu filter doar ca aplica conditia functiei callback doar pana la primul element care indeplineste conditia functiei (true) 
    return cop==='Edi';
});
console.log(findEdi);