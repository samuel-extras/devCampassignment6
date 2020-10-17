function pangram (string) {
    var alphabet= "abcdefghijklmnopqrstuvwxyz"; 
   var strArr= string.toLowerCase().trim().split(" ").join("").split("").sort()
   var newArr = []
   
    for (let i = 0; i < strArr.length; i++) {
        if(!newArr.includes(strArr[i])){
            newArr.push(strArr[i])
        }
    }
   
   if(newArr.join("")===alphabet){
       return "is pangram"; 
   }else{
       return "not a pangram";
   }

}
