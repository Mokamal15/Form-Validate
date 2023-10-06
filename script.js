function formValidate(){
var username = document.getElementById("username").value;
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;
var confirm = document.getElementById("confirm").value;
var error = document.getElementById("error");
var text = "";

if(username.length < 5 ){

  text = "Please Enter Valid Username"
  error.innerHTML = text;
  return false; 
}

 else if(email.index0f("@gmail.com") == -1){
  text = "Please Enter Valid E-Mail"
  error.innerHTML = text;
  return false;
}
else if(password.length < 10){
  text = "Please Enter Valid Password"
  error.innerHTML = text;
  return false;
}
else if(confirm !== password ){
  text = "Please Enter Valid Confirm Password"
  error.innerHTML = text;
  return false;
}
else{
  alert ("Done");
}
}

