
var Calc =
{
	Model:
	{
		previous: "0",
		current: "0",
		result: "0",
		memo: 0,
		operation: "",
	},


	View:
	{
		textRow: { id: "textRow", type: "text", value: "", onclick: "" },

		button7: { id: "button7", type: "button", value: 7, onclick: "" },
		button8: { id: "button8", type: "button", value: 8, onclick: "" },
		button9: { id: "button9", type: "button", value: 9, onclick: "" },
		buttonPlus: { id: "button+", type: "button", value: "+", onclick: "" },

		button4: { id: "button4", type: "button", value: 4, onclick: "" },
		button5: { id: "button5", type: "button", value: 5, onclick: "" },
		button6: { id: "button6", type: "button", value: 6, onclick: "" },
		buttonMinus: { id: "button-", type: "button", value: "-", onclick: "" },

		button1: { id: "button1", type: "button", value: 1, onclick: "" },
		button2: { id: "button2", type: "button", value: 2, onclick: "" },
		button3: { id: "button3", type: "button", value: 3, onclick: "" },
		buttonTime: { id: "button*", type: "button", value: "*", onclick: "" },

		button0: { id: "button0", type: "button", value: 0, onclick: "" },
		buttonDot: { id: "buttondot", type: "button", value: ".", onclick: "" },
		buttonEqual: { id: "buttonEqual", type: "button", value: "=", onclick: "" },
		buttonDivide: { id: "buttonDivide", type: "button", value: "/", onclick: "" },

		buttonC: { id: "buttonC", type: "button", value: "C", onclick: "" },
		buttonMR: { id: "buttonMR", type: "button", value: "MR", onclick: "" },
		buttonMC: { id: "buttonMC", type: "button", value: "MC", onclick: "" },
		buttonMM: { id: "buttonMM", type: "button", value: "M-", onclick: "" },
		buttonMP: { id: "buttonMP", type: "button", value: "M+", onclick: "" },
	},


	Controller:
	{
		buttonDigitHandler: function (digit)
		{
			if (document.getElementById("textRow").value == 0)
			{
				Calc.Model.current = String(digit);
			}
			else if (digit == '.' && Calc.Model.current.includes('.'))
			{
				Calc.Model.current = Calc.Model.current;
			}
			else
			{
				Calc.Model.current += String(digit);
			}
			document.getElementById("textRow").value = Calc.Model.current;
		},

		buttonMemoryHandler: function (p)
		{
			if (p == 'MC')
			{
				Calc.Model.memo = 0;
			}
			else if (p == 'MR')
			{
				document.getElementById("textRow").value = Calc.Model.memo;
			}
			else if (p == 'M+')
			{
				Calc.Model.memo += Number(document.getElementById("textRow").value);
			}
			else if (p == 'M-')
			{
				Calc.Model.memo -= Number(document.getElementById("textRow").value);
			}
		},

		buttonOperatorHandler: function (p)
		{
			Calc.Model.previous = Number(Calc.Model.current);
			Calc.Model.current = "";

			if (p == '+')
			{
				Calc.Model.operation = '+';
			}
			else if (p == '-')
			{
				Calc.Model.operation = '-';
			}
			else if (p == '*')
			{
				Calc.Model.operation = '*';
			}
			else if (p == '/')
			{
				Calc.Model.operation = '/';
			}
			else if (p == '')
			{
				Calc.Model.operation = '';
			}

			document.getElementById("textRow").value = p;
		},

		calculate: function (prv, cur, p)
		{
			if (p == '+')
			{
				Calc.Model.result = String(Number(prv) + Number(cur));
				Calc.Model.previous = String(cur);
			}
			else if (p == '-')
			{
				Calc.Model.result = String(Number(prv) - Number(cur));
				Calc.Model.previous = String(cur);
			}
			else if (p == '*')
			{
				Calc.Model.result = String(Number(prv) * Number(cur));
				Calc.Model.previous = String(cur);
			}
			else if (p == '/')
			{
				Calc.Model.result = String(Number(prv) / Number(cur));
				Calc.Model.previous = String(cur);
			}
			else if (p = '')
			{

			}

		},

		buttonEqualHandler: function ()
		{
			Calc.Controller.calculate(Calc.Model.previous, Calc.Model.current, Calc.Model.operation);
			document.getElementById("textRow").value = Calc.Model.result;
			Calc.Controller.cleanOperator();
		},

		cleanOperator: function ()
		{
			Calc.Model.operation = "";
		},

		buttonCHandler: function ()
		{
			Calc.Model.previous = "0";
			Calc.Model.current = "0";
			Calc.Model.result = "0";
			Calc.Model.operation = "";
			document.getElementById("textRow").value = 0;
		}


	},



	run: function ()
	{
		Calc.attachHandlers();
		console.log(Calc.display());
		return Calc.display();
	},


	displayElement: function (element) {
		var s = "<input ";
		s += " id=\"" + element.id + "\"";
		s += " type=\"" + element.type + "\"";
		s += " value= \"" + element.value + "\"";
		s += " onclick= \"" + element.onclick + "\"";
		s += ">";
		return s;
	},


	display: function ()
	{
		var s;
		s = "<table id=\"myTable\" border=2>"
		s += "<tr><td>" + Calc.displayElement(Calc.View.textRow) + "</td></tr>";
		s += "<tr><td>";

		s += Calc.displayElement(Calc.View.button7);
		s += Calc.displayElement(Calc.View.button8);
		s += Calc.displayElement(Calc.View.button9);
		s += Calc.displayElement(Calc.View.buttonPlus) + "</td></tr>";
		s += "<tr><td>";

		s += Calc.displayElement(Calc.View.button4);
		s += Calc.displayElement(Calc.View.button5);
		s += Calc.displayElement(Calc.View.button6);
		s += Calc.displayElement(Calc.View.buttonMinus) + "</td></tr>";
		s += "<tr><td>";

		s += Calc.displayElement(Calc.View.button1);
		s += Calc.displayElement(Calc.View.button2);
		s += Calc.displayElement(Calc.View.button3);
		s += Calc.displayElement(Calc.View.buttonTime) + "</td></tr>";
		s += "<tr><td>";

		s += Calc.displayElement(Calc.View.button0);
		s += Calc.displayElement(Calc.View.buttonDot);
		s += Calc.displayElement(Calc.View.buttonEqual);
		s += Calc.displayElement(Calc.View.buttonDivide) + "</td></tr>";
		s += "<tr><td>";

		s += Calc.displayElement(Calc.View.buttonMR);
		s += Calc.displayElement(Calc.View.buttonMM);
		s += Calc.displayElement(Calc.View.buttonMP);
		s += Calc.displayElement(Calc.View.buttonMC) + "</td></tr>";
		s += "<tr><td>";

		s += Calc.displayElement(Calc.View.buttonC) + "</td></tr>";
		s += "<tr><td>";

		s += "</tr></td></table>";
		return s;
	},


	attachHandlers: function () {
		Calc.View.button0.onclick = "Calc.Controller.buttonDigitHandler(0)";
		Calc.View.button1.onclick = "Calc.Controller.buttonDigitHandler(1)";
		Calc.View.button2.onclick = "Calc.Controller.buttonDigitHandler(2)";
		Calc.View.button3.onclick = "Calc.Controller.buttonDigitHandler(3)";
		Calc.View.button4.onclick = "Calc.Controller.buttonDigitHandler(4)";
		Calc.View.button5.onclick = "Calc.Controller.buttonDigitHandler(5)";
		Calc.View.button6.onclick = "Calc.Controller.buttonDigitHandler(6)";
		Calc.View.button7.onclick = "Calc.Controller.buttonDigitHandler(7)";
		Calc.View.button8.onclick = "Calc.Controller.buttonDigitHandler(8)";
		Calc.View.button9.onclick = "Calc.Controller.buttonDigitHandler(9)";
		Calc.View.buttonDot.onclick = "Calc.Controller.buttonDigitHandler('.')";

		Calc.View.buttonPlus.onclick = "Calc.Controller.buttonOperatorHandler('+')";
		Calc.View.buttonMinus.onclick = "Calc.Controller.buttonOperatorHandler('-')";
		Calc.View.buttonTime.onclick = "Calc.Controller.buttonOperatorHandler('*')";
		Calc.View.buttonDivide.onclick = "Calc.Controller.buttonOperatorHandler('/')";

		Calc.View.buttonMR.onclick = "Calc.Controller.buttonMemoryHandler(MR)";
		Calc.View.buttonMC.onclick = "Calc.Controller.buttonMemoryHandler(MC)";
		Calc.View.buttonMP.onclick = "Calc.Controller.buttonMemoryHandler(M+)";
		Calc.View.buttonMM.onclick = "Calc.Controller.buttonMemoryHandler(M-)";
		
		Calc.View.buttonC.onclick = "Calc.Controller.buttonCHandler()";
		Calc.View.buttonEqual.onclick = "Calc.Controller.buttonEqualHandler()";
	},


}
