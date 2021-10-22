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

function provjeri(lista, pojam, status) {
   let r=false;
   pojam=pojam.toLowerCase();
   let sIme,sPrezime,sStatus;
   for (let s of lista) {
      sIme=s.ime.toLowerCase();
      sPrezime=s.prezime.toLowerCase();
      sStatus=s.upisan;
      if (sIme.includes(pojam) && sStatus==status) {
         r=true;
         break;
      }
      else if (sPrezime.includes(pojam) && sStatus==status) {
         r=true;
         break;
      }
   }
   return r;
}

console.log(provjeri(studenti,"ić",true)); // true
console.log(provjeri(studenti,"na",false)); // false
console.log(provjeri(studenti,"Kovač",false)); // true
console.log(provjeri(studenti,"Iv",true)); // true
