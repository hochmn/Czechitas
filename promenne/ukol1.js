//console.log('ahoj');
//let jirik = 54;
//console.log(jirik);

/* let jmeno = "Petra";
let vek = 23;
let vaha = 65;
let vyska = 1.7;
let BMI = vaha/(vyska**2)
console.log("Jmenuji se " + jmeno + ", je mi " + vek + "let, vážím " + vaha + " kg, měřím " + vyska + "m a moje BMI je " + BMI + ".") */

let jmeno = prompt("Zadej jmeno:");
let vek = Number(prompt("Zadej vek:");

if (vek >= 18) {
  console.log("Vaše jméno je " + jmeno + ", je vám " + vek + " a tak máte právo řídit auto.");
} else {
  let doba = 18 - vek;
  console.log("Vaše jméno je " + jmeno + ", je vám " + vek + " a tak musíte počkat ještě " + doba + "let, než budete moci řídit auto.");
}