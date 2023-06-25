function login(event) {
  event.preventDefault();

  var userEmail = document.getElementById("email").value;
  var userPassword = document.getElementById("password").value;
  var loginuser = {};

  var Ls = JSON.parse(localStorage.getItem("facebookuser"));

  var flag = false;
  for (var i = 0; i < Ls.length; i++) {
    if (Ls[i].userEmail == userEmail && Ls[i].userPassword == userPassword) {
      flag = true;
      loginuser = Ls[i];
    }
  }
  if (flag == true) {
    localStorage.setItem("fbCurrentUser", JSON.stringify(loginuser));

    alert("login successfull");
    window.location.href = `./home.html`;
  } 
}
