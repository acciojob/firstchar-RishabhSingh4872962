function firstChar(text) {
  // your code here 
return text.trim().charAt(0) ? text.trim().charAt(0) :""
}
 
// Do not change the code below
const text = prompt("Enter text:"); 
alert(firstChar(text));
