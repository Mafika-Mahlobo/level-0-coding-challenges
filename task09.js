function getVowels(string){
    var vowels =['a','e','i','o','u'];
    var vowelMatch = [];
    var output = "Vowels: ";

    //searching the string for vowels
    for(var strCharacter = 0; strCharacter < string.length; strCharacter++){
        for(var vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++){
            if(string[strCharacter].toLowerCase() == vowels[vowelIndex]){
                if(!vowelMatch.includes(vowels[vowelIndex],0)){
                    vowelMatch.push(vowels[vowelIndex]);
                }
            }
        }
    }

    //building a string for output
    for(var outputItems = 0; outputItems < vowelMatch.length; outputItems++){
        if(outputItems < vowelMatch.length-1){
            output += " "+vowelMatch[outputItems]+", ";
        }else{
            output += " "+vowelMatch[outputItems]+".";
        }
        
    }

    console.log(output);
}

getVowels("Umizi");