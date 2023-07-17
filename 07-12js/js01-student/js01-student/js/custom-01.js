/*
Uždavinių sprendimui nenaudoti, masyvų, ciklų ir savo parašytų funkcijų. JavaScript funkcijas žinoma naudokite (pageidautina).
Visi random generuojami skaičiai turi būti sveikieji.
*/

/* 01.
Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(-ų)".
*/

let vardas = "Domas"
let pavarde = "Petrauskas"
let Gmetai = 2000
let metai =  new Date().getFullYear() 
console.log(`Aš esu ${vardas} ${pavarde}. Man yra ${metai - Gmetai} metai(-ų).` )

/* 02.
Naudokite funkciją Math.random(). Sukurkite du kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.
*/

let num11 = Math.round(Math.random() * 4)
let num22 = Math.round(Math.random() * 4)
console.log(num11, num22)
if (num11 == 0 || num22 == 0) {
    console.log("Dalyba is nulio negalima.")
}else if(num11 > num22) {
    console.log((num11/num22).toFixed(2))
}else {
    console.log((num22/num11).toFixed(2))
}

/* 03.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite kintąmąjį turintį vidurinę reikšmę.
*/

let numb1 = Math.round(Math.random() * 25)
let numb3 = Math.round(Math.random() * 25)
let numb2 = Math.round(Math.random() * 25)
console.log(numb1, numb2, numb3)

let largest = Math.max(numb1,numb2,numb3)
let smallest = Math.min(numb1,numb2,numb3)
let middleNum

if(numb1 != largest && numb1 != smallest ){
    middleNum = numb1
} else if (numb2 != largest && numb2 != smallest ){
    middleNum = numb2
} else if (numb3 != largest && numb3 != smallest ){
    middleNum = numb3
}else {
    middleNum = "undertermined as 2 or more numbers were equal"
}

console.log(`The middle number is ${middleNum}`)

/* 04.
Įvedami skaičiai - kr1, kr2, kr3 – kraštinių ilgiai, trys kintamieji (naudokite ​Math.random()​ funkcija nuo 1 iki 10). Parašykite JavaScript programą, kuri nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų. 
*/
let kr1 = Math.ceil(Math.random() * 10)
let kr2 = Math.ceil(Math.random() * 10)
let kr3 = Math.ceil(Math.random() * 10)
console.log(kr1,kr2,kr3)
if (kr1 + kr2 > kr3 && kr2 + kr3 > kr1 && kr1 + kr3 > kr2) {
    console.log(`galima sudaryti trikampi`)
}
  else {console.log(`negalima sudaryti trikampi`)} 


/* 05.
Sukurkite keturis kintamuosius ir ​Math.random()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
*/
let ttt = Math.round(Math.random() *2)
let nnn = Math.round(Math.random() *2)
let ddd = Math.round(Math.random() *2)
let aaa = Math.round(Math.random() *2)
console.log(ttt,nnn,ddd,aaa)
let sss = 0
let lll = 0
let hhh = 0
if (ttt==0){
    sss++
}
if (ttt==1){
    lll++
}
if (ttt==2){
    hhh++
}
if (nnn==0){
    sss++
}
if (nnn==1){
    lll++
}
if (nnn==2){
    hhh++
}
if (ddd==0){
    sss++
}
if (ddd==1){
    lll++
}
if (ddd==2){
    hhh++
}
if (aaa==0){
    sss++
}
if (aaa==1){
    lll++
}
if (aaa==2){
    hhh++
}
console.log(sss,lll,hhh)

/* 06.
Naudokite funkcija Math.random(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti  laužtiniuose skliaustuose [], 0 -  (), didesni už 0 {}.
*/

let mm = Math.floor(Math.random() * 21) - 10
let nn = Math.floor(Math.random() * 21) - 10
let pp = Math.floor(Math.random() * 21) - 10

if (mm<0){console.log(`[${mm}]`)
}
if (mm>0){console.log(`{${mm}}`)
}
if (mm=0){console.log(`(${mm})`)
}
if (nn<0){console.log(`[${nn}]`)
}
if (nn>0){console.log(`{${nn}}`)
}
if (nn=0){console.log(`(${nn})`)
}
if (pp<0){console.log(`[${pp}]`)
}
if (pp>0){console.log(`{${pp}}`)
}
if (pp=0){console.log(`(${pp})`)
}

