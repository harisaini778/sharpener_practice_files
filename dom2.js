var form = document.getElementById("addForm");
form.addEventListener("submit",copyText);
function copyText(e1){
    e1.preventDefault();
    var val1 = document.getElementById("item1").value;
    var val2 = document.getElementById("item2").value;
    var result = val1.concat(" "+val2);
    var result1 = result.toLowerCase();
    console.log(result1);
    var itemList = document.getElementById("items");
    var li = document.createElement("li");
    li.className="list-group-item";
    var text1 = document.createTextNode(result1);
    li.appendChild(text1);
    var button1 = document.createElement("button1");
    button1.className="btn btn-danger btn-sm float-right delete";
    var text2 = document.createTextNode("X");
    var button2 = document.createElement("button");
    button2.className="btn btn-secondary";
    var text3 = document.createTextNode("Edit");
    button2.appendChild(text3);
    li.appendChild(button2);
    button1.appendChild(text2);
    li.appendChild(button1);
    itemList.appendChild(li);
}
var filter = document.getElementById("filter");
filter.addEventListener("keyup",filterItem);
function filterItem(e2){
    //e2.preventDefault();
    var text4 = e2.target.value;
    var result2 = text4.toLowerCase();
    console.log(result2);
    var listItems = document.getElementsByTagName('li');
    var listItems1 = Array.from(listItems);
    console.log(listItems1);
    listItems1.forEach(myFunction);
    function myFunction(e3){
    var itemName =  e3.firstChild.textContent;
    //console.log(itemName);
    if(itemName.toLowerCase().indexOf(result2)!=-1){
        e3.style.display = "block";
    }
    else{
        e3.style.display = "none";
    }
    }

}


