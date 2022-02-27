var hot = false
var temp = 65

if (temp > 80){
    console.log("Temp is greater than 80");
    hot = true
}
else if( temp <= 80 && temp > 50){
    console.log("Moderate Temp");
}
else{
    console.log("Temp is lesser than 80");
}

console.log(hot)

var x = 0;

while(x < 5){
    console.log("x is currently: "+x);
    if(x == 3){
        console.log("X is EQUAL to 3, BYE!");
        break;
    }
    console.log("x is still less than 5, adding 1 to x");
    x = x + 1;
}
x = 1;

while(x <= 10){

    if( (x%2) == 0){
        console.log(x);
    }

    x = x + 1;
}

for (var i=0;i<5;i++){
    console.log("Hey there times"+i);
}

var word = "ABCDEFGH"

for (var i=0;i<word.length;i++){
    console.log(word[i]);
}