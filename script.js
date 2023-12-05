console.log("hello");



// TODO: Select all the inputs



function validate() {
    let inputs;
    inputs = document.querySelectorAll("form input");
    for (let elm of inputs) {
        if (elm.value === "") {
            elm.style.border = "solid red";
        } else {
            elm.style.border = "solid green";
        }
    }
}

let button = document.querySelector('#my-button');
button.onclick = validate;

