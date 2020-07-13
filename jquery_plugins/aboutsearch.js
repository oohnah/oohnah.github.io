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
			aa="Right now, it's Monster by Dodie Clark";
			break;
		case "artist":
			aa="Leigh Ellexson"
			break;
		case "tv show":
			aa="Brooklyn 99"
			break;
		case "dessert":
			aa="Ice cream";
			break;
		case "website":
			aa="Youtube?";
			break;
		case "font":
			aa="Right now, I'm pretty into Gotham";
			break;
		case "place":
			aa="Bangkok, Thailand, or maybe Boston!"
			break;
		case "movie":
			aa="Current favorite is Into the Spiderverse!";
			break;
		case "disney movie":
			aa="Mulan & Big Hero 6";
			break;
		case "disney princess":
			aa="Mulan";
			break;
		case "ice cream flavor":
			aa="Edy's French Silk"
			break;
		case "activity":
			aa="Making art, or playing the ukulele"
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
			aa="Octopi and cats and birds";
			break;
		case "hackathon":
			aa="HackBeanpot";
			break;
		case "designer":
			aa="Jen & Amy Hood of Hoodzpah";
			break;
		case "podcast":
			aa="Design Matters with Debbie Millman";
			break;
		case "starbucks drink":
			aa="Peppermint mocha";
			break;
		default:
			aa="I guess I don't have a favorite one of those."



	}

	document.getElementById('answer').innerHTML=aa;
}
