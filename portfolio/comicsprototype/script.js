

/*         $(document).ready(function(){
            document.write("Hello, World!");
         });*/
//ok time for some psuedo code

//-----------re: comics data-------------------//

//some arrays of comics will be stored in a json file

var data ={
	"comics":[

	{
		"Title":"rsob",
		"Cover":"images/rsob6.png",
		"Read":6,
		"Total":6,
		"Fav":"<i class='fa fa-star-o'></i>",
	},

	{
		"Title":"batgirl",
		"Cover":"images/batgirl45.png",
		"Read":45,
		"Total":45,
		"Fav":"<i class='fa fa-star-o'></i>",
	},

	{
		"Title":"batman",
		"Cover":"images/batman44.png",
		"Read":44,
		"Total":47,
		"Fav":"<i class='fa fa-star-o'></i>",
	},

	{
		"Title":"batman-and-robin-eternal",
		"Cover":"images/batman-and-robin-eternal10.png",
		"Read":10,
		"Total":10,
		"Fav":"<i class='fa fa-star-o'></i>",
	},


	{
		"Title":"red-hood-arsenal",
		"Cover":"images/red-hood-arsenal7.png",
		"Read":7,
		"Total":7,
		"Fav":"<i class='fa fa-star-o'></i>",
	},


	{
		"Title":"gotham-academy",
		"Cover":"images/gotham-academy13.png",
		"Read":13,
		"Total":13,
		"Fav":"<i class='fa fa-star-o'></i>",
	},

	{
		"Title":"grayson",
		"Cover":"images/grayson15.png",
		"Read":15,
		"Total":15,
		"Fav":"<i class='fa fa-star-o'></i>",
	},



	]
}

//the arrays will be put through a loop to create the web page

//comic object contains: title, number issues read, total issues (? figure out this data structure)

function trash(i){
	//alert(i + " remove");
	$("#main center").html("");
	//alert("remove from array");
	data.comics.splice(i,1);
	//alert(i + " put back");

	$("#main center").append("<h1>Currently Reading <a href='add.html'><i class='fa fa-plus-square' style='font-size: 36px; margin-left: 5px;'></i></a></h1>");
		for (var i = 0; i < data.comics.length; i++) {
			$("#main center").append("<div id='title'><img src='"+data.comics[i].Cover+"' class='timg'><div id='options'><br><a onclick='plus("+i+")' title='click if you read the next issue of this title!'><i class='fa fa-check'></i></a><p>I read an issue! (#"+(data.comics[i].Read+ 1 )+")</p><a href='edit"+data.comics[i].Title+".html' title='manually edit your issues read!'><br><i class='fa fa-pencil'></i></a><p>edit title</p><a onclick='trash("+i+")'><br><i class='fa fa-trash'></i></a><p>delete title</p><br><a onclick='fav("+i+")'>"+data.comics[i].Fav+"</a><p>favorite</p></div><!--end options--><div id='num'>"+data.comics[i].Read+"/"+data.comics[i].Total+"</div><!--end num--></div><!--end title-->");

	};
}

//add one issue function
//takes int (array index #)->re-render with +1 
function plus(i){
	if (data.comics[i].Read == data.comics[i].Total) {
		alert("You've already read all the issues in this title!");
	}
	else {

		data.comics[i].Read += 1;
		data.comics[i].Cover = "images/" + data.comics[i].Title + data.comics[i].Read + ".png"
		$("#main center").html("");
		$("#main center").append("<h1>Currently Reading <a href='add.html'><i class='fa fa-plus-square' style='font-size: 36px; margin-left: 5px;'></i></a></h1>");
			for (var k = 0; k < data.comics.length; k++) {
				$("#main center").append("<div id='title'><img src='"+data.comics[k].Cover+"' class='timg'><div id='options'><br><a onclick='plus("+k+")' title='click if you read the next issue of this title!'><i class='fa fa-check'></i></a><p>I read an issue! (#"+(data.comics[k].Read+ 1 )+")</p><a href='edit"+data.comics[k].Title+".html' title='manually edit your issues read!'><br><i class='fa fa-pencil'></i></a><p>edit title</p><a onclick='trash("+k+")'><br><i class='fa fa-trash'></i></a><p>delete title</p><br><a onclick='fav("+k+")'>"+data.comics[k].Fav+"</a><p>favorite</p></div><!--end options--><div id='num'>"+data.comics[k].Read+"/"+data.comics[k].Total+"</div><!--end num--></div><!--end title-->");

		};
	}


}

