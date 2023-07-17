/* LENGVESNI */

/* 01.
Sukurkite ciklą kuris atspausdintų 10 kartų žodį “labas”.
*/
let labas = "labas "
labas*10
console.log(labas.repeat(10))
/* 02.
Sukurkite ciklą kuris atspausdintų skaičius nuo 0 iki 9.
*/
for (let input = 0; input <= 9; input++) {
    console.log(input);
   }
/* 03.
Sukurkite masyvą su dešimt augalų pavadinimų.
*/
let Augalai = ["Pakalnutės", "Snieguolės", "Vėdrynai", "Šeivamedžiai", "Kurpelės", "Rusmenės", "Ricinmedžiai", "Žalčialunkiai", "Šunvyšnės", "Vėlyviai"];
console.log(Augalai)

/* 04.
Atspausdinkite kiekvieną 3-čio uždavinio augalą atskiroje eilutėje.
*/
Augalai.forEach(augalas => {
    console.log(augalas);
});

/* 05.
Atspausdinkite 3-čio uždavinio kiekvieną augalą pradedant nuo paskutinio, ir baigiant pirmuoju. (atvirkščias ciklas).
*/
for (let i = Augalai.length - 1; i >= 0; i--) {
    console.log(Augalai[i])
}
/* 06.
Atspausdinkite kas antrą skaičių nuo 10 iki 50 (porinius);
*/
for (let skaicius = 10; skaicius <= 50; skaicius += 2) {
    console.log(skaicius);
}
/* 07.
Atspausdinkite kas antrą skaičių nuo 10 iki 50. (porinius) Jei skaičius dalinasi iš 10 be liekanos jo nespausdinkite. ( naudokite continue.) (atspausdinti visus porinius skaičius, išskyrus tuos kurie dalinasi iš 10 be liekanos)
*/
for (let skaicius = 10; skaicius <= 50; skaicius += 2) {
    if (skaicius % 10 === 0) {
        continue;
    }
    console.log(skaicius);
}
/* 08.
Sukurkite ciklą kuris suktųsi nuo 0 iki 20. Suskaičiuokite, kiek kartų kintamasis i turėjo porinę reikšmę;
*/
let skaiciusPoru = 0;

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    skaiciusPoru++;
  }
}

console.log("Porinių reikšmių skaičius:", skaiciusPoru);
/* 09.
Suskaičiuokite kiek 3-čio uždavinio masyve yra žodžių trumpesnių nei 5 simboliai, ir kiek ilgesnių nei 7 simboliai.
*/
const zodziai = ["Pakalnutės", "Snieguolės", "Vėdrynai", "Šeivamedžiai", "Kurpelės", "Rusmenės", "Ricinmedžiai", "Žalčialunkiai", "Šunvyšnės", "Vėlyviai"];

let trumpesniNei5 = 0;
let ilgesniNei7 = 0;

for (let i = 0; i < zodziai.length; i++) {
  if (zodziai[i].length < 5) {
    trumpesniNei5++;
  }

  if (zodziai[i].length > 7) {
    ilgesniNei7++;
  }
}

console.log("Trumpesnių nei 5 simboliai:", trumpesniNei5);
console.log("Ilgesnių nei 7 simboliai:", ilgesniNei7);

/* SUNKESNI */

/* 01.
Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.  Skaičiai didesni nei 275 turi būti atspausdinti skliausteliuose” [ ] “.
*/
let skaiciaiDidesniUz150 = 0;

for (let i = 0; i < 300; i++) {
  const skaicius = Math.floor(Math.random() * 301); 

  if (skaicius > 150) {
    skaiciaiDidesniUz150++;
  }

  if (skaicius > 275) {
    console.log(`[${skaicius}]`);
  } else {
    console.log(skaicius);
  }
}

console.log("Didesnių už 150 skaičių skaičius:", skaiciaiDidesniUz150);

/* 02.
Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti.
*/
let rezultatas = "";

for (let i = 1; i <= 3000; i++) {
  if (i % 77 === 0) {
    rezultatas += i;

    if (i !== 3000) {
      rezultatas += ",";
    }
  }
}

console.log(rezultatas);
/* 03.
Nupieškite kvadratą iš “*”, kurio kraštines sudaro 10 “*”.
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
*/

const krastinesIlgis = 10;

for (let i = 0; i < krastinesIlgis; i++) {
  let eilute = "";
  for (let j = 0; j < krastinesIlgis; j++) {
    eilute += "* ";
  }
  console.log(eilute);
}