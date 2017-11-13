console.log('JS sourced');

$(document).ready(function() {
    console.log('working!');
var clickCounter = 1; //created a variable to have a click number value
    
    $('#generateButton').on('click',function(){
        $('body').append('<div id="mainDiv"><p id="mainP">' + clickCounter++ + '<button>Swap</button>' + '<button>Delete</button>' + '</p></div>'); //incremented each time button was clicked
        $('#mainP').css('background-color','red');
    });

});


