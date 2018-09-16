
function validation()
{
    if (imgShow())
    {
        //go next page
    }
    return false;
}

function imgShow()
{
    var pass = false;
    first = document.getElementById("firstName").value;
    if(onlyNumLetter(first))
    {
        showCorrect("firstName");
        pass = true;
    }
    else
    {
        showWrong("firstName");
        pass = false;
    }
    last = document.getElementById("lastName").value;
    if(onlyNumLetter(last))
    {
        showCorrect("lastName");
        pass = true;
    }
    else
    {
        showWrong("lastName");
        pass = false;
    }
    gender = document.getElementById("gender").value;
    if(notEmpty(gender))
    {
        showCorrect("gender");
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
        showCorrect("state");
        pass = true;
    }
    else
    {
        showWrong("state");
        pass = false;
    }

    return pass;
}

function onlyNumLetter(str)
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