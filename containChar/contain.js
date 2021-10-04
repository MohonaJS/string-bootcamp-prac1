function containChar(text,character){
  
    for( let i = 0; i<text.length; i++){
        if(text[i]== character){
            return true;
        }
       
    }
    return false;
   }


 /* function containOfChar(text, character){

   for(let char of text){
     if(char == character){
       return true;
    }
    }
   return false;
 }
 */
containOfChar("Moa", "o");

