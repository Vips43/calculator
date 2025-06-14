let display = document.getElementById('outputscreen');
let prev = document.getElementById('out');

function myFunction(input){
    if(display.value.startsWith('0',0)){  //prevents user from start number with '0'
        display.value = "";
    }
    else if(display.value.startsWith('%',0)){  //prevents user from start number with '%'
        display.value = "";
    }
    else if(display.value.startsWith('/',0)){  //prevents user from start number with '/'
        display.value = "";
    }
    else if(display.value.startsWith('*',0)){  //prevents user from start number with '*'
        display.value = "";
    
    }
    else{  // take user input
        display.value += input;
        // prev.value = display.value;

    }
}
function prevClear(){
    prev.value = "";
}

// clear display function it clear a display once

function clearDisplay(){
    display.value = "";
}

// removes a number from last like back spcae


function backSpace(){   
    
    display.value = display.value.slice(0,-1);
}

// calculate function when user press = button it gives ouput
function calc(){
    try{
        prev.value = display.value;
        if(display.value == ''){

        }
        var result = eval(display.value);
        display.value = '=' + result;
        
    }
    //  error catching when user enter inapropriate value it says eror   
    catch(err){
        display.value ="error";
    }
}

   document.addEventListener('dblclick',function(e){
e.preventDefault();
}