function validation2()
{
    if (check())
    {
        //submit
    }
    return false;
}


function check()
{
    var pass = false;
    var email = document.getElementById("email").value;
    if (emailcheck(str))
    {
        showCorrect("email");
        pass = true;
    }
    else
    {
        showWrong("email");
        pass = false;
    }
    var tel = document.getElementById("tel").value;
    if (telcheck(tel))
    {
        showCorrect("tel");
        pass = true;
    }
    else
    {
        showWrong("tel");
        pass = false;
    }
    var add = document.getElementById("add").value;
    if (addresscheck(add))
    {
        showCorrect("add");
        pass = true;
    }
    else
    {
        showWrong("add");
        pass = false;
    }

    return pass;

}

function emailcheck(str)
{
    return str.matches("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$");
}

function telcheck(str)
{
    return str.matches("^[0-9]{3}-[0-9]{3}-[0-9]{4}|\d{10}$");
}

function addcheck(str)
{
    var pass = false;
    var i;
    for (i=0;i<str.length; i++)
    {
        if (str.charAt(i) == ',')
        {
            continue;
        }
        if (str[i].matches("^[A-za-z]$"))
        {
            pass = /^[a-z]+$/i.test(str);
        }
    }
}

function showCorrect(id)
{
    document.getElementById(id).hidden = false;
    document.getElementById(id).src = "correct.png";
}

function showWrong(id)
{
    document.getElementById(id).hidden = false;
    document.getElementById(id).src = "wrong.png";
}