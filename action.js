function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == "" || password == "") {
    document.getElementById("message").innerHTML = "Please enter your username and password.";
  } else if (username != "admin" || password != "password") {
    document.getElementById("message").innerHTML = "Invalid username or password.";
  } else {
    document.getElementById("message").innerHTML = "Login successful!";
    // Add code to redirect to another page or perform other actions here
  }
}
