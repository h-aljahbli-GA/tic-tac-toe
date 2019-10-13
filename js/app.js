// moveNum is a counter for move number, game checks for winner at move 6
let moveNum = 1;


// selector for boxes
const $box1 = $("#box1");
const $box2 = $("#box2");
const $box3 = $("#box3");
const $box4 = $("#box4");
const $box5 = $("#box5");
const $box6 = $("#box6");
const $box7 = $("#box7");
const $box8 = $("#box8");
const $box9 = $("#box9");


// this function changes the box to x or o based on madulo of moveNum
const addPlay = function() {
    // plays O then remove listner for played box
    if (moveNum % 2 == 0) {
        $(this).text("O");
        $(this).addClass("o");
        $(this).off();
        moveNum += 1;
        if (moveNum > 5) {
            checkForWin()
        }
        
    } else {
        // plays X then remove listner for played box
        $(this).text("X");
        $(this).addClass("x");
        $(this).off();
        moveNum += 1;
        if (moveNum > 5) {
            checkForWin()
        }
    }
}

const checkForWin = function () {
    // check rows
    if (($($box1).text() == 'X' && $($box2).text()=="X" && $($box3).text()=="X") || ($($box4).text() == 'X' && $($box5).text()=="X" && $($box6).text()=="X") || ($($box7).text() == 'X' && $($box8).text()=="X" && $($box9).text()=="X")) {

        alert("X wins")
       
    } else if (($($box1).text() == 'O' && $($box2).text()=="O" && $($box3).text()=="O") || ($($box4).text() == 'O' && $($box5).text()=="O" && $($box6).text()=="O") || ($($box7).text() == 'O' && $($box8).text()=="O" && $($box9).text()=="O")) {

        alert("O wins")

     // check columns   
    } else if (($($box1).text() == 'X' && $($box4).text()=="X" && $($box7).text()=="X") || ($($box2).text() == 'X' && $($box5).text()=="X" && $($box8).text()=="X") || ($($box3).text() == 'X' && $($box6).text()=="X" && $($box9).text()=="X")) {

        alert("X wins")
        

    } else if (($($box1).text() == 'O' && $($box4).text()=="O" && $($box7).text()=="O") || ($($box2).text() == 'O' && $($box5).text()=="O" && $($box8).text()=="O") || ($($box3).text() == 'O' && $($box6).text()=="O" && $($box9).text()=="O")) {
        
        alert("O wins")
       
    // check diagonal
    } else if (($($box1).text() == 'X' && $($box5).text()=="X" && $($box9).text()=="X") || ($($box3).text() == 'X' && $($box5).text()=="X" && $($box7).text()=="X")) {

        alert("X wins")

    } else if (($($box1).text() == 'O' && $($box5).text()=="O" && $($box9).text()=="O") || ($($box3).text() == 'O' && $($box5).text()=="O" && $($box7).text()=="O")) {
        
        alert("O wins")
    }

    
    
}


// click event listners
$($box1).click(addPlay);
$($box2).click(addPlay);
$($box3).click(addPlay);
$($box4).click(addPlay);
$($box5).click(addPlay);
$($box6).click(addPlay);
$($box7).click(addPlay);
$($box8).click(addPlay);
$($box9).click(addPlay);