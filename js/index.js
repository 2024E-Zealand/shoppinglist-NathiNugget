//Write your Javascript code here
console.log("Shoppinglist");
let fruits = ["Banana", "Apple", "Grapefruit", "Clementine", "Blackberry"]; 
let badGroceries = ["Marshmellows", "Beer", "Chips", "Soda", "Noodles"]; 

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

function countElementsInList(id){
    let list = document.getElementById(id); 
    alert("Elements in list: " + list.children.length)
    return list.children.length; 
}

function moveElementsToNewList(oldList, newList){
    let oList = document.getElementById(oldList); 
    let nList = document.getElementById(newList); 
    
    let itemsToMove = Array.from(oList.children).filter(e => e.className == "unhealthy"); 
    itemsToMove.forEach((element) => {
        nList.append(element); 
    });
}

function createLiElement(text, tList) {

    let liElem = document.createElement("li");
    let listElem = tList; 
    liElem.setAttribute("id", listElem.children.length);
    let properIdx = idx%fruits.length; 
    var textNode = document.createTextNode(text);
    liElem.appendChild(textNode); 
    if (fruits.includes(text)){
        liElem.setAttribute('class', 'healthy');
    } else if (badGroceries.includes(text)){
        liElem.setAttribute('class','unhealthy');
    }
    listElem.appendChild(liElem);
    liElem.addEventListener('click', e => {
        makeInvisible(liElem);
    });
    return liElem; 
}

function addToList(){
    let textValue = document.getElementById('InputText').value; 
    let list = document.getElementById('list');
    createLiElement(textValue, list);
}

function addBtnEventListener(id){
    let btn = document.getElementById(id);

    btn.addEventListener('click', e => addToList());
}

addBtnEventListener('itemButton');


function nextUniqeueNumber(tList){
    let list = document.getElementById(tList); 
    let elems = [].slice.call(list.children);
    let IDlist = [];
    elems.forEach((elem) => {
        if (!IDlist.includes(elem.id)){
            IDlist.push(elem.id);
            console.log(elem.id);
        }
    });
    return Math.max.apply(null,IDlist) + 1;
}

function makeInvisible(elem){
    elem.setAttribute('hidden','true');
}

function makeVisible(tList){
    let list = document.getElementById(tList);
    let col = list.children; 
    [].slice.call(col).forEach((elem) => {
        elem.removeAttribute('hidden');
    });
}

function addListeners(tList){
    let list = document.getElementById(tList); 
    let col = list.children; 
    console.log([].slice.call(col));
    [].slice.call(col).forEach((elem) => {
        elem.addEventListener('click', function() {
            makeInvisible(elem);
        }); 
    });
}

addListeners('list');



