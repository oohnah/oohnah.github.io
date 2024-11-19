//write a function that searches an array for a favorite thing
function favorite () {

	var input=document.getElementById('textbox').value;

	var aa="";

	switch (input.toLowerCase()){
		case "book":
			aa="Babel by RF Kuang";
			break;
		case "color":
			aa="Purple!";
			break;
		case "food":
			aa="Ice cream, poke, and fries";
			break;
		case "cookie":
			aa="Chocolate chip!";
			break;
		case "song":
			aa="Lately I've been listening to The Sound of Letting Go by Orla Gartland";
			break;
		case "artist":
			aa="Leigh Ellexson"
			break;
		case "tv show":
			aa="Game Changer, by Dropout.tv"
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
			aa="Brooklyn!"
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
			aa="I love anything chocolate, also partial to Ben and Jerry's Cherry Garcia"
			break;
		case "activity":
			aa="Making art, knitting, playing with my cat"
			break;
		case "chain restaurant":
			aa="The Cheesecake Factory";
			break;
		case "famous person":
			aa="Brennan Lee Mulligan";
			break;
		case "Hogwarts house":
			aa="lol no";
			break;
		case "store":
			aa="local to me, I'm partial to Yu and Me Books and From Here to Sunday";
			break;
		case "clothing store":
			aa="Thrifting! I've had good luck with Thred Up (NOT SPONSORED)";
			break;
		case "comic":
			aa="1996 run of Nightwing, Impulse, and 90s Young Justice";
			break;
		case "webcomic":
			aa="Always Human";
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
			aa="So many! In particular, 99% Invisible, Design Matters, Ologies, and This is Uncomfortable";
			break;
		case "starbucks drink":
			aa="I've stopped drinking Starbucks! We have pumpkin spice at home!";
			break;
		default:
			aa="I guess I don't have a favorite one of those."



	}

	document.getElementById('answer').innerHTML=aa;
}
