var restart = document.querySelector("#Res")

var tdv = document.querySelectorAll('td')

function reset_all(){
    for(var i=0;i<tdv.length;i++){
        tdv[i].textContent = ' '
    }
}

restart.addEventListener('click',reset_all)

function changeMarker(){
    if(this.textContent ===''){
        this.textContent = 'X';
    }else if(this.textContent === 'X'){
        this.textContent = 'O';
    }else{
        this.textContent = '';
    }
}

for(var k=0;k< tdv.length; k++){
    tdv[k].addEventListener('click', changeMarker)
}

// var cellOne = document.querySelector("#One")
// cellOne.addEventListener('click', function(){
//     if(cellOne.textContent === ''){
//         cellOne.textContent = 'X';
//     }else if(cellOne.textContent === 'X'){
//         cellOne.textContent = 'O';
//     }else{
//         cellOne.textContent = '';
//     }
// })