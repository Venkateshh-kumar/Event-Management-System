<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body onload="readComplaints()">
	<h1>Complaints display using microservices</h1>
	<div style="width: 100%" id="display"></div>
</body>
<script type="text/javascript" src="js/back/url.js"></script>
<script type="text/javascript">
function readComplaints()
{
	var xhtml = new XMLHttpRequest();
	var url=my+"api/details-complaint";
	xhtml.open("GET", url, true);
	xhtml.setRequestHeader('Content-Type','application/json');
	
	xhtml.send();
	
	var display = document.getElementById("display");
	
	xhtml.onreadystatechange = function()
	{
		if(this.readyState == 4 && this.status == 200)
		{
			var table = "<table border='1'>";
			var i=0;
			table += "<tr> <th>S.No</th> <th>Username</th> <th>Complient</th> </tr>";
			var data = JSON.parse(this.responseText);
			for(var x in data)
			{
				table=table+"<tr>"+"<td>"+ (i+1) +"</td>"+"<td>"+ data[x].username +"</td>"+"<td>"+ data[x].complaint+"</td>"+"</tr>";
				i++;
			}
			table=table+"</table>";
			display.innerHTML = table;
		}
	};
}
</script>
</html>