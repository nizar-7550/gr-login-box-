let signup = document.getElementById("signup");
let signin = document.getElementById("signin");
let namefield = document.getElementById("namefield");
let title = document.getElementById("title");

signin.onclick = function () {
  namefield.style.maxHeight = "0";
  title.innerHTML = "sign in";
  signup.classList.add("cl");
  signin.classList.remove("cl");
};

signup.onclick = function () {
  namefield.style.maxHeight = "60px";
  title.innerHTML = "sign up";
  signup.classList.remove("cl");
  signin.classList.add("cl");
};
