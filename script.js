console.log("hello");

// TODO: create the table data
let tableHeadRow = [
    "Type",
    "Skill Level",
    "Time"
]
let tableRow1 = ["Djembe Drumming", "Beginner Level", "11:30-12:30"];

let tableRow2 = [
    "Djemebe Drumming",
    "Advanced Level",
    "12:30-1:30"
];

let tableRow3 = [
    "Gutair Lessons",
    "Beginner Level",
    "2:0-3:00"
];

let tableRow4 = [
    "Piano Lessons",
    "Advanced Level",
    "2:00 - 3:00",
]

let tableRow5 = [
    "Bugle Lessons",
    "Beginner Level",
    "3:05-4:05",
];

let tableRows = [
    tableHeadRow,
    tableRow1,
    tableRow2,
    tableRow3,
    tableRow4,
    tableRow5
]


// TODO: select the table from the DOM
let tableElm;
tableElm = document.getElementById("lessons-table-2");


// TODO: create the tr elements with a for loop
// First, loop through the tableRows array with a for loop.
for (let tableRow of tableRows) {
   console.log(tableRow);
   // tableRows[0] is ["type", "Skill Level", "time"]
   // tableRows[1] is ["Djumbe Dumming", "Beginner Level", "11:30-12:30"]
   let tr = document.createElement("tr");
   for (let tableData of tableRow){
     // tr.textContent = tableRow[0];
     // tableRow[0] is Trumpet Lesson
     // tableRow[1] is Beginer Level
     // tableRow[2] is 3:00-4:00
    let td = document.createElement("td");
    td.textContent = tableData;
    tr.appendChild(td);
   }   
   tableElm.appendChild(tr);
}


// TODO: create the td elements with a for loop

// TODO: Select all the inputs

// detect if a VIP name is in the inputs
function isVip(value){
    let vips = [
        "Robert", "Lynndale", "Laqwanda", "Isabella", "Jeremie", "Delta", "Jordan", "Kenyada"
    ];
    for(let name of vips){
        if(value.toLowerCase() === name.toLowerCase()) {
            console.log("Is VIP!!!")
            return true;
        }
    }  
    return false;
}

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

    for (let input of inputs) {
        console.log("input: " + input.value);
        if(isVip(input.value)){
            input.style.color = "goldenrod";
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
