var rs = require('readline-sync');

var num1Bin = rs.question('1st Number: ');
var num2Bin = rs.question('2nd Number: ');
var action = rs.question('Enter the action{+,-,*,/,%,<<,>>,&,|,~}');

//parseInt(num, baseFrom).toString(baseTo);
var num1Dec = parseInt(num1Bin, 2).toString(10);
var num2Dec = parseInt(num2Bin, 2).toString(10);

var resultDec;
var resultBin;
evaluation(action);



function evaluation(operator) {
    switch (operator) {
        case "+":
            resultDec = eval(num1Dec + action + num2Dec);
            resultBin = parseInt(resultDec, 10).toString(2);
            break;
        case "-":
            resultDec = eval(num1Dec + action + num2Dec);
            resultBin = parseInt(resultDec, 10).toString(2);
            break;
        case "*":
            resultDec = eval(num1Dec + action + num2Dec);
            resultBin = parseInt(resultDec, 10).toString(2);
            break;
        case "/":
            resultDec = eval(num1Dec + action + num2Dec);
            resultBin = parseInt(resultDec, 10).toString(2);
            break;
        case "%":
            resultDec = eval(num1Dec + action + num2Dec);
            resultBin = parseInt(resultDec, 10).toString(2);
            break;
        case "&":
            resultBin = num1Bin & num2Bin;
            resultDec = parseInt(resultBin, 2).toString(10);
            break;
        case "|":
            resultBin = num1Bin | num2Bin;
            resultDec = parseInt(resultBin, 2).toString(10);
            break;
        case "<<":
            num1Bin = num1Bin << 1;
            resultBin = num1Bin;
            break;
        case ">>":
            num1Bin = num1Bin >> 1;
            resultBin = num1Bin;
            break;
        case "~":
        resultDec = ~num1Dec;
        resultBin = parseInt(resultDec, 10).toString(2);
            //resultBin = num1Bin;
            break;
    }

}

console.log('result in Decimal: ' + resultDec);
console.log('result in Binary: ' + resultBin);