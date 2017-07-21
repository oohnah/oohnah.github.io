$( document ).ready(function() {
        $( "a" ).click(function( event ) {
            alert( "Hello, jquery!" );
            event.preventDefault();
        });
    });


$(document).ready(function() {
    $('#logo')
        .animate({opacity: 0,}, 0)
        .delay(100)
        .animate({opacity: 1}, 1000);
});

$(document).ready(function() {

	window.sr = ScrollReveal({reset: true});
	sr.reveal('.illustration',{duration: 1000, delay: 500, origin: 'bottom'});

});




