function getCommonLetters(str1, str2){
    var output = "";

    for(var str1Index = 0; str1Index < str1.length; str1Index++){
        for(var str2Index = 0; str2Index < str2.length; str2Index++){
            if(str2[str2Index] == str1[str1Index]){
                if(!output.includes(str2[str2Index])){
                    if(output.length < 1){
                        output += str2[str2Index];
                    }else{
                        output += ", "+str2[str2Index];
                    }
                    
                }
                
            }
            
        }
    }
            

    console.log("Common letters: "+output);
}