
function validation()
{
    imgShow();
    return false;  
}

imgShow()
{
    first = document.getElementById("firstName").value;
    if(onlyNumLetter(first))
    {
        showCorrect("firstName");
    }
    else
    {
        showWrong("firstName");
    }
    last = document.getElementById("lastName").value;
    if(onlyNumLetter(last))
    {
        showCorrect("lastName");
    }
    else
    {
        showWrong("lastName");
    }
    gender = document.getElementById("gender").value;
    if(notEmpty(gender))
    {
        showCorrect("gender");
    }
    else
    {
        showWrong("gender");
    }
    state = document.getElementById("state").value;
    if(notEmpty(state))
    {
        showCorrect("state");
    }
    else
    {
        showWrong("state");
    }
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