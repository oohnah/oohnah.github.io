$(document).ready(function() {
    $('#scanpopup').delay(12000).animate({opacity: 0}, 800);
    $('#fscreen').delay(12000).animate({opacity:.85},800);
});




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


function ftoggle(){
	$("#fitems").toggle();
	$("#fitems").removeClass("hidden");
}

function stoggle(){
	$("#sitems").toggle();
	$("#sitems").removeClass("hidden");
}

function hides(){
	$("#sitems").hide();
}

function fav(i){
	$(i).toggle();
}

function done(){
	alert("Dish complete! Enjoy your meal!");
}



