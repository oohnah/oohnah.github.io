function login(){
	var email = document.getElementById('email');
	var pass = document.getElementById('pass');


	if (email.value == "" || pass.value=="") {
		document.getElementById('hello').innerHTML="make sure you fill in the boxes!";
	} else {
		//pseudo code --> take user to next page
		location.href="current.html";
	}
}

function signup(){
	var email = document.getElementById('email');
	var pass = document.getElementById('pass');
	var pass2 = document.getElementById('pass2');

	if (email.value == "" || pass.value=="" || pass2.value=="") {
		document.getElementById('hello').innerHTML="make sure you fill in the boxes!";
	} else if (pass.value!=pass2.value) {
		document.getElementById('hello').innerHTML="passwords don't match!";
	} else {
		//pseudo code --> take user to next page
		location.href="current.html";
	}
}

function reset(){
	var pass = document.getElementById('pass');
	var pass2 = document.getElementById('pass2');

	if (pass.value=="" || pass2.value=="") {
		document.getElementById('hello').innerHTML="make sure you fill in the boxes!";
	} else if (pass.value!=pass2.value) {
		document.getElementById('hello').innerHTML="passwords don't match!";
	} else {
		//pseudo code --> take user to next page
		location.href="resetsuccess.html";
	}
}

function forgot(){
	document.getElementById('hello').innerHTML="we sent you a recovery email!";
}
