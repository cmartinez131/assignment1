

const button = document.getElementById("myButton");
const body = document.getElementsByTagName("body")[0];

button.addEventListener("click", function() {
  if (body.style.color == "black") {
    //button.style.backgroundColor = "yellow";
    body.style.color="yellow";
  } else {
    // button.style.backgroundColor = "black";
    // button.style.color = "white";
    body.style.color="black";
  }
});

// const button = document.getElementById("myButton");

// button.addEventListener("click", function() {
//   if (button.style.backgroundColor === "red") {
//     button.style.backgroundColor = "blue";
//   } else {
//     button.style.backgroundColor = "red";
//   }
// });