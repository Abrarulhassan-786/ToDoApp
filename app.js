var textValue = document.getElementById("textTodo");
// var ulli = document.getElementById("UlList");
var ulli = document.createElement("ol");
ulli.setAttribute("id","UlList");
var conttainerlist = document.getElementById("containerList");
conttainerlist.appendChild(ulli);
function addList(){
    

    //---Create LI LIST IN UL----
    var createLi = document.createElement("li");
    var textLi = document.createTextNode(textValue.value);


    //----Create Delete Button------
    var delBtn = document.createElement("button");
    var delBtnText = document.createTextNode("Delete");
    delBtn.setAttribute("onclick","deleteValue(this)")
    delBtn.setAttribute("id","deleteItem")

    //----create Update Button----
    var updateBtn = document.createElement("button");
    var textUpdate = document.createTextNode("Update");
    updateBtn.setAttribute("onclick","editValue(this)")
    updateBtn.setAttribute("id","editvalue")
    

    updateBtn.appendChild(textUpdate)
    createLi.appendChild(textLi);
    ulli.appendChild(createLi);
    delBtn.appendChild(delBtnText);
    createLi.appendChild(delBtn);
    createLi.appendChild(updateBtn);

    console.log(createLi)
    textValue.value = "";
}

//-----Delete All Whole List -------
function deleteAll(){
    ulli.innerHTML = " ";
}

//-----Delete Specific List------
function deleteValue(e){
    e.parentNode.remove()
}

//---Edit Each List ------
function editValue(e){
    var val = prompt("Enter You Update Vlaue ",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = val
}