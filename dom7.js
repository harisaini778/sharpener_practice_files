var formDetails=document.getElementById("formData");
formDetails.addEventListener("submit",runEvent);
function runEvent(event){
    event.preventDefault();
    const name= event.target.username.value;
    const email = event.target.emailid.value;
    const phonenumber = event.target.phonenumber.value;
   const myObj = {
        name:name,
        email:email,
        phonenumber:phonenumber
    }
    var ulItems = document.getElementById("userList");
    var liItems = document.createElement("li");
    liText=document.createTextNode(`${JSON.stringify(myObj)}`);
    liItems.appendChild(liText);
    console.log(liItems);
    var liBtn = document.createElement("button");
    liBtnText = document.createTextNode("Delete");
    liBtn.appendChild(liBtnText);
    liItems.appendChild(liBtn);
    var editBtn = document.createElement("button");
    var editBtnText = document.createTextNode("Edit");
    editBtn.appendChild(editBtnText);
    liItems.appendChild(editBtn);
    ulItems.appendChild(liItems);
    localStorage.setItem(myObj.name,JSON.stringify(myObj));
    liBtn.addEventListener("click",deleteDetails);
    function deleteDetails(){
    localStorage.removeItem(myObj.name);
    ulItems.removeChild(liItems);
    }
    editBtn.addEventListener("click",editDetails);
    function editDetails(){
        document.getElementById("nameInputTag").value=myObj.name;
        document.getElementById("emailInputTag").value=myObj.email;
        document.getElementById("phonenumberInputTag").value=myObj.phonenumber;
        localStorage.removeItem(myObj.name);
        ulItems.removeChild(liItems);  
    }
}