/* 07.
Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite programą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​Math.random()​ funkcija nuo 5 iki 3000.
*/
const kainaVienam = 1;
const kiekis = Math.floor(Math.random() * (3000 - 5 + 1) + 5); // Sugeneruojamas žvakių kiekis nuo 5 iki 3000
let bendraKaina = kiekis * kainaVienam;

if (bendraKaina > 2000) {
  const nuolaida = bendraKaina * 0.04;
  bendraKaina -= nuolaida;
} else if (bendraKaina > 1000) {
  const nuolaida = bendraKaina * 0.03;
  bendraKaina -= nuolaida;
}

console.log("Perkama", kiekis, "žvakės.");
console.log("Bendra kaina:", bendraKaina, "EUR.");



/* 08.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Tada aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite. Rezultatus apvalinkite iki sveiko skaičiaus.
*/
let skaicius1 = Math.floor(Math.random() * 101); 
let skaicius2 = Math.floor(Math.random() * 101);
let skaicius3 = Math.floor(Math.random() * 101);

let vidurkis = (skaicius1 + skaicius2 + skaicius3) / 3;
let vidurkisBeRibu = 0;
let skaiciuKiekisBeRibu = 0;

if (skaicius1 >= 10 && skaicius1 <= 90) {
  vidurkisBeRibu += skaicius1;
  skaiciuKiekisBeRibu++;
}

if (skaicius2 >= 10 && skaicius2 <= 90) {
  vidurkisBeRibu += skaicius2;
  skaiciuKiekisBeRibu++;
}

if (skaicius3 >= 10 && skaicius3 <= 90) {
  vidurkisBeRibu += skaicius3;
  skaiciuKiekisBeRibu++;
}

if (skaiciuKiekisBeRibu > 0) {
  vidurkisBeRibu /= skaiciuKiekisBeRibu;
}

console.log("Vidurkis:", Math.round(vidurkis));
console.log("Vidurkis be ribų:", Math.round(vidurkisBeRibu));



/* 09.
Padarykite skaitmeninį laikrodį, rodantį valandas, minutes ir sekundes. Valandom, minutėm ir sekundėm sugeneruoti panaudokite funkciją Math.random(). Sugeneruokite skaičių nuo 0 iki 300. Tai papildomos sekundės. Skaičių pridėkite prie jau sugeneruoto laiko. Atspausdinkite laikrodį prieš ir po sekundžių pridėjimo ir pridedamų sekundžių skaičių.
*/

let valandos = Math.floor(Math.random() * 24); 
let minutes = Math.floor(Math.random() * 60); 
let sekundes = Math.floor(Math.random() * 60); 


let papildomosSekundes = Math.floor(Math.random() * 301);


sekundes += papildomosSekundes;


if (sekundes > 59) {
  let laikoPersirinkimas = Math.floor(sekundes / 60); 
  sekundes = sekundes % 60; 
  minutes += laikoPersirinkimas;

  
  if (minutes > 59) {
    let laikoPersirinkimas = Math.floor(minutes / 60);
    minutes = minutes % 60; 
    valandos += laikoPersirinkimas; 

    if (valandos > 23) {
      valandos = valandos % 24;
    }
  }
}

// Atspausdiname laikrodį prieš ir po sekundžių pridėjimo ir pridedamų sekundžių skaičių
console.log("Laikas prieš pridėjimą:", valandos + ":" + minutes + ":" + sekundes);
console.log("Pridėtos sekundės:", papildomosSekundes);
console.log("Laikas po pridėjimo:", valandos + ":" + minutes + ":" + sekundes);



/* 10.
Naudokite funkciją Math.random(). Sugeneruokite 6 kintamuosius su atsitiktinėm reikšmėm nuo 1000 iki 9999. Atspausdinkite reikšmes viename string'e, išrūšiuotas nuo didžiausios iki mažiausios, atskirtas tarpais. Naudoti ciklų ir masyvų NEGALIMA.
*/

let skaicius11 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000); 
let skaicius22 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
let skaicius33 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
let skaicius44 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
let skaicius55 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
let skaicius66 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);

let reiksmes = [skaicius11, skaicius22, skaicius33, skaicius44, skaicius55, skaicius66];

let stringas = reiksmes.sort((a, b) => b - a).join(" ");

console.log(stringas);
