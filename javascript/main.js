let pass;

function initialize() 
{
    pass = document.getElementById("password");
}

function buttonGenerateClick()
{
    let lenght = document.getElementById("lenght").value;

    pass.value = generate(lenght);

    if(document.getElementById("copy").checked)
    {
        console.log(document.getElementById("copy").checked);

        CopyToClipboard();
    }
}

function generate(lenght)
{
    let password = "";

    letterAlph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    numAlph = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    specAlph = ["!", "@", "#", "$", "^", "&", "*"];

    for(let i = 0; i < lenght; i++)

    {
        if(rnd(5) == 1)
        {
            password += numAlph[rnd(numAlph.length)];
        }
        else if(rnd(10) == 1)
        {
            password += specAlph[rnd(specAlph.length)];
        }
        else
        {
            if(rnd(2) == 0)
            {
                password += letterAlph[rnd(letterAlph.length)];
            }
            else
            {
                password += letterAlph[rnd(letterAlph.length)].toUpperCase();

            }
        }
    }

    return password;
}

function CopyToClipboard()
{
    navigator.clipboard.writeText(document.getElementById("password").value);
}

function rnd(max) 
{
    return Math.floor(Math.random() * max);
}