
set_greetings();



function set_greetings(){
    const e_greetings = document.getElementsByClassName("greetings");

    for(let i=0; i<e_greetings.length; i++){
        e_greetings[i].innerHTML = greetings();
    }
}

function greetings(){
    const d = new Date();
    let hour = d.getHours();
    let s = "Hello,";

    if(hour >= 5 && hour < 12){
        s = "Good morning,";
    }
    else if(hour >= 12 && hour < 18){
        s = "Good afternoon,"
    }
    else if(hour >= 18 && hour < 24){
        s = "Good evening,"
    }

    return s;
}




function print(variable){
    console.log(variable);
}