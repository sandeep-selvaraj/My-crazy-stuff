var countries = ['Usa', 'Germany', 'China']

var myArr = ['one', 'two', 'three']

var lastItem = myArr.pop()

var newItem = myArr.push('newitem')

for(pArr of myArr){
    console.log(pArr)
}

// for(pArr of countries){
//     alert(pArr)
// }

// below code same as above
// array.forEach(function)
myArr.forEach(alert);

function addAwesome(name){
    console.log(name+" is awesome");
}

var topics = ['python', 'django', 'science']

topics.forEach(addAwesome)