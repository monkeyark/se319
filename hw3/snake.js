var Snak =
{
    run: function ()
	{
		Snak.attachHandlers();
		console.log(Snak.display());
		return Snak.display();
    },
    attachHandlers: function()
    {
        Snak.View.buttonStart.onclick = "Calc.Controller.buttonDigitHandler(0)";
		Snak.View.buttonTurnLeft.onclick = "Calc.Controller.buttonDigitHandler(1)";
		Snak.View.buttonTurnRight.onclick = "Calc.Controller.buttonDigitHandler(2)";
    },

    displayElement: function (element)
    {
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
        s = "<div id=\"mySnake\" style='margin-bottom: 5px'>";
        s += "<button id='ToggleStateButton'>Start</button>";
        s += "<button id='TurnLeftButton'>Turn Left</button>";
        s += "<button id='TurnRightButton'>Turn Right</button>";
        s += "</div>";

        s += "<canvas id=\"Canvas\" width='647' height='400' style='border:1px solid #c3c3c3;'>";
        s += "</canvas>";
		return s;
	},
    
    /*
    run: function ()
    {
        document.getElementById("TurnLeftButton").onclick = function () { snake.ChangeDirection('Left') };
        document.getElementById("TurnRightButton").onclick = function () { snake.ChangeDirection('Right') };
        document.getElementById("ToggleStateButton").onclick = function () { snake.ToggleState() };
        var c = document.getElementById("Canvas");
        var s = c.getContext("2d");
        s.fillStyle = "#FF0000";
        s.fillRect(50,50,10,10);

        var i= 100;
        //var timer = setInterval(function() {document.getElementById().innerHTML = i--;}.1000);
    },
    */


    Model:
    {
    },
    
    View:
    {
        buttonStart: { id: "buttonStart", type: "button", value: "Start", onclick: "" },
		buttonTurnLeft: { id: "buttonTurnLeft", type: "button", value: "TurnLeft", onclick: "" },
		buttonTurnRight: { id: "buttonTurnRight", type: "button", value: "TurnRight", onclick: "" },
    },

    Controll:
    {
    },

}