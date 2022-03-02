// $('span').eq(0).toggleClass('turnBlue')

var pl1 = prompt('Enter player 1 name: ');
var pl2 = prompt('Enter player 2 name: ');

// console.log(pl1+' and '+pl2+' are logged in!');
// check

$('h3').text(pl1+': Its your Turn') 

$('span').on('click',function(){
    $('h3').toggle(function(){
        $('h3').text(pl2+': Its your Turn')
    }, function(){
        $('h3').text(pl1+': Its your Turn')
        }
    )
})