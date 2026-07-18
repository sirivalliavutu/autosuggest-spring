alert("view profile")
// console.log("Hello from JS");

// data = {
//     "name" : "John",
//     "gender" : "Male"
// }

// data.name

var users = [
    {
        "name" : "John Doe",
        "gender" : "Male",
        "img" : "john.png"
    },
    {
        "name" : "Jane Doe",
        "gender" : "Female",
        "img" : "jane.png"
    }
]

var id = 0;

function toggleUser(){
    id = (id + 1)%2
    //get elements

    //1:image
    var userImage = document.getElementById("user-image");
    userImage.src = users[id].img;
    //1:name
    var userName = document.getElementById("user-name");
    userName.innerHTML = users[id].name;
    //1:gender
    var userGender = document.getElementById("user-gender")
    userGender.innerHTML = users[id].gender;
}