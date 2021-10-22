let zagrade = function(s) {
   const stack = [];
   const brackets = {
      '(':')',
      '[':']',
      '{':'}'
   }
   let l=s.length;
   for (let i=0;i<l;i++) {
      const current=s[i];
      if (brackets[current]) {
         stack.push(current);
      }
      else {
         const lastOpen = stack[stack.length - 1];
         if (brackets[lastOpen]!=current) {
            return false;
         }
         stack.pop();
      }
   }
   return stack.length === 0;
}

console.log(zagrade("[()]()()")); // true
console.log(zagrade("{[((()))]}")); // true
console.log(zagrade("({)}")); // false
