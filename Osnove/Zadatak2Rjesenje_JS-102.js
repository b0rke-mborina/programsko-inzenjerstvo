let bodovi = prompt("Unesi broj bodova");
let ocjena;
let poruka;

if (bodovi > 100 || bodovi < 0) {
   poruka = "Krivi broj bodova.";
}
else if (bodovi >= 90) {
   ocjena = 5;
   poruka = "Ocjena je 5. Čestitam, prošli ste kolegij.";
}
else if (bodovi >= 76) {
   ocjena = 4;
   poruka = "Ocjena je 4. Čestitam, prošli ste kolegij.";
}
else if (bodovi >= 63) {
   ocjena = 3;
   poruka = "Ocjena je 3. Čestitam, prošli ste kolegij.";
}
else if (bodovi >= 50) {
   ocjena = 2;
   poruka = "Ocjena je 2. Čestitam, prošli ste kolegij.";
}
else if (bodovi >= 0) {
   ocjena = 1;
   poruka = "Ocjena je 1. Niste prošli kolegij.";
}
else {
   poruka = "Krivo upisan broj bodova.";
}

console.log(poruka);
