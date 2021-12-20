button.addEventListener("click",(event)=>
{
event.preventDefault();  
let agetext; 
let count1=0;  
let age=document.getElementById("age").value;
console.log(age);
if(age>=1&&age<=99)
{   
    count1++;
    agetext=""; 
}
else if(age=="")
{
agetext="please enter the age";
}
else
{
agetext="age should greater than 1 and lesser than 100";
}

document.getElementById("agemsg").innerText=agetext;



let nametext;
let count2=0;
let name=document.getElementById("username").value;
console.log(name);
let nameformat=/^[A-Za-z]+$/;
if(name=="")
{
    nametext="please enter the username";
}

else if(name.match(nameformat))
{
    count2++;
    nametext="";
}
else
{
     nametext="only alphabets are allowed";
}
document.getElementById("textmsg").innerText=nametext;

let emailtext;
let count3=0;
let email=document.getElementById("email").value;
console.log(email);

let mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
if(email=="")
{
  emailtext="please enter the mail Id";

}


else if(email.match(mailformat))
{
    emailtext="";
    count3++;

}
else
{
    emailtext="please enter a proper mail id";

}
document.getElementById("emailmsg").innerText=emailtext;


//password....
let  passwordtext;
let count4=0;
let password=document.getElementById("password").value;
console.log(password);
let passwordformat=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

if(password=="")
{
  passwordtext="please enter the password";

}
 else if(password.match(passwordformat))
{
    count4++;
    passwordtext="";  
}
else
{
    passwordtext="it should have min one uppercaseletter\nit should have min one lowercaseletter\nit should one min digit"; 
}
document.getElementById("passwordmsg").innerText=passwordtext;




let message;
if(count1>0&&count2>0&&count3>0&&count4>0)
{
    document.getElementById("f1").innerText="username:"+name;
    document.getElementById("f2").innerText="email:"+email;
    document.getElementById("f3").innerText= "age:"+age;
    document.getElementById("f4").innerText="password:"+password;
    alert("successfully registered"); 
}
/*
let message;
    if(age==""||email==""||name==""||password=="")
    {
       message="please enter inputs";
     
    }
    else
    {

       message="successfully done";
       document.getElementById("f1").innerText="username:"+name;
       document.getElementById("f2").innerText="email:"+email;
       document.getElementById("f3").innerText="age:"+age;
       document.getElementById("f4").innerText="password:"+password;
    }
    
    alert(message);*/






/*
//email...

let emailtext;
let email=document.getElementById("email").value;
console.log(email);
if(email=="")
{
    emailtext="email should be filled";
}

else
{
    emailtext="valid";

}

document.getElementById("emailmsg").innerText=emailtext;

///password....
let  passwordtext;
let password=document.getElementById("password").value;
console.log(password);
let passwordformat=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
if(password.match(passwordformat))
{
    passwordtext="valid";
    document.getElementById("f4").innerText="password:"+password;
}
else
{
    passwordtext="not valid";
}
document.getElementById("passwordmsg").innerText=passwordtext;



//message...
let message;
let op
    if(age==""||email==""||name==""||password=="")
    {
       message="please enter inputs";
     
    }
    else
    {

       message="successfully done";
       document.getElementById("f1").innerText="username:"+name;
       document.getElementById("f2").innerText="email:"+email;
       document.getElementById("f3").innerText="age:"+age;
       document.getElementById("f4").innerText="password:"+password;
    }
    
    alert(message);*/

})

