function indexOfChar(text, character){
    
    for(let i = 0; i<text.length; i++){
        if(text[i] == character){
            return i;

        }
    }
   
        return -1;   
}
indexOfChar("sweden", "r");