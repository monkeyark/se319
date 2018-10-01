var Snake =
{
    Model:
    {
        init: function () {
            var c = document.getElementById("Canvas");
            var ctx = c.getContext("2d");
            ctx.fillStyle = "#FF0000";
            ctx.fillRect(50,50,10,10);
        },
        
        
        
    },
    
    View:
    {
        
        document.getElementById("TurnLeftButton").onclick = function () { snake.ChangeDirection('Left') };
        document.getElementById("TurnRightButton").onclick = function () { snake.ChangeDirection('Right') };
        document.getElementById("ToggleStateButton").onclick = function () { snake.ToggleState() };
        
    },

    Controll:
    {

    },

}