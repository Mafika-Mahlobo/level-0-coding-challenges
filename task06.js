function maximumNumberCalc(firstNumber, secondNumber, thirdNumber){
    var maximumNumber = 0;
    var numberStoringArray = [];

    for(var numbers = 0; numbers < arguments.length; numbers++){
        numberStoringArray[numbers] = arguments[numbers];
    }

    for(var index = 0; index < numberStoringArray.length; index++){
        if(numberStoringArray[index] > maximumNumber){
            maximumNumber = numberStoringArray[index];
        }
    }

    return maximumNumber;
}