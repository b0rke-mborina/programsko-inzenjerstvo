let a = {
   naziv: "neki objekt"
};
a.unutarnji = a;
console.log(a.unutarnji.unutarnji.unutarnji.naziv); // neki objekt
