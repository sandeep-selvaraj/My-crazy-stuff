function hello(){
    console.log("Hello World!");
}

hello()


function helloYou(name){
    console.log("Hello "+name+"!");
}

helloYou("Sandeep");

function addNum(num1, num2){
    console.log(num1+num2);
}

addNum(2,3)

function helloSomone(name="Frankie"){
    console.log("Hello "+name)
}

function formal(name="Sam", title='Sir'){
    console.log(title+" "+name);
}

function retformal(name="Sam", title='Sir'){
    return title+" "+name;
}