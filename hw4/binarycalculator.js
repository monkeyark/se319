var rs = require('readline-sync');

var num1Bin = rs.question('1st Number: ');
var num2Bin = rs.question('2nd Number: ');
var action = rs.question('Enter the action{+,-,*,/,%,<<,>>,&,|,~}');

//parseInt(num, baseFrom).toString(baseTo);
num1Dec = parseInt(num1Bin, 2).toString(10);
num2Dec = parseInt(num2Bin, 2).toString(10);

var resultDec;
evaluation(action);


console.log('result in Decimal: ' + resultDec);

resultBin = parseInt(resultDec, 10).toString(2);
console.log('result in Binary: ' + resultBin);



function evaluation(operator)
{
    switch (operator)
    {
        case "+":
            resultDec = eval(num1Dec + action + num2Dec);
            break;
        case "-":
            resultDec = eval(num1Dec + action + num2Dec);
            break;
        case "*":
            resultDec = eval(num1Dec + action + num2Dec);
            break;
        case "/":
            resultDec = eval(num1Dec + action + num2Dec);
            break;
        case "%":
            resultDec = eval(num1Dec + action + num2Dec);
            break;
        case "<<":
            console.log("<<");
            break;
        case ">>":
            console.log(">>");
            break;
        case "&":
            console.log("&");
            break;
        case "|":
            console.log("|");
            break;
        case "~":
            console.log("~");
            break;
    }

}