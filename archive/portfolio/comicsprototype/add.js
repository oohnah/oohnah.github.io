var titles = ["Nightwing", "Batman", "Superman", "Wonder Woman", "Robin", "Flash", "Green Lantern", "Aquaman", "Supergirl", "Green Arrow"];

function add(){
	var result=false;
	var box = $("#textbox").val();
	for (var i = 0; i < titles.length; i++) {
		if (titles[i]==box){
			result=true;
			break;
		}else{
			result=false;
		}


	};
	if (result==true) {
		alert("Added to list!");
	} else {
		alert("That's not in our database! Try again?");
	}
}

