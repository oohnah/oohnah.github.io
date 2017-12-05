function add (){
	var input=document.getElementById('unwanted').value;
	var output="";
	output=input + " (x)";
	document.getElementById('added').innerHTML=output;
}

function add2(){
	var input=document.getElementById('unwanted').value;
	var div = document.createElement('div');
	div.textContent = input + " (x)";
	div.setAttribute('class', 'added');
	div.setAttribute('onclick', 'remove()');
	document.getElementById('added').appendChild(div);
}

function add3(){
	var input = $("#unwanted").val();
	$("#added").append("<div class='added' id='"+ input + "'  onclick='remove("+ input +")'>" + input + " (x)</div>");
	$('#unwanted').val("");
}

function remove(i){
	$(i).remove();
}

function save(){
	alert("Your settings have been saved.");
}