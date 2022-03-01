var header1 = document.querySelector("#One")
var header2 = document.querySelector("#Two")
var header3 = document.querySelector("#Three")
var header4 = document.querySelector("#Four")
var header5 = document.querySelector("#Five")
var header6 = document.querySelector("#Six")
var header7 = document.querySelector("#Seven")
var header8 = document.querySelector("#Eight")
var header9 = document.querySelector("#Nine")

var restart = document.querySelector("#Res")

console.log('Connected')

restart.addEventListener('click',function(){
    header1.textContent = " "
    header2.textContent = " "
    header3.textContent = " "
    header4.textContent = " "
    header5.textContent = " "
    header6.textContent = " "
    header7.textContent = " "
    header8.textContent = " "
    header9.textContent = " "
})

header1.addEventListener('click',function(){
    header1.textContent = 'X'
})

header1.addEventListener('dblclick',function(){
    header1.textContent = 'O'
})


header2.addEventListener('click',function(){
    header2.textContent = 'X'
})

header2.addEventListener('dblclick',function(){
    header2.textContent = 'O'
})


header3.addEventListener('click',function(){
    header3.textContent = 'X'
})

header3.addEventListener('dblclick',function(){
    header3.textContent = 'O'
})


header4.addEventListener('click',function(){
    header4.textContent = 'X'
})

header4.addEventListener('dblclick',function(){
    header4.textContent = 'O'
})


header5.addEventListener('click',function(){
    header5.textContent = 'X'
})

header5.addEventListener('dblclick',function(){
    header5.textContent = 'O'
})


header6.addEventListener('click',function(){
    header6.textContent = 'X'
})

header6.addEventListener('dblclick',function(){
    header6.textContent = 'O'
})


header7.addEventListener('click',function(){
    header7.textContent = 'X'
})

header7.addEventListener('dblclick',function(){
    header7.textContent = 'O'
})


header8.addEventListener('click',function(){
    header8.textContent = 'X'
})

header8.addEventListener('dblclick',function(){
    header8.textContent = 'O'
})


header9.addEventListener('click',function(){
    header9.textContent = 'X'
})

header9.addEventListener('dblclick',function(){
    header9.textContent = 'O'
})
