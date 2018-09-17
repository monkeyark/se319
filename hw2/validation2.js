function validation2()
{
    if (check())
    {
        //submit
    }
    return false;
}

var address = document.getElementById("address").value;


function numeric(str)
{
    return str.matches("^[0-9]+$");
}

function alphanumeric(str)
{
    return str.matches("^[A-z0-9]+$");
}

