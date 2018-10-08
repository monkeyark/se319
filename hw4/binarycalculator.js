var rs = require('readline-sync');

var num1Bin = rs.question('1st Number: ');
var num2Bin = rs.question('2nd Number: ');
var action = rs.question('Enter the action{+,-,*,/,%,<<,>>,&,|,~}');

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
            console.log('Sum: ' + resultBin);
            break;
        case "-":
            resultDec = eval(num1Dec + action + num2Dec);
            resultBin = parseInt(resultDec, 10).toString(2);
            console.log('Subtraction: ' + resultBin);
            break;
        case "*":
            resultDec = eval(num1Dec + action + num2Dec);
            resultBin = parseInt(resultDec, 10).toString(2);
            console.log('Multiply: ' + resultBin);
            break;
        case "/":
            resultDec = eval(num1Dec + action + num2Dec);
            resultBin = parseInt(resultDec, 10).toString(2);
            console.log('Division: ' + resultBin);
            break;
        case "%":
            resultDec = eval(num1Dec + action + num2Dec);
            resultBin = parseInt(resultDec, 10).toString(2);
            console.log('Mod: ' + resultBin);
            break;
        case "&":
            resultDec = num1Dec & num2Dec;
            resultBin = parseInt(resultDec, 10).toString(2);
            console.log('And: ' + resultBin);
            break;
        case "|":
            resultDec = num1Dec | num2Dec;
            resultBin = parseInt(resultDec, 10).toString(2);
            console.log('Or: ' + resultBin);
            break;
        case "<<":
            num1Dec = num1Dec << 1;
            num2Dec = num2Dec << 1;
            num1Bin = parseInt(num1Dec, 10).toString(2);
            num2Bin = parseInt(num2Dec, 10).toString(2);
            console.log('Bitwise left shift 1st number: ' + num1Bin);
            console.log('Bitwise left shift 2nd number: ' + num2Bin);
            break;
        case ">>":
            num1Dec = num1Dec >> 1;
            num2Dec = num2Dec >> 1;
            num1Bin = parseInt(num1Dec, 10).toString(2);
            num2Bin = parseInt(num2Dec, 10).toString(2);
            console.log('Bitwise right shift 1st number: ' + num1Bin);
            console.log('Bitwise right shift 2nd number: ' + num2Bin);
            break;
        case "~":
            num1Bin = bitnot(num1Bin);
            num2Bin = bitnot(num2Bin);
            console.log('Not 1st number: ' + num1Bin);
            console.log('Not 2nd number: ' + num2Bin);
            break;
    }
}

function bitnot (binary)
{
    var not = "";
    for (var i = 0; i < binary.length; i++)
    {
        if (binary.charAt(i) == '1')
        {
            not += "0";
        }
        else
        {
            not += "1";
        }
    }

    var output = "";
    var flag = false;
    for (var j = 0; j < not.length; j++)
    {
        if (not.charAt(j) == '1')
        {
            flag = true;
        }
        if (flag)
        {
            output += not.charAt(j);
        }
    }

    return output;
}
