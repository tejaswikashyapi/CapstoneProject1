
//Capstone project-Tejaswi Kashyapi-Login and Registration Page

function cambiar_login() {
    document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";  
  document.querySelector('.cont_form_login').style.display = "block";
  document.querySelector('.cont_form_sign_up').style.opacity = "0";               
  
  setTimeout(function(){  document.querySelector('.cont_form_login').style.opacity = "1"; },400);  
    
  setTimeout(function(){    
  document.querySelector('.cont_form_sign_up').style.display = "none";
  },200);  
  }
  
  function cambiar_sign_up() {

   
    document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
    document.querySelector('.cont_form_sign_up').style.display = "block";
  document.querySelector('.cont_form_login').style.opacity = "0";

    
  setTimeout(function(){  document.querySelector('.cont_form_sign_up').style.opacity = "1";
  },100);  
 
  
  setTimeout(function(){   document.querySelector('.cont_form_login').style.display = "none";
  },400); 
  
 
   
}  

  
  
  function ocultar_login_sign_up() {
  
  document.querySelector('.cont_forms').className = "cont_forms";  
  document.querySelector('.cont_form_sign_up').style.opacity = "0";               
  document.querySelector('.cont_form_login').style.opacity = "0"; 
  
  setTimeout(function(){
  document.querySelector('.cont_form_sign_up').style.display = "none";
  document.querySelector('.cont_form_login').style.display = "none";
  },500); 
    
    }


  function validation_func()  {
      if (document.getElementById("username").value== "") {
       alert(" Name shouldn't be empty");
        return false;
      }
      if(!(/^[A-Za-z]+$/).test(document.getElementById("username").value)){
        alert("Only characters allowed");
        return false;
        } 
      if (!(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/).test(document.getElementById("email").value)) {
        alert("You have entered an invalid email address! \n Please enter in the form of name@email.com");
        return false;
      }
    //phone number format
      if(!(/^\d{10}$/).test(document.getElementById("phonenumber").value))
      {
      alert("Enter 10 digit number");
      return false;
      }
    //dropdown button validation
      if (document.getElementById('dropdown').value == "default") {
      alert("Please Select a valid option");
      return false;
      }
      if(!(/^[A-Za-z]\w{8,14}$/).test(document.getElementById("passwd").value)){
        alert("Password atleast 8 character and less than 14 character");
        return false;
      }
      if(document.getElementById("passwd").value != document.getElementById("cnf_passwd").value)  
      {   
      alert("Passwords did not match");
      return false;  
      }
        
        alert("Sign Up Sucessfull");
        window.location.reload();
        
  }

  function validation_func_login()  {
    if (!(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/).test(document.getElementById("rmail").value)) {
      alert("You have entered an invalid email address! \n Please enter in the form of name@email.com");
      return false;
    }

    if(!(/^[A-Za-z]\w{8,14}$/).test(document.getElementById("passwdr").value)){
      alert("Password atleast 8 character and less than 14 character");
      return false;
    }
    alert("Log In Sucessfull");
    window.location.reload();
    

  }


  