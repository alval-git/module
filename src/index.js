export function revertString(string) {
   let reStr = string[string.length-1];
   for (let i=2;i<=string.length;i+=1){
      reStr += string[string.length - i];
   }
   return  reStr
}
