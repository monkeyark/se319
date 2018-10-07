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


function evaluation(operator)
{
    switch (operator)
    {
        case "+":
            resultDec = eval(num1Dec + action + num2Dec);
            resultBin = parseInt(resultDec, 10).toString(2);
            console.log('sum: ' + resultBin);
            break;
        case "-":
            resultDec = eval(num1Dec + action + num2Dec);
            resultBin = parseInt(resultDec, 10).toString(2);
            console.log('minus: ' + resultBin);
            break;
        case "*":
            resultDec = eval(num1Dec + action + num2Dec);
            resultBin = parseInt(resultDec, 10).toString(2);
            console.log('multiply: ' + resultBin);
            break;
        case "/":
            resultDec = eval(num1Dec + action + num2Dec);
            resultBin = parseInt(resultDec, 10).toString(2);
            console.log('division: ' + resultBin);
            break;
        case "%":
            resultDec = eval(num1Dec + action + num2Dec);
            resultBin = parseInt(resultDec, 10).toString(2);
            console.log('mod: ' + resultBin);
            break;
        case "&":
            resultDec = num1Dec & num2Dec;
            resultBin = parseInt(resultDec, 10).toString(2);
            console.log('and: ' + resultBin);
            break;
        case "|":
            resultDec = num1Dec | num2Dec;
            resultBin = parseInt(resultDec, 10).toString(2);
            console.log('or: ' + resultBin);
            break;
        case "<<":
            num1Dec = num1Dec << 1;
            num2Dec = num2Dec << 1;
            num1Bin = parseInt(num1Dec, 10).toString(2);
            num2Bin = parseInt(num2Dec, 10).toString(2);
            console.log('bitwise left shift 1st number: ' + num1Bin);
            console.log('bitwise left shift 2nd number: ' + num2Bin);
            break;
        case ">>":
            num1Dec = num1Dec >> 1;
            num2Dec = num2Dec >> 1;
            num1Bin = parseInt(num1Dec, 10).toString(2);
            num2Bin = parseInt(num2Dec, 10).toString(2);
            console.log('bitwise right shift 1st number: ' + num1Bin);
            console.log('bitwise right shift 2nd number: ' + num2Bin);
            break;
        case "~":
            num1Dec = -1 * (num1Dec + 1);
            //num1Dec = -1 * num1Dec;
            num2Dec = ~num2Dec;
            //num2Dec = -1 * num2Dec;

            num1Bin = parseInt(num1Dec, 10).toString(2);
            num2Bin = parseInt(num2Dec, 10).toString(2);
            console.log('not 1st number: ' + num1Bin);
            console.log('not 2nd number: ' + num2Bin);
/*
            //resultDec = num1Dec & num2Dec;
            resultBin = parseInt(resultDec, 10).toString(2);
            console.log('and: ' + resultBin);

            num1Bin = ~num1Bin;
            num2Bin = ~num2Bin;
            console.log('not 1st number: ' + num1Bin);
            console.log('not 2nd number: ' + num2Bin);
*/
            break;
    }
}
/*
console.log('result in Decimal: ' + resultDec);
console.log('result in Binary: ' + resultBin);
*/