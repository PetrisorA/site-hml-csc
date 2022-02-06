// Variabile
var varibailaMea;

// Definiri noi variabile
let variabilaMea2 = 1;
const variabilaConstanta = 1;

// Defk krea unor variabile goale
let unu, doi, trei;

// Nedefinit si null
let nedefinit = undefined;
let nul = null;

let number = 123; //Numar
let text = 'text'; //Text
let boolean = true; //Boolean

// Array
let lists = [1, 2, 'trei'];

// Acecsarea elementelor dintr-o lista
console.log(lists);
console.log(lists.length);
console.log(lists[0]); //Acceseaza primul element din lista

// Obiecte
let obiect = {
    nume: 'Petrisor',
    varsta: '12'
}

// Lipire text
let textDoi = 'inca un text';

let textLipit = text + textDoi;
console.log(textLipit)

// Operatii matematice
let adunare = 2 + 2;
let scadere = 2 - 2;
let inmultire = 2 * 2;
let impartire = 2 / 2;

// Increment
adunare++;
// Decrement
adunare--;

// Comnditionale
if (2 < 1 ) {
    console.log('adevarat')
}

if ( 1 < 2) {
    //
} else  {
    // Daca nu e adevarat
}

// Operatori logici
// SI (&&)
if (1 < 3 && 3 > 5) {

}

// Sau (||)
if (1 < 3 || 3 > 5 ) {

}

// NOT 
if (1 != 3) {

}  

// Functii
function AdunaDoi(a, b) {
    console.log(a + b)
}

AdunaDoi(2, 6)

// Secunde in ora
function secundeInOra(ora) {
    const minInOra = 60;
    const secInMin = 60;
    const totalMin = ora * minInOra;
    return totalMin * secInMin;
}

console.log(secundeInOra(24))

// Selectoare DOM (Document Object Model)
const  fereastraBrowser = window;
const documentPagina = window.document;

console.log(documentPagina.body);

// Selectare element dupa ID
const 

selectareID = document.getElementById('titlu');

// Selectare element dupa clasa
const selectareClasa = document.getElementsByClassName
('paragraf')

// Selector tip CSS
const paragraf = document.querySelector('paragraf');

// Varsta in secunde
function varstaInSecunde(varsta){
    const zileInAn = 365;
    const secInAn = secundeInOra(24) * zileInAn;
    return varsta * secInAn;
}

// Selectam butonul cu ID calculeaza
const buton = document.querySelector('#calculeaza');

buton.addEventListener('click', function() {
    const input = document.querySelector('#varsta').value;

    let raspuns = varstaInSecunde(input);
    window.alert(raspuns)
})

function adaugaParagraf() {
    // Am creat un nou element tip p
    const newP = document.createElement("p");
    newP.textContent = "Un nou paragraf";

    // Selectam div-ul cu id add-paragraf
    const addP = document.querySelector("#add-paragraf");
    addP.append(newP);
}