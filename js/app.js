// moveNum is a counter for move number, game checks for winner at move 6
let moveNum = 0;


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
    $(this).css({"background-color": "yellow"})
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