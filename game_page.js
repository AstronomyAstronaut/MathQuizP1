player1name = localStorage.getItem("player1name");
player2name = localStorage.getItem("player2name");

player1score = 0;
player2score = 0;

document.getElementById("player1name").innerHTML = player1name + " : ";
document.getElementById("player2name").innerHTML = player2name + " : ";

document.getElementById("player1score").innerHTML = player1score;
document.getElementById("player2score").innerHTML = player2score;

document.getElementById("playerquestion").innerHTML = "Question Turn : " + player1name;
document.getElementById("playeranswer").innerHTML = "Answer Turn : " + player2name;

function send()
{
    getword = document.getElementById("word").value ;
    word = getword.toLowerCase();

    charat1 = word.charAt(1);
    console.log(charat1);

    l2 = Math.floor(word.length/2);
    charat2 = word.charAt(l2);
    console.log(charat2);

    l1 = word.length - 1;
    charat3 = word.charAt(l1);
    console.log(charat3);

    r1 = word.replace(charat1, "_");
    r2 = r1.replace(charat2, "_");
    r3 = r2.replace(charat3, "_");
    console.log(r3);

    q = "<h4 id='word_display'>Q. "+r3+"</h4>";
    i = "<br> Answer: <input id='checkbox' type='text'>";
    c = "<br><br> <button class='btn btn-success' onclick='check()'>Check</button>";
    r = q + i + c;
    document.getElementById("output").innerHTML = r;
    document.getElementById("word").value = "";
}

question_turn = "player1";
answer_turn = "player2";

function check()
{
    getanswer = document.getElementById("checkbox").value;
    answer = getanswer.toLowerCase();

    if (answer == word)
    {
        if (answer_turn == "player1")
        {
            player1score = player1score + 1;
            document.getElementById("player1score").innerHTML = player1score;
        }
        else
        {
            player2score = player2score + 1;
            document.getElementById("player2score").innerHTML = player2score;
        }
    }

    if (question_turn == "player1")
    {
        question_turn = "player2";
        document.getElementById("playerquestion").innerHTML = "Question turn : " + player2name;
    }
    else
    {
        question_turn = "player1";
        document.getElementById("playerquestion").innerHTML = "Question turn : " + player1name;  
    }
    
    if (answer_turn == "player1")
    {
        answer_turn = "player2";
        document.getElementById("playeranswer").innerHTML = "Answer turn : " + player2name;
    }
    else
    {
        answer_turn = "player1";
        document.getElementById("playeranswer").innerHTML = "Answer turn : " + player1name;  
    }
    document.getElementById("output").innerHTML = "";
}