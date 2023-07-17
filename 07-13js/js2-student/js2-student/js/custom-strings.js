/* 01.
Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus (Jonas Jonaitis). Atspausdinti trumpesnį stringą.
*/
let Leo = "Leonardo"
let Dic = "Dicaprio"
if (Leo.length > Dic.length){
    console.log(Leo)
} else {
    console.log(Dic)
}

/* 02.
Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Vardą atspausdinti tik didžiosiom raidėm, o pavardę tik mažosioms. (LEONARDO dicaprio)
*/
let Vin = "Vin"
let Diesel = "Diesel"

console.log(Vin.toUpperCase() , Diesel.toLocaleLowerCase())



/* 03.
Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš pirmų vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.
*/
let vardas = "Johnny";
let pavarde = "Depp";

let pirmosRaides = vardas[0] + pavarde[0];

console.log(pirmosRaides);


/* 04.
Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.
*/



let paskutinesRaides = vardas.slice(-3) + pavarde.slice(-3);

console.log(paskutinesRaides);

/* 05.
Sukurti kintamąjį su stringu: “An American in Paris”. Jame visas “a” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  Rezultatą atspausdinti.
*/

let zodziai = "An American in Paris"
let pakeistas = zodziai.replaceAll("A","*").replaceAll("a","*")
console.log(pakeistas)

/* 06.
Sukurti kintamąjį su stringu: “An American in Paris”. Jame ištrinti visas balses. Rezultatą atspausdinti. Kodą pakartoti su stringais: “Breakfast at Tiffany's”, “2001: A Space Odyssey” ir “It's a Wonderful Life”.
*/
let zodziai1 = ["An American in Paris", "Breakfast at Tiffany's", "2001: A Space Odyssey","It's a Wonderful Life"]
  

for (let i = 0 ;  i < zodziai1.length; i++) {
    pakeistas = zodziai1[i].replaceAll("A","").replaceAll("a","").replaceAll("E","").replaceAll("e","").replaceAll("I","").replaceAll("i","").replaceAll("Y","").replaceAll("y","").replaceAll("O","").replaceAll("o","").replaceAll("U","").replaceAll("u","")
    console.log(pakeistas)
}

/* 07.
Stringe, kurį generuoja toks kodas: "Star Wars: Episode "+ " ".repeat( Math.ceil(Math.random() * 10))+(Math.ceil (Math.random() * 7)+1) + " - A New Hope"; Surasti ir atspausdinti epizodo numerį.
*/

let Star = "Star Wars: Episode "+ " ".repeat( Math.ceil(Math.random() * 10))+(Math.ceil (Math.random() * 7)+1) + " - A New Hope"
console.log(Star)

let matches = Star.match(/\d+/);
let numStr = matches[0];

console.log(numStr);


/* 08.
Suskaičiuoti kiek stringe “Don't Be a Menace to South Central While Drinking Your Juice in the Hood” yra žodžių trumpesnių arba lygių nei 5 raidės. Pakartokite kodą su stringu “Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale”.
*/

let sakinys1 = "Don't Be a Menace to South Central While Drinking Your Juice in the Hood"
let sakinys2 = "Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale"
let temp = "zodis" 
let temp2 = 0
console.log(temp.length)
if ( temp.length <= 5) {
    temp2++
} console.log(temp2)

/* 09.
Parašyti kodą, kuris generuotų atsitiktinį stringą iš lotyniškų mažųjų raidžių. Stringo ilgis 3 simboliai.
*/
function generuotiAtsitiktiniStringa() {
    let stringas = "";
    const abecelesIlgis = 26; 
  
    for (let i = 0; i < 3; i++) {
      
      const randomSkaicius = Math.floor(Math.random() * abecelesIlgis);
      
      const raide = String.fromCharCode(randomSkaicius + 97);
      
      stringas += raide;
    }
  
    return stringas;
  }
  
  const atsitiktinisStringas = generuotiAtsitiktiniStringa();
  console.log(atsitiktinisStringas);
  
 

/* 10. 
Parašykite kodą, kuris generuotų atsitiktinį stringą su 10 atsitiktine tvarka išdėliotų žodžių, o žodžius generavimui imtų iš 8-me uždavinyje pateiktų dviejų stringų. Žodžiai neturi kartotis. (reikės masyvo)
*/

let stringas1 = "Don't Be a Menace to South Central While Drinking Your Juice in the Hood";
let stringas2 = "Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale";

let zodziai11 = stringas1.split(" ");
let zodziai22 = stringas2.split(" ");

let visiZodziai = zodziai11.concat(zodziai22);

let unikalusZodziai = Array.from(new Set(visiZodziai));

unikalusZodziai.sort(() => Math.random() - 0.5);

let atsitiktinisStringas1 = unikalusZodziai.slice(0, 10).join(" ");

console.log(atsitiktinisStringas1);
