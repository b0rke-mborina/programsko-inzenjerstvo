let studenti = [
   {ime: "Ivan", prezime: "Horvat", upisan: true},
   {ime: "Ivo", prezime: "Ivić", upisan: true},
   {ime: "Maja", prezime: "Majić", upisan: false},
   {ime: "Ana", prezime: "Anić", upisan: true},
   {ime: "Marko", prezime: "Markić", upisan: true},
   {ime: "Iva", prezime: "Lukić", upisan: false},
   {ime: "Lucija", prezime: "Novak", upisan: false},
   {ime: "Karlo", prezime: "Babić", upisan: false},
   {ime: "Luka", prezime: "Jurić", upisan: true},
   {ime: "Branka", prezime: "Kovačić", upisan: false}
]

function provjeri(lista, pojam) {
   let r=false;
   for (let s of lista) {
      if (s.ime===pojam && s.upisan==true) {
         r=true;
         break;
      }
      else if (s.prezime===pojam && s.upisan==true) {
         r=true;
         break;
      }
   }
   return r;
}

console.log(provjeri(studenti,"Majić")); // false
console.log(provjeri(studenti,"Ana")); // true
console.log(provjeri(studenti,"Kovačević")); // false
console.log(provjeri(studenti,"Ivica")); // false
