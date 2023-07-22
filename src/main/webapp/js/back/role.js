function funAdmin()
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
	if(role=="ADMIN")
	{
		document.getElementById("demo").innerHTML=personName;
	}
	else if(role=="USER")
	{
		setTimeout(function()
		{
			window.location=my+"success.jsp";
		},1000);
	}
	else if(role=="ORGANISER")
	{
		setTimeout(function()
		{
			window.location=my+"success_organiser.jsp";
		},1000);
	}
}
function User()
{
	var role=sessionStorage.getItem("roles");
	var personName=sessionStorage.getItem("username");
	if(personName==null)
	{
		setTimeout(function()
		{
			window.location = my+"login.jsp";
		},1000);  
	}
	if(role=="ADMIN")
	{
		setTimeout(function()
		{
			window.location=my+"success_admin.jsp";
		},1000);
	}
	else if(role=="ORGANISER")
	{
		setTimeout(function()
		{
			window.location=my+"success_organiser.jsp";
		},2000);
	}
}
function Organiser()
{
	var role=sessionStorage.getItem("roles");
	var personName=sessionStorage.getItem("username");
	if(personName==null)
	{
		setTimeout(function()
		{
			window.location = my+"login.jsp";
		},1000);  
	}
	if(role=="ADMIN")
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
		},2000);
	}
}
function AdminOrganiser()
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
	if(role=="USER")
	{
		setTimeout(function()
		{
			window.location=my+"success.jsp";
		},1000);
	}
}
function Admin()
{
	var role=sessionStorage.getItem("roles");
	var personName=sessionStorage.getItem("username");
	if(personName==null)
	{
		setTimeout(function()
		{
			window.location = my+"login.jsp";
		},1000);  
	}
	if(role=="USER")
	{
		setTimeout(function()
		{
			window.location=my+"success.jsp";
		},1000);
	}
	else if(role=="ORGANISER")
	{
		setTimeout(function()
		{
			window.location=my+"success_organiser.jsp";
		},2000);
	}
}