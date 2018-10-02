var Snak =
{
    run: function ()
	{
        setInterval(Snak.listener(), 10);
		return Snak.display();
    },
    listener: function ()
    {
        console.log(Snak.display());
        Snak.attachHandlers();
    },
    attachHandlers: function ()
    {
        Snak.View.buttonStart.onclick = "Snak.Controller.StartStop()";
		Snak.View.buttonTurnLeft.onclick = "Snak.Controller.turnLeft(Snak.Model.directon)";
		Snak.View.buttonTurnRight.onclick = "Snak.Controller.turnRight('Right')";
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
        //s += path;
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
    },
    */


    Model:
    {
        x: 0,
        y: 20,
        isRun: false,
        directon: "RIGHT",
        canvas: 0,
        path:0,
        //var canvas = document.getElementById("Canvas");
        //path = canvas.getContext("2d"),
        //path.fillStyle = "#FF0000",
        //path.fillRect(50,50,10,10),
    },
    
    View:
    {
        buttonStart: { id: "buttonStart", type: "button", value: "Start", onclick: "" },
		buttonTurnLeft: { id: "buttonTurnLeft", type: "button", value: "TurnLeft", onclick: "" },
		buttonTurnRight: { id: "buttonTurnRight", type: "button", value: "TurnRight", onclick: "" },
    },

    Controller:
    {
        startStop: function ()
        {
            Snak.Mdoel.fillStyle = "#FF0000";
            Snak.Model.fillRect(50,50,10,10);
        },

        turnLeft: function (direc)
        {
            if (direc == 'RIGHT')
            {
                Snak.Model.directon = "UP";
            }
            else if (direc == 'LEFT')
            {
                Snak.Model.directon = "DOWN";
            }
            else if (direc == 'UP')
            {
                Snak.Model.directon = "LEFT";
            }
            else if (direc == 'DOWN')
            {
                Snak.Model.directon = "RIGHT";
            }

        },

        turnRight: function (direc)
        {
            if (direc == 'RIGHT')
            {
                Snak.Model.directon = "DOWN";
            }
            else if (direc == 'LEFT')
            {
                Snak.Model.directon = "UP";
            }
            else if (direc == 'UP')
            {
                Snak.Model.directon = "RIGHT";
            }
            else if (direc == 'DOWN')
            {
                Snak.Model.directon = "LEFT";
            }
        },

        
    },

}