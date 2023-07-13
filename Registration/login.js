function loginValidation(event){
    event.preventDefault();
    var email = document.getElementById("iemail").value;
    var pass = document.getElementById("ipass").value;

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;
    var passPattern =/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&_+><]).{6,20}/;
    
    if(!email.match(emailPattern)){
        document.getElementById("eemail").innerHTML="Invalid e-mail";
        return false;
    }else{
        document.getElementById("eemail").innerHTML="";

    }
    if (!pass.match(passPattern)){
        document.getElementById("epass").innerHTML="Atleast one digit,one uppercase,one lowercase & special character";
        return false;
    }
    else{
        document.getElementById("epass").innerHTML="";
    }
    alert("Log in credentials Submitted");
   
   
}