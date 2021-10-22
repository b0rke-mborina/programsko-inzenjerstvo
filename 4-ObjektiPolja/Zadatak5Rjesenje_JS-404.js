let studenti = [
   {
      ime: "Marko",
      prezime: "Marković",
      grad: "Pula"
   },
   {
      ime: "Iva",
      prezime: "Ivić",
      grad: "Našice"
   },
   {
      ime: "Lucija",
      prezime: "Lucić",
      grad: "Zagreb"
   },
   {
      ime: "Nikola",
      prezime: "Nikolić",
      grad: "Rijeka"
   }
];

function napredna_pretraga(lista, pojam) {
   let index=-1;
   pojam=pojam.toLowerCase();
   let array=pojam.split(" ");
   let sIme,sPrezime,sGrad;
   for (let s of lista) {
      sIme=s.ime.toLowerCase();
      sPrezime=s.prezime.toLowerCase();
      sGrad=s.grad.toLowerCase();
      let sIndex=lista.indexOf(s);
      let arr=array;
      let l=arr.length;
      for (let i=l-1;i>=0;i--) {
         if (sIme.includes(arr[i]) || sPrezime.includes(arr[i]) || sGrad.includes(arr[i])) arr.splice(i,1);
      }
      if (arr.length==0) return sIndex;
   }
   return index;
}

console.assert(napredna_pretraga(studenti, "ma ić") == 0) // prvi student
console.assert(napredna_pretraga(studenti, "ko lić ri") == 3) // zadnji student
console.assert(napredna_pretraga(studenti, "ić za") == 2) // treći student
console.assert(napredna_pretraga(studenti, "ić ko la ri") == 3) // zadnji student
