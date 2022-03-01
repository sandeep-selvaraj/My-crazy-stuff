var carInfo = {make:"Toyota", year:1990, model:"Camry"};

carInfo['make']

for (key in carInfo){
    console.log(carInfo[key])
}

var simple = {
    prop : "Hello",
    myMethod : function(){
        console.log(this.prop)
    },
    setmethod : function(newWord){
        this.prop = newWord;
    }
}