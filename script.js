console.log("hello");



// TODO: Select all the inputs



function validate() {
    let inputs;
    inputs = document.querySelectorAll("form input");
    for (let input of inputs) {
        if (input.value === "") {
            input.style.border = "solid red";
        } else {
            input.style.border = "solid green";
        }
    }

    // detect if the input has a & or * character in it.
     for (let input of inputs) {
        for(let alpha of input.value) {
            if(alpha === '&') {
                input.style.color = "gold";
            } else if(alpha === '*') {
                input.style.color = "gold";
            } else {
                input.style.color = "black";
            }
        }
    }

    // detect if a VIP name is in the inputs

    for (let input of inputs) {
        let vips = [
            "Robert", "Lynndale", "Laqwanda", "Isabella", "Jeremie", "Delta", "Jordan", "Kenyada"
        ];
        for(let name of vips){
            if(input.value.toLowerCase() === name.toLowerCase()) {
                input.style.color = "goldenrod";
            }
        }
    }

    // for (let input of inputs){
    //     if () {
            
    //     }
    // }
    // for (let input of inputs) {
    //     if(){
            
    //     }
    // }
    
    for(let input of inputs) {
        if(input.value=== "lynndale") 
        input.style.border="light green"}
    
    
    for(let input of inputs) {
      if(input.value === "abcd") {
        input.style.border="solid purple"      
      }   
    }

    for(let input of inputs){
        input.style.border = "solid " + input.value;
    }
    
    for(let input of inputs){
       if(input.value === "Robert") {
        input.style.border="solid cornflowerblue";
       }    
    }
    for(let input of inputs) {
        if(input.value === "Delta") {
            input.style.border = "solid blue"
        }
    }

}    
let button = document.querySelector('#my-button');
button.onclick = validate;