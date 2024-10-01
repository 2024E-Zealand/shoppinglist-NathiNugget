//Write your Javascript code here
console.log("Shoppinglist");
let fruits = ["Banana", "Apple", "Grapefruit", "Clementine", "Blackberry"]; 

let idx = 0; 
function createNewLiElement(temp) {

    let liElem = document.createElement("li");
    let listElem = document.getElementById('list'); 
    liElem.setAttribute("id", listElem.children.length);
    let properIdx = idx%fruits.length; 
    if (temp == "healthy") {
        liElem.className = "healthy";
        
        var textNode = document.createTextNode(fruits[properIdx]);

    } else {
        liElem.className = "unhealthy"; 
        var textNode = document.createTextNode(fruits[properIdx]);
    }
    liElem.appendChild(textNode); 
    idx++; 
    return liElem;  
}

function addLiElementToList(id, liElem){
    let list = document.getElementById(id); 
    let newElem = liElem; 
    list.appendChild(newElem); 
}

function changeHealthClass(id){
    let elem = document.getElementById(id); 
    if (elem.className == "healthy"){
        elem.className = "unhealthy"; 
    }
    else elem.className = "healthy";
}

function changeHealthClassOfLastElement(){
    let list = document.getElementById('list'); 
    let lastElem = list.children[list.children.length-1]; 
    if (lastElem.className == "healthy"){
        lastElem.className = "unhealthy";
    } else lastElem.className = "healthy"; 
}

function deleteElementFromList(index, list){
    let listToDeleteFrom = document.getElementById(list); 
    listToDeleteFrom.removeChild(listToDeleteFrom.children[index]);
}

function changeTextInFirstElement(val){
    document.getElementById("list").children[0].textContent = val;
}