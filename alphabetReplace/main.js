//goal: replace every index in a string with its numerical place in the alphabet, only evaluate letters
//
//ex: "a" =  1, "b" = 2 ...     "aba" = "1 2 1"

var test = "This is a test";
var valueArray = [];

function alphabetPosition(text) {

  var alphabetArray = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  text = text.toLowerCase();
  for(i = 0; i < text.length; i++){
    for(j = 0; j < alphabetArray.length; j++){
      if(text[i] == alphabetArray[j]){
        valueArray.push(j + 1);
      }
    }
  }
  return valueArray.join(" ");
}

alphabetPosition(test);