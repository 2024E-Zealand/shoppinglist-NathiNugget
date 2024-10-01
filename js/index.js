//Write your Javascript code here
console.log("Shoppinglist");
let fruits = ["Banana", "Apple", "Grapefruit", "Clementine", "Blackberry"]; 

let idx = 0; 
function createNewLiElement(temp) {

    let liElem = document.createElement("li");
    liElem.setAttribute("id", "swagger");
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