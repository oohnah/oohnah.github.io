$(document).ready(function() {
    $('#logo')
        .animate({opacity: 0,}, 0)
        .delay(100)
        .animate({opacity: 1}, 1000);
});

/*
$(document).ready(function() {

	window.sr = ScrollReveal({reset: true});
	sr.reveal('.revealable',{duration: 1500, delay: 500, origin: 'bottom', scale: 1}, 750);
	sr.reveal('.revealabout');
});
*/
$(document).ready(function(){
	window.sr = ScrollReveal();
	sr.reveal('.revealable', {delay: 800, scale: 1});
	sr.reveal('.revealabout');	
});

$(document).ready(function() {
    $('.toolused').tooltipster({
	    theme: ['tooltipster-light', 'tooltipster-light-customized']
    });
});

$(document).ready(function() {
    $('.contact').tooltipster({
	    theme: ['tooltipster-light', 'tooltipster-light-customized']
    });
});

$(document).ready(function() {
    $('.home').tooltipster({
	    theme: ['tooltipster-light', 'tooltipster-light-customized'],
	    side: 'right'
    });
});