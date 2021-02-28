var timeColumnText = document.querySelector('.hour').innerText
var currentTime = moment().format('H');
var blockTime = moment(timeColumnText, "h").format("H")
var descriptionEl = document.getElementsByTagName('textarea').innerText
////var past =
var saveButton = document.querySelector('btn')
var blockTimeNb = parseInt(blockTime);
var currentTimeNb = parseInt(currentTime);
//var inputText =
//local storage
// get current time from momentjs
//get rid of the seconds
//parse to a intiger - how to change to string to number
//number compareason <> . =


// How do I add/remove a class from an element html javascript



var hr9 = document.getElementsById("9amHr")
function (hr9){
    if (currentTimeNb < blockTimeNb){
        document.getElementById("9amHr").className=
        document.getElementById("9amHr").className.replace(/(?:^|\s)future(?!\S)/g, '');
            }
    if (currentTimeNb === blockTimeNb)
    document.getElementById("9amHr").className=
        document.getElementById("9amHr").className.replace(/(?:^|\s)current(?!\S)/g, '')
    //change to current 
        }


    
//store function
function storeItem(event){
    event.preventDefault();
  if(descriptionEl > 0){
    localStorage.setItem("ToDo", descriptionEl);
    document.getElementById("result").innerHTML = localStorage.getItem("ToDo");
     }};

saveButton.addEventListener("click",storeItem)