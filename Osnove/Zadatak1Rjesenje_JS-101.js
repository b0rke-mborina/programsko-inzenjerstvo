let a = prompt("Unesi prvi broj");
let b = prompt("Unesi drugi broj");
let c = prompt("Unesi treći broj");
let d = prompt("Unesi četvrti broj");
let maks;

let niz = [];
if (!isNaN(a)) {
   niz.push(a);
}
if (!isNaN(b)) {
   niz.push(b);
}
if (!isNaN(c)) {
   niz.push(c);
}
if (!isNaN(d)) {
   niz.push(d);
}
if (niz.length == 0) {
   maks = "nijedan";
}
else {
   maks = Math.max(...niz);
}

console.log("Najveći između njih je: " + maks);
