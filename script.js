console.log('JS sourced');

$(document).ready(onReady);

function onReady(){
    $('.generateButton').on('click', generateClick);
    $('body').on('click','.swapButton',resetColor);
    $('body').on('click','.deleteButton', deleteStuff );
}
var clickCounter = 0; //created a variable to have a click number value

function generateClick(){
    clickCounter++
    $('body').append('<div class="mainDiv"><p class="mainP">' + clickCounter + '<button class="swapButton">Swap</button><button class="deleteButton">Delete</button></p></div>'); //incremented each time button was clicked
}

function resetColor() {
    $(this).parent().toggleClass('yellow');        
};

function deleteStuff() {
    $(this).parent().remove();
}
//To get the Swap Button to change background to yellow, I did this....
// $('.swapButton').on('click', function(){
//     $('.swapButton').parents().css('background-color','yellow');        
// });
//DIDN'T WORK
// changed $('.swapButton') to $('button')....DIDN'T WORK

