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
    var userGender = document.getElementById("user-gender");
    userGender.innerHTML = users[id].gender;
}

function randomUser(){
    fetch('https://randomuser.me/api/')
        .then(function(response){
            //convert raw text to json
            return response.json();
        })
        .then(function(data){
            
            var userData = data.results[0];

            //1:image
            var userImage = document.getElementById("user-image");
            userImage.src = userData.picture.large;

            //1:name
            var userName = document.getElementById("user-name");
            userName.innerHTML = userData.name.first + " " + userData.name.last;

            //1:gender
            var userGender = document.getElementById("user-gender");
            userGender.innerHTML = userData.gender;
        })
        .catch(function(err){
            console.log(err);
        })
}