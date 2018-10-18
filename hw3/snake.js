var Snak =
{
    run: function ()
	{
        Snak.init();

        document.getElementById("buttonStart").onclick = Snak.Controller.startStop;
        document.getElementById("buttonTurnLeft").onclick = Snak.Controller.turnLeft;
        document.getElementById("buttonTurnRight").onclick = Snak.Controller.turnRight;
        // Snak.View.buttonStart.onclick = "Snak.Controller.startStop()";
        // Snak.View.buttonTurnLeft.onclick = "Snak.Controller.turnLeft(Snak.Model.direction)";
        // Snak.View.buttonTurnRight.onclick = "Snak.Controller.turnRight(Snak.Model.direction";
        
        Snak.Model.interval = setInterval(Snak.listener, 10);
    },
    listener: function ()
    {
        console.log(Snak.Model.isRun);
        if (Snak.Model.isRun)
        {
            Snak.Controller.draw();
        }
    },

    init: function ()
    {
        Snak.Model.canvas = document.getElementById("Canvas");
        Snak.Model.path = Snak.Model.canvas.getContext("2d");
    },

    Model:
    {
        row: 0,
        col: 200,
        direction: "RIGHT",
        canvas: 0,
        path: 0,
        isRun: false,
        interval: 0,
    },
    
    
    // View:
    // {
    //     buttonStart: { id: "buttonStart", type: "button", value: "Start", onclick: "" },
	// 	buttonTurnLeft: { id: "buttonTurnLeft", type: "button", value: "TurnLeft", onclick: "" },
    //     buttonTurnRight: { id: "buttonTurnRight", type: "button", value: "TurnRight", onclick: "" },
    // },

    Controller:
    {
        draw: function ()
        {
            if (Snak.Model.direction == "UP")
            {
                Snak.Model.col -= 1;
                Snak.Model.path.fillStyle = "#FF0000";
                Snak.Model.path.fillRect(Snak.Model.row,Snak.Model.col,10,10);
            }
            else if (Snak.Model.direction == "DOWN")
            {
                Snak.Model.col += 1;
                Snak.Model.path.fillStyle = "#FF0000";
                Snak.Model.path.fillRect(Snak.Model.row,Snak.Model.col,10,10);
            }
            else if (Snak.Model.direction == "LEFT")
            {
                Snak.Model.row -= 1;
                Snak.Model.path.fillStyle = "#FF0000";
                Snak.Model.path.fillRect(Snak.Model.row,Snak.Model.col,10,10);
            }
            else if (Snak.Model.direction == "RIGHT")
            {
                Snak.Model.row += 1;
                Snak.Model.path.fillStyle = "#FF0000";
                Snak.Model.path.fillRect(Snak.Model.row,Snak.Model.col,10,10);
            }

            if (!Snak.Controller.is_inside())
            {
                clearInterval(Snak.Model.interval);
                alert("Your are doomed!");
                return;
            }
        },

        startStop: function ()
        {
            Snak.Model.isRun = !Snak.Model.isRun;
        },

        turnLeft: function ()
        {
            console.log("turnLeft");
            if (Snak.Model.direction == "RIGHT")
            {
                Snak.Model.direction = "UP";
            }
            else if (Snak.Model.direction == "LEFT")
            {
                Snak.Model.direction = "DOWN";
            }
            else if (Snak.Model.direction == "UP")
            {
                Snak.Model.direction = "LEFT";
            }
            else if (Snak.Model.direction == "DOWN")
            {
                Snak.Model.direction = "RIGHT";
            }
        },

        turnRight: function ()
        {
            console.log("turnRight");
            if (Snak.Model.direction == "RIGHT")
            {
                console.log("direction change to DOWN");
                Snak.Model.direction = "DOWN";
            }
            else if (Snak.Model.direction == "LEFT")
            {
                Snak.Model.direction = "UP";
            }
            else if (Snak.Model.direction == "UP")
            {
                Snak.Model.direction = "RIGHT";
            }
            else if (Snak.Model.direction == "DOWN")
            {
                Snak.Model.direction = "LEFT";
            }
        },

        is_inside: function ()
        {
            return Snak.Model.row > 0 &&
            Snak.Model.col > 0 &&
            Snak.Model.row < Snak.Model.canvas.width-1 &&
            Snak.Model.col < Snak.Model.canvas.height-1;
        },

    },

}