//fav function
//iakes an int (array index)->re-render with change in fav status
function fav(i){
	if (data.comics[i].Fav == "<i class='fa fa-star-o'></i>") {
		data.comics[i].Fav = "<i class='fa fa-star'></i>";
		$("#main center").html("<h1>Currently Reading <a href='add.html'><i class='fa fa-plus-square' style='font-size: 36px; margin-left: 5px;'></i></a></h1>");
		for (var k = 0; k < data.comics.length; k++) {
			$("#main center").append("<div id='title'><img src='"+data.comics[k].Cover+"' class='timg'><div id='options'><br><a onclick='plus("+k+")' title='click if you read the next issue of this title!'><i class='fa fa-check'></i></a><p>I read an issue! (#"+(data.comics[k].Read+ 1 )+")</p><a href='edit"+data.comics[k].Title+".html' title='manually edit your issues read!'><br><i class='fa fa-pencil'></i></a><p>edit title</p><a onclick='trash("+k+")'><br><i class='fa fa-trash'></i></a><p>delete title</p><br><a onclick='fav("+k+")'>"+data.comics[k].Fav+"</a><p>favorite</p></div><!--end options--><div id='num'>"+data.comics[k].Read+"/"+data.comics[k].Total+"</div><!--end num--></div><!--end title-->");

		};
	} else {
		data.comics[i].Fav = "<i class='fa fa-star-o'></i>";
		$("#main center").html("<h1>Currently Reading <a href='add.html'><i class='fa fa-plus-square' style='font-size: 36px; margin-left: 5px;'></i></a></h1>");
		for (var i = 0; i < data.comics.length; i++) {
			$("#main center").append("<div id='title'><img src='"+data.comics[i].Cover+"' class='timg'><div id='options'><br><a onclick='plus("+i+")' title='click if you read the next issue of this title!'><i class='fa fa-check'></i></a><p>I read an issue! (#"+(data.comics[i].Read+ 1 )+")</p><a href='edit"+data.comics[i].Title+".html' title='manually edit your issues read!'><br><i class='fa fa-pencil'></i></a><p>edit title</p><a onclick='trash("+i+")'><br><i class='fa fa-trash'></i></a><p>delete title</p><br><a onclick='fav("+i+")'>"+data.comics[i].Fav+"</a><p>favorite</p></div><!--end options--><div id='num'>"+data.comics[i].Read+"/"+data.comics[i].Total+"</div><!--end num--></div><!--end title-->");

		};
	}
}


//i need a function that renders comics
function renderComic(){

	for (var i = 0; i < data.comics.length; i++) {
			$("#main center").append("<div id='title'><img src='"+data.comics[i].Cover+"' class='timg'><div id='options'><br><a onclick='plus("+i+")' title='click if you read the next issue of this title!'><i class='fa fa-check'></i></a><p>I read an issue! (#"+(data.comics[i].Read+ 1 )+")</p><a href='edit"+data.comics[i].Title+".html' title='manually edit your issues read!'><br><i class='fa fa-pencil'></i></a><p>edit title</p><a onclick='trash("+i+")'><br><i class='fa fa-trash'></i></a><p>delete title</p><br><a onclick='fav("+i+")'>"+data.comics[i].Fav+"</a><p>favorite</p></div><!--end options--><div id='num'>"+data.comics[i].Read+"/"+data.comics[i].Total+"</div><!--end num--></div><!--end title-->");

	};


}

$(document).ready(
	renderComic
);


/*$(document).ready(function(){
	$("#main center").append("<div id='title'><img src='images/rsob.png' class='timg'><div id='options'><br><a href='#' onclick='plus()' title='click if you read the next issue of this title!'><i class='fa fa-check'></i></a><br>check-off next (#5)<br><a href='edit.html' title='manually edit your issues read!'><i class='fa fa-pencil'></i></a><br>manual edit<br><a href='#' onclick='trash()''><i class='fa fa-trash'></i></a><br>delete title</div><!--end options--><div id='num'>4/10</div><!--end num--></div><!--end title-->");
});*/

//function that clears rendered comics?

//function that adds a new comic to a list (abstracted to be used on any list)

//function that removes a comic from a list (abstracted to be used on any list)

//possibly a function that changes the data of a comic?



//----------------re:login/logout--------------//

//funtion that compares two values

//function that detects that a field is empty

//can i use cookies to keep track of login/logout state?