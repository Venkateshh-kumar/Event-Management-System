function funOrganiser()
{
	var personName=sessionStorage.getItem("username");
	var role=sessionStorage.getItem("roles");
	if(personName==null)
	{
		setTimeout(function()
		{
			window.location = my+"login.jsp";
		},1000);  
	}
	if(role=="ORGANISER")
	{
		document.getElementById("demo").innerHTML=personName;
	}
	else if(role=="ADMIN")
	{
		setTimeout(function()
		{
			window.location=my+"success_admin.jsp";
		},1000);
	}
	else if(role=="USER")
	{
		setTimeout(function()
		{
			window.location=my+"success.jsp";
		},1000);
	}
}
function sendemail() 
{
     var userid = "user_YlpUOvR4XMQbNkLOirmRy"
     emailjs.init(userid);
     var thename = document.getElementById('t4').value;
     var themail = document.getElementById('t3').value;
     var validmail = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
     if (thename == "") 
     {
        alert("Please Enter Name");
     }
     else 
     {
    	var otp= generateOTP();
    	document.getElementById("otp").value=otp;
        var contactdetail = 
        {
          to_name: thename,
          to_email: themail,
          value:otp
        };

        emailjs.send('service_7igupyo','template_nv47qr1', contactdetail).then(function (res) 
        {
          alert("Email Sent Successfully");
        },
        reason =>
        {
            alert("Error Occur");
        })
     }
}
function log()
{
	sessionStorage.removeItem("username");
	sessionStorage.removeItem("password");
	window.location=my+"login.jsp";
}