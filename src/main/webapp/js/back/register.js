function redirect()
{
    window.location=my+"login.jsp";
    sleep(1);
}
function myFunction(x) 
{
  var element = document.body;
  element.classList.toggle("dark-mode");
  x.classList.toggle("fa-moon-o");
}
var i=0;
var txt="Event Management System Register";
var lin="-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-";
var speed=80;
function typeWriter() 
{
   writeUp();
}
function writeUp()
{
  	if(i<txt.length) 
  	{
    	 document.getElementById("tit").innerHTML+=txt.charAt(i);
     	 i++;
     	 setTimeout(typeWriter, speed);
  	}
  	return txt;
}
function saveRegister()
{
	var xhtml = new XMLHttpRequest();
	var url =my+"api/register";
	xhtml.open("POST", url, true);
	xhtml.setRequestHeader('Content-Type','application/json');
	
	var t1 = document.getElementById("t1");
	var t2 = document.getElementById("t2");
	var t3 = document.getElementById("t3");
	var t4 = document.getElementById("t4");
	
		xhtml.send(JSON.stringify({
			email : t1.value,
			username : t2.value,
			name : t3.value,
			password : t4.value
		}));
		
		var user=document.getElementById("t2").value;
		
		var userid = "user_YlpUOvR4XMQbNkLOirmRy"
	    emailjs.init(userid);
	    
	    emailjs.send("service_n4ku3mh","template_nv47qr1",{
			to_name: t3.value,
			to_email: t1.value,
			to_username: t2.value,
		});
		xhtml.onreadystatechange = function()
		{
			if(this.readyState == 4 && this.status == 200)
				if(lbl.style.display!=="none")
				{
				      lbl.style.display="block";
					  lbl.innerText=this.responseText;
					  sessionStorage.setItem("newuser",user);
					  setTimeout(function()
					  {
					     	window.location=my+"profile.jsp";
					     	alert(my+"profile.jsp");
					  },1000);
				}
				else
				{
					  lbl.style.display="none";	
				}
		};
}
function userVerification()
{
	let person=sessionStorage.getItem("username")
	if(person!=null)
	{
		window.location=my+"success.jsp";
	}
}