
function validation1()
{
    if (check())
    {
        //go next page
    }
    return false;
}

function check()
{
    var pass = false;
    first = document.getElementById("firstName").value;
    if(alphanumeric(first))
    {
        showCorrect("firstNameimg");
        pass = true;
    }
    else
    {
        showWrong("firstNameimg");
        pass = false;
    }
    last = document.getElementById("lastName").value;
    if(alphanumeric(last))
    {
        showCorrect("lastNameimg");
        pass = true;
    }
    else
    {
        showWrong("lastNameimg");
        pass = false;
    }
    gender = document.getElementById("gender").value;
    if(notEmpty(gender))
    {
        showCorrect("genderimg");
        pass = true;
    }
    else
    {
        showWrong("gender");
        pass = false;
    }
    state = document.getElementById("state").value;
    if(notEmpty(state))
    {
        showCorrect("stateimg");
        pass = true;
    }
    else
    {
        showWrong("stateimg");
        pass = false;
    }

    return pass;
}

function alphanumeric(str)
{
    return str.matches("^[A-z0-9]+$");
}

function notEmpty(str)
{
    return !str=="";
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