//Write your Javascript code here
console.log("Shoppinglist");

function addNewLiElement(temp) {

    let liElem = document.createElement("li");
    liElem.setAttribute("id", "swagger");
    if (temp == "healthy") {
        liElem.className = "healthy";
        

    } else {
        liElem.className = "unhealthy"; 
    }

    let textNode = document.createTextNode("Anders!");
    liElem.appendChild(textNode); 
    return liElem;  
}