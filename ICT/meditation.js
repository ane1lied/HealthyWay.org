
function display(event) {
  event.preventDefault();
  document.getElementById("demo").innerHTML = "You have successfully completed the form!";
}
document.getElementById("btn").addEventListener("click", display);


/*const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const location = document.getElementById("local");
const address= document.getElementById("address");
const number = document.getElementById("number");
const email = document.getElementById("email");
const birthday= document.getElementById("birthday");
const text = document.getElementById("demo");
const btn= document.getElementById("btn");

let all = [fname, lname, location, address, number, email, birthday];
btn.onclick.all.forEach(function(element){
  element.preventDefault();
  if (element == ""){
    document.getElementById("demo").innerHTML= "bad";
  }
  else{
    document.getElementById("demo").innerHTML= "cool";

  }
});*/
/*
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const location = document.getElementById("local");
const address = document.getElementById("address");
const number = document.getElementById("number");
const email = document.getElementById("email");
const birthday = document.getElementById("birthday");
const text = document.getElementById("demo");
const btn = document.getElementById("btn");

let all = [fname, lname, location, address, number, email, birthday];

btn.addEventListener("click", function (event) {
  event.preventDefault();

  let isFormValid = true;

  all.forEach(function (element) {
    if (element.value.trim() === "") {
      isFormValid = false;
    }
  });

  if (isFormValid) {
    text.innerHTML = "cool";
  } else {
    text.innerHTML = "bad: Please fill out all fields";
  }
});
*/
