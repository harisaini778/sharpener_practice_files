// var form = document.getElementById("main-form");
// form.addEventListener("submit",runEvent);
// console.log(1);
// function runEvent(e1){
//     e1.preventDefault();
//     console.log(1);
    // var formControl = document.getElementById("main-form");
    // console.log(formControl);
    // formControl.addEventListener("keyup",copyText);
    // function copyText(e2) {
    //     e2.preventDefault();
    //     var text1 = document.getElementById("item1").value;
    //     var text2 = document.getElementById("item2").value;
    //     var result = text1.concat(" "+text2);
    //     var formSubmit = document.getElementById("main-form");
    //     formSubmit.addEventListener("submit",saveDetails);
    //     function saveDetails(e3){
    //         e3.preventDefault();
    //         console.log(1);
    //         console.log(e3.target.value);
    //     }
    //     console.log(result);
    // }
//     var val1 = document.getElementById("item1").value;
//     var val2 = document.getElementById("item2").value;
//     console.log(val1);
//     console.log(val2);
//     console.log(2);
//     localStorage.setItem(val1,val2);
// }
var form = document.getElementById("main-form");
form.addEventListener("submit",copyText);
function copyText(e1){
    e1.preventDefault();
    var val1 = document.getElementById("item1").value;
    var val2 = document.getElementById("item2").value;
    //localStorage.setItem(val1,val2);
    let myObj = {
    fullName:"val1",
    validEmail:"val2"
    };
    //localStorage.setItem("obj",myObj);
    let myObjSerialised = JSON.stringify(myObj);
    localStorage.setItem("obj",myObjSerialised);
    //console.log(myObjSerialised);
    let myObjDeserialised = JSON.parse(localStorage.getItem("obj"));
    console.log(myObjDeserialised);
    var result = val1.concat(" "+val2);
    var result1 = result.toLowerCase();
    console.log(result1);
    document.getElementById("item1").value = " ";
    document.getElementById("item2").value = " ";
}