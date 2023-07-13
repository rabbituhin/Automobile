function formValidation(event){
    event.preventDefault();
    var fname = document.getElementById("ifname").value;
    var lname = document.getElementById("ilname").value;
    var email = document.getElementById("iemail").value;
    var mobile = document.getElementById("imob").value;
    var pass = document.getElementById("ipass").value;
    var conpass = document.getElementById("iconpass").value;


    var namePattern = /^[a-zA-Z .]+$/;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;
    var mobilePattern = /^(\+88)?01[3-9]\d{8}$/;
    var passPattern =/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&_+><]).{6,20}/;
    
//firstname
    if(fname.length<3 || fname.length>20){
        document.getElementById("efname").innerHTML="**(3-20) char!";
        return false;
    }else if(!fname.match(namePattern)){
        document.getElementById("efname").innerHTML="**Only Char is allowed!!";
        return false;

    }else{
        document.getElementById("efname").innerHTML="";

    }
    
    if(lname.length<3 || lname.length>20){
        document.getElementById("elname").innerHTML="**(3-20) char!";
        return false;
    }else if(!lname.match(namePattern)){
        document.getElementById("elname").innerHTML="**Only Char is allowed!!";
        return false;

    }else{
        document.getElementById("elname").innerHTML="";

    }
    if(!email.match(emailPattern)){
        document.getElementById("eemail").innerHTML="Invalid e-mail";
        return false;
    }else{
        document.getElementById("eemail").innerHTML="";

    }
    
    if(!mobile.match(mobilePattern)){
        document.getElementById("emob").innerHTML="Invalid Number";
        return false;

    }else{
        document.getElementById("emob").innerHTML="";

    }
    if (!pass.match(passPattern)){
        document.getElementById("epass").innerHTML="Atleast one digit,one uppercase,one lowercase & special character";
        return false;
    }
    else{
        document.getElementById("epass").innerHTML="";
    }
    if(!conpass.match(pass)){
        document.getElementById("econpass").innerHTML="Both password must be same";
        return false;
    }
    else{
        document.getElementById("econpass").innerHTML="";
    }
alert("Succefully registered");
    

}
