//an isogram is a word where no letters repeat themselves in that word

//goal: check if a word is an isogram, return true if str is an isogram and false if there is one char more than once. an empty string is a valid isogram. igrnore casing

function isIsogram(str){
  var count = 0;
  str.toLowerCase();
  for(i = 0; i < str.length; i++){
    for(j = 0; j < str.length; j++){
      if(str[i] == str[j]){
        count++;
        console.log(str[i]);
        console.log(str[j]);
      }
    } 
  }
  // console.log(count);
  if(str == ""){
    return true;
  }
  if(count > 1){
    return false;
  }else{
    return true;
  }
}

isIsogram("aba")
isIsogram("Aba")
isIsogram("myquickbrowndogjumped")