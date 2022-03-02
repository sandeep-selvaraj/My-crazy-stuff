$('h1').click(function(){
    // console.log("There was a click")
    $(this).text('I was changed!')
})

//Key Press
$('input').eq(0).keypress(function(){
    // $('h3').toggleClass('turnBlue');
    if(event.which === 13){
        $('h3').toggleClass('turnBlue');
    }
})

$('h1').on('click',function(){
    $(this).toggleClass('turnRed');
})

$('h2').on('mouseenter',function(){
    $(this).toggleClass('turnBlue');
})

$('input').eq(1).on('click', function(){
    $('.container').slideUp(3000);
})