var q1_ans = prompt("Do you want to add an user? (y/n)")

var arr = []

function user_action(choice){
    if(choice == 'add'){
        var name = prompt("Enter a person first name only")
        arr.push(name)
    }
    else if(choice == 'display'){
        console.log(arr);
    }
    else if(choice == 'remove'){
        var name = prompt("Which name do you want to remove?")
        var index = arr.indexOf(name)
        arr.splice(index, 1)
    }
}

noexit = true;

if(q1_ans == 'y'){
    // console.log("Yes")
    while(noexit){
        var q2_ans = prompt("Please select an action add, remove, display or quit")
        if(q2_ans == 'quit'){
            noexit = false;
        }
        user_action(q2_ans);
    }
    
}
else if(q1_ans == 'n'){
    console.log("No")
}
else{
    console.log("Thank you!")
}

