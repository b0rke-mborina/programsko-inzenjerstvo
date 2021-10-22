function isti_znakovi(string) {
   let count = 0;
   for (let i=0; i<string.length; i++) {
      let cur_count = 1;
      for (let j=i+1; j<string.length; j++) {
         if (string[i] == string[j]) cur_count++;
         else break;
      }
      if (cur_count > count) count = cur_count;
   }
   return count;
}

console.log(istiZnakovi("baaaccd")); // → 3
console.log(istiZnakovi("ba2dll")); // → 2
