/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/

let reverse = string => {
  if(string==="") return string;
  let arr = [];
  let letters = string.split("");
  if(letters.length>1){
    arr.push(letters.pop());
    return arr + reverse(letters.join(""));
  } else {
    arr.push(letters.pop());
    return arr.join("")
  }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
