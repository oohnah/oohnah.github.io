//write a function that searches an array for a favorite thing
function favorite () {

	var input=document.getElementById('textbox').value;

	var aa="";

	switch (input.toLowerCase()){
		case "book":
			aa="The Bartimaeus Trilogy";
			break;
		case "color":
			aa="Purple!";
			break;
		case "food":
			aa="Ice cream, falafel, and fries";
			break;
		case "cookie":
			aa="Chocolate chip!";
			break;			
		case "song":
			aa="Right now, it's When by Dodie Clark";
			break;
		case "artist":
			aa="Salvador Dali"
			break;
		case "tv show":
			aa="Voltron, Steven Universe, and Miraculous Ladybug"
			break;
		case "dessert":
			aa="Ice cream";
			break;
		case "website":
			aa="Tumblr";
			break;
		case "font":
			aa="Right now, I love Moon by Jack Harvatt";
			break;
		case "place":
			aa="Bangkok, Thailand, or maybe Boston!"
			break;
		case "movie":
			aa="Current favorite is Big Hero 6!";
			break;
		case "disney movie":
			aa="Mulan, The Lion King, Big Hero 6";
			break;
		case "disney princess":
			aa="Mulan";
			break;
		case "ice cream flavor":
			aa="Edy's French Silk"
			break;
		case "activity":
			aa="Doing art, or playing the ukulele"
			break;
		case "chain restaurant":
			aa="The Cheesecake Factory";
			break;
		case "famous person":
			aa="Randy Pausch";
			break;
		case "Hogwarts house":
			aa="Gryffindor!";
			break;
		case "store":
			aa="Target";
			break;
		case "clothing store":
			aa="H&M";
			break;
		case "comic":
			aa="1996 run of Nightwing, Impulse, and 90s Young Justice";
			break;
		case "webcomic":
			aa="Always Human, Gloomverse";
			break;
		case "superhero":
			aa="Dick Grayson, AKA Nightwing";
			break;
		case "character":
			aa="Dick Grayson, AKA Nightwing";
			break;
		case "animal":
			aa="All kinds of cats and birds";
			break;
		case "hackathon":
			aa="HackBeanpot";
			break;
		case "designer":
			aa="Stefan Sagmeister";
			break;	
		default:
			aa="I guess I don't have a favorite one of those."



	}

	document.getElementById('answer').innerHTML=aa;
}