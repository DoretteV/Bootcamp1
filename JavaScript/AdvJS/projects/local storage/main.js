//How to use local Storage with JavaScript
//must stingify objects before we store them in the local storage.

    function store() {      //stores items in the localStorage
    let brand = document.getElementById('carBrand').value;
    let price = document.getElementById('carPrice').value;
    let key = document.getElementById('key').value;         //gets the key from the user

    const car = {
        brand: brand,
        price: price,
    }
    window.localStorage.setItem(key, JSON.stringify(car));
    //converting object to a string
}

function retrieveRecords() {        //retrieves items in the localStorage
    console.log("retrieve records");
    let key = document.getElementById('retrieveKey').value;
    let records = window.localStorage.getItem(key);
    let paragraph = document.createElement("p");            //creates a new paragraph
    let infor = document.createTextNode(records);           //helps create the text that will be displayed to the user
    paragraph.appendChild(infor);                           //text node is added to the paragraph
    let element = document.getElementById("retrieve");
    element.appendChild(paragraph);
    //these components are then shown in a specific place on the web page by document.getElementById("retrieve")
    //and element.appendChild(paragraph)
}

//removeButton invokes removeItem(). This method will delete a value from the local storage using the removeItem function
function removeItem() {                     //deletes item from localStorage
    let key = document.getElementById("removeKey").value;
    localStorage.removeItem(key);
    console.log("remove items");
}

//clearButton calls the clearStorage(). The clear() method is used to remove all values in the local storage.
function clearStorage() {       //clears the entire localStorage
    localStorage.clear();
    console.log("clear records");
}

//lets see the onClick property of all the buttons when the webpage loads
window.onload = function() {
    document.getElementById("carForm").onsubmit = store
    document.getElementById("clearButton").onclick = clearStorage
    document.getElementById("removeButton").onclick = removeItem
    document.getElementById("retrieveButton").onclick = retrieveRecords
}