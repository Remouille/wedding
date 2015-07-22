/* jshint devel:true */
'use strict';

$(document).ready(function () {
	$('.row1').css('height', $(window).height());
	
	$('#arrow').css('opacity', 100);
});

setTimeout(function(){ 
	console.log(document.body.scrollTop);
	if (document.body.scrollTop < 20){
		$('html, body').animate( { scrollTop: 20 }, 1000 );
	}
}, 3000);

$(document).ready(function() {
	$('.scrollto').click( function() { // Au clic sur un élément
		console.log('clic');
		var page = $(this).attr('href'); // Page cible
		var speed = 750; // Durée de l'animation (en ms)
		$('html, body').animate( { scrollTop: $(page).offset().top }, speed, 'easeOutCubic'); // Go
		return false;
	});
});