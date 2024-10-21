const numberArray = ["a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i"];
for(let i = 0; i < numberArray.length; i++){
    console.log(numberArray[i]);
    break;
}
for(let i = 0; i < numberArray.length; i++){
    if(i == 3){
        continue;
    }
    console.log(numberArray[i]);
}