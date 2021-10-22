function min(x, y) {
   if (isNaN(x) || isNaN(y)) return "Nisu proslijeđena dva brojčana argumenta.";
   else {
      if (x<y) return x;
      else return y;
   }
}

console.log(min(0, 4)); // → 0
console.log(min(0, -4)); // → -4
