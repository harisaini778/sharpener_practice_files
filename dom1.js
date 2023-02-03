// var form = document.getElementById('addForm');
// console.log(form);
// var itemList = document.getElementById("item");
// console.log(submit);
// form.addEventListener('submit',runEvent);
// function runEvent(e) {
// e.preventDefault();  
// var addItems = document.getElementById("item"); 
// var li = document.createElement("li");
// li.className="list-group-item";
// var text = document.createTextNode(addItems);
// li.appendChild(text);
// itemList.appendChild(li);
// }
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
//var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
//itemList.addEventListener('click', removeItem);
// Filter event
//filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;
  console.log(newItem);

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  itemList.appendChild(li);
  console.log(itemList);
  var deleteBtn = document.createElement("button");
deleteBtn.className = "btn btn-danger btn-sm float-right delete";
deleteBtn.appendChild(document.createTextNode("X"));
li.appendChild(deleteBtn);
itemList.appendChild(li);
}
console.log(itemList);
itemList.addEventListener("click",removeItem);
function removeItem(e) {
    console.log(e.target.classList.contains('delete'));
    console.log(e.target.parentElement);
   // console.log(e.target.children);
    if(e.target.classList.contains('delete')) {
        if(confirm("Are you sure?")) {
            var list = e.target.parentElement;
            console.log(list);
            itemList.removeChild(list)
        }
    }
}
var filter = document.getElementById("filter");
filter.addEventListener("keyup",filterEvent);
function filterEvent(e) {
    // console.log(e.type);
    // console.log(e.target.value);
    // var text1 = e.type;
    // var text2 = e.target.value;
    // var text3 = text2.toLowerCase();
    var text = e.target.value.toLowerCase();
    var items2 = document.getElementsByTagName('li');
    console.log(items2);
    // Array.from(items2).forEach(myFunction(n2){
    // var itemName1 = n2.firstChild.textContent;
    // console.log(itemName1);
    // });
    // console.log(items3);
    Array.from(items2).forEach(myFunction);
    function myFunction(n2) {
        var itemName = n2.firstChild.textContent;
        console.log(itemName);
        var itemName2 = n2.lastChild.textContent;
        console.log(itemName2);
        if(itemName.toLowerCase().indexOf(text)!=-1){
            n2.style.display = "block";
        }
        else {
            n2.style.display="none"
        }
    }
}


