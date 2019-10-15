// moveNum is a counter for move number, game checks for winner at move 6
let moveNum = 1;
let playerOneScore = 0;
let playerTwoScore = 0;


// header selectors
const $player = $("#player");
const $playerOneScore = $("#playerOneScore");
const $playerTwoScore = $("#playerTwoScore");


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


const $restartButton = $("#restart")


// popup selector set to hide untill told to show
const $dialog = $( "#dialog" ).dialog({ 
    autoOpen: false,
    dialogClass: "no-close",
    buttons: [
        {
          text: "Play again",
          id: "resetButton",
          click: function() {
            reset()
            $( this ).dialog( "close" );

          }
        }
    ]
 });

$( "#opener" ).click(function() {
    $(  ).dialog( "open" );
});
  

// array for selectors
const selectorArray = [$box1, $box2, $box3, $box4, $box5, $box6, $box7, $box8, $box9]


// this function changes the box to x or o based on madulo of moveNum
const addPlay = function() {
    // plays O shows player going next, then remove listner for played box
    if (moveNum % 2 == 0) {
        $(this).text("O");
        $(this).addClass("o");
        $(this).css("background-color", "");
        $(this).off();
        moveNum += 1;
        $($player).removeClass("o");
        $($player).toggleClass("x");
        $($player).text("X");
        if (moveNum > 5) {
            checkForWin()
        }
        
    } else {
        // plays X, shows player going next, remove listner for played box
        $(this).text("X");
        $(this).addClass("x");
        $(this).css("background-color", "");
        $(this).off();
        moveNum += 1;
        $($player).removeClass("x");
        $($player).toggleClass("o");
        $($player).text("O");
        if (moveNum > 5) {
            checkForWin()
        }
    }
}

const checkForWin = function () {
    // check rows
    if (($($box1).text() == 'X' && $($box2).text()=="X" && $($box3).text()=="X") || ($($box4).text() == 'X' && $($box5).text()=="X" && $($box6).text()=="X") || ($($box7).text() == 'X' && $($box8).text()=="X" && $($box9).text()=="X")) {

        xEndGame();
       
    } else if (($($box1).text() == 'O' && $($box2).text()=="O" && $($box3).text()=="O") || ($($box4).text() == 'O' && $($box5).text()=="O" && $($box6).text()=="O") || ($($box7).text() == 'O' && $($box8).text()=="O" && $($box9).text()=="O")) {

        oEndGame();

     // check columns   
    } else if (($($box1).text() == 'X' && $($box4).text()=="X" && $($box7).text()=="X") || ($($box2).text() == 'X' && $($box5).text()=="X" && $($box8).text()=="X") || ($($box3).text() == 'X' && $($box6).text()=="X" && $($box9).text()=="X")) {

        xEndGame();

    } else if (($($box1).text() == 'O' && $($box4).text()=="O" && $($box7).text()=="O") || ($($box2).text() == 'O' && $($box5).text()=="O" && $($box8).text()=="O") || ($($box3).text() == 'O' && $($box6).text()=="O" && $($box9).text()=="O")) {
        
        oEndGame();
       
    // check diagonal
    } else if (($($box1).text() == 'X' && $($box5).text()=="X" && $($box9).text()=="X") || ($($box3).text() == 'X' && $($box5).text()=="X" && $($box7).text()=="X")) {

        xEndGame();

    } else if (($($box1).text() == 'O' && $($box5).text()=="O" && $($box9).text()=="O") || ($($box3).text() == 'O' && $($box5).text()=="O" && $($box7).text()=="O")) {
        
        oEndGame();

    } else if (moveNum == 10){
        $dialog.text("DRAW!!");
        $dialog.dialog("open");
    }
}


const xEndGame = function () {
    playerOneScore += 1;
    $playerOneScore.text(playerOneScore);
    removeRemainingListeners();

    $dialog.text("X wins!!");
    $dialog.dialog("open");
}


const oEndGame = function () {
    playerTwoScore += 1;
    $playerTwoScore.text(playerTwoScore);
    removeRemainingListeners(); 


    $dialog.text("O wins!!");
    $dialog.dialog("open");
}


// function to remove any remaining listner in gameboard
const removeRemainingListeners = function () {
    for (let i = 0; i < selectorArray.length; i++) {
        selectorArray[i].off();        
    }
}


// add hove effect
const hoverOn = function () {
    $(this).css("background-color", "yellow");
}

const hoverOff = function () {
    $(this).css("background-color", "");
}


// function to reset gameboard
const reset = function() {
    for (let i = 0; i < selectorArray.length; i++) {
        selectorArray[i].click(addPlay);
        selectorArray[i].hover(hoverOn, hoverOff);
        selectorArray[i].text("");
        selectorArray[i].removeClass("o");
        selectorArray[i].removeClass("x");
    }
    $player.removeClass("o");
    $player.text("X");
    $player.addClass("x");
    moveNum = 1;
}


// reset button event listner
$($restartButton).click(reset);


// start program
reset()