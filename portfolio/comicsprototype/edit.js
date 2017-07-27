var read =44;


$(document).ready(
	function(){
		$("#read").html("<b>Issues Read:</b> " + read);
	}

);

function add(){
	var added = $("#numissues").val();
	var realNumber = parseInt(added);
	read += realNumber;
	$("#read").html("<b>Issues Read:</b> " + read);
}

function subtract(){
	var subtracted = $("#numissues").val();
	var realNumber = parseInt(subtracted);
	read -= realNumber;
	$("#read").html("<b>Issues Read:</b> " + read);
}

function save(){
	alert("Saved! (not really but let's pretend)");
}