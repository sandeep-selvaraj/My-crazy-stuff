function getRandomColor(){
    var letters = "0123456789ABCDEF";
    var color = '#';
    for (var i=0;i<6;i++){
        color += letters[Math.floor(Math.random()*16)];
    }
    return color
}

myheader = document.querySelector('h1')

myheader.style.color = 'red';

function changeHeaderColor(){
    colorInput = getRandomColor()
    myheader.style.color = colorInput;
}

setInterval("changeHeaderColor()", 500);