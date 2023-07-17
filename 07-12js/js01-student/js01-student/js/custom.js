let num = 6 + 4
let vsc = "Labas"
let relationship = (vsc == num)

console.log(num + ", " + vsc + ", " + typeof(vsc) + ", " + relationship)
console.log(`${num}, ${vsc}, ${typeof(vsc)}, ${relationship}`)

console.log("Skaičius: " + num)
console.log(`Skaičius: ${num}`)

let nam = "Tomas"
let lastname = "Steponas"
let asmuo = `${nam} ${lastname}`
console.log(asmuo)

let tekstas = "Pirmas"
console.log(tekstas.length)
console.log(tekstas.toUpperCase())
console.log(tekstas.toLocaleLowerCase())
console.log(tekstas.charAt(4))
console.log(tekstas.indexOf("m"))
tekstas = "Čia gali būti Jūsų reklama"
console.log (tekstas.replace("gali būti", "yra"))
console.log (tekstas.substring(4, 14))
console.log (tekstas.substring(14))
console.log (tekstas.substr(4, 9))

let x = 6.34
console.log(Math.round(x))
console.log(Math.ceil(x))
console.log(Math.floor(x))

let y = 5.8
let z = 9

console.log(Math.max(x,y,z))
console.log(Math.min(x,y,z))

let i = Math.round(Math.random() * 50)
console.log(i)

//Math.random() * (max - min + 1) + min
let a = Math.floor(Math.random() * (50 - 10 + 1) +10)
console.log(a)

let num1 = 5
let num2 = "5"

if (num1 === num2) {
    console.log("Lygu")
} else {
    console.log("Nelygu")
}


let numeris = 1
while(numeris <= 10) {
    console.log(numeris)
    numeris++
}

for(let i = 1; i <= 10; i++){
    console.log(i)
}

// 1, 2, 3, 4, 5 - kokia ju suma?
let suma = 0
for (let i = 0; i <= 5; i++) {
    suma += i
}
console.log(suma)

let skaiciai = [10,20,30,40,50,60,70,80]
let sum = 0
for(let i = 0; i < skaiciai.length; i++){
    sum += skaiciai[i]
}
console.log(sum)

// alert("Demesio jusu kompiuteri virusas!");
// confirm("Ar tikrai norite uzdaryti si puslapi")
// prompt("koks tavo vardas?")

// let turimVarda = false;

// while (turimVarda == false) {
//     let userVardas = prompt("koks tavo vardas?");
//     if(userVardas) {
//         if(confirm(`ar tikrai tavo vardas ${userVardas}?`)) {
//             turimVarda = true;
//         } else {
//             alert("bandyk dar kart.");
//         }
//     } else {
//         alert("bandyk dar kart.")
//     }
// }

function sumOfCubes(a, b) {
    return a * a * a + b * b * b;
}
let muSum = sumOfCubes(4,9);
console.log(muSum)
//pakelta kubu ir sudeta

//Funkcijos aprašymas
function hello () {
    console.log("Hello Wolrd!")
}

//Funkcijos iškvietimas hello();

hello()

let studentai = ["Lukas", "Kestutis", "Silvija", "Uršule", "Laurynas"]
console.log(studentai)
console.log(studentai[4])
studentai[4] = "Tomas"
console.log(studentai[4])
console.log(studentai.length)


for(let i = 0; i < studentai.length; i++){
    console.log(studentai[i])
}

studentai.pop()
console.log(studentai)
//istrina

studentai.push("Arturas")
console.log(studentai)
//istumia


let pirmasMasyvas = ["sesi", 5, "Zuvis", "Trylika"]
let antrasMasyvas = ["raudonas", "melynas", "geltonas", "zalias"]

let masyvuMasyvas = [pirmasMasyvas, antrasMasyvas]
console.log(masyvuMasyvas)
console.log(masyvuMasyvas[1][2])

let numberList = [2,3,5,8,4,7,6,9,1,12]

let lyginiuKiekis = 0
for (let i = 0; i < numberList.length; i++){
    if(numberList[i] % 2 == 0){
        lyginiuKiekis++;
    } else {
        numberList[i] = undefined //istrina undefined
    }
}
console.log(lyginiuKiekis)
