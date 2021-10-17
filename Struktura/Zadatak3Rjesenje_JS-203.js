let velicina=8;
for (let i=1; i<=velicina; i++) {
   let red="";
   for (let j=1; j<=velicina; j++) {
      if (i%2==1 && j%2==1) {
         red+=" ";
      }
      else if (i%2==1 && j%2==0) {
         red+="#";
      }
      else if (i%2==0 && j%2==1) {
         red+="#";
      }
      else if (i%2==0 && j%2==0) {
         red+=" ";
      }
   }
   console.log(red);
}
