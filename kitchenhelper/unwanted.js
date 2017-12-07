$(document).ready(function() {
    $('#scanpopup').delay(12000).animate({opacity: 0}, 800);
    $('#fscreen').delay(12000).animate({opacity:.85},800);
});


/*

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
*/

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

function showchange(){
	$('#changeserving').show();
}

function changeservingsize(){
	var input = $('#servinginput').val();
	$('#servesize').html(input);
	$('#changeserving').hide();
}

$(document).ready(function() {
    $('#deletefavbutton').hide();
    $('#savefavbutton').hide();
    $('#rightbutton2').hide();
    $('#contrec').hide();
});

function editfav(){
	$('.trashcheck').show();
	$('#editfavbutton').hide();
	$('#deletefavbutton').show();
	$('#savefavbutton').show();
}

function deletefav(){
	$('#faves').find('input:checked').parent().hide();
}

function savefav(){
	$('.trashcheck').hide();
	$('#deletefavbutton').hide();
	$('#savefavbutton').hide();
	$('#editfavbutton').show();
}

function confirm(){
	$("#subhead").html("review and confirm order:");
	$('#rightbutton').hide();
	$('#rightbutton2').show();

	var flour = $('#flour').val();
	var salt = $('#salt').val();
	var butter = $('#butter').val();
	var eggs = $('#eggs').val();
	var milk = $('#milk').val();

	var flour2 = $('#flour2').find(":selected").text();
	var salt2 = $('#salt2').find(":selected").text();
	var butter2 = $('#butter2').find(":selected").text();
	var eggs2 = $('#eggs2').find(":selected").text();
	var milk2 = $('#milk2').find(":selected").text();

	$('#quantitybox').html("<ul><li>"+flour+" "+flour2+" flour</li><li>"+ salt+" "+salt2+" salt</li><li>" + butter +" "+butter2+" butter</li><li>" + eggs+" "+eggs2+" eggs</li><li>" + milk+" "+milk2+" milk</li></ul>" );
	$("#quantitybox").css('line-height', '22px');
}

function timesetting(){
	var datetime = $("#datetimes").val();
	$("#setordertime").hide();
	$("#ordertimeh2").html("Order Complete!");
	$("#back").hide();
	$("#cont").hide();
	$("#contrec").show();
	if ( $('input[name="asap"]').is(':checked')) {
		$('#timebox').html("Your order will arrive ASAP!");
	}else{
		$("#timebox").html("Your order will arrive at "+datetime+"!");
	}

}

function answer(){
	$("#popup").hide();
}

