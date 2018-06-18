$('a[href^="#"]').on('click', function() { // Au clic sur un élément
	var page = $(this).attr('href'); // Page cible
	var speed = 750; // Durée de l'animation (en ms)
	$('html, body').animate( { scrollTop: $(page).offset().top - $("#nav").height() }, speed ); 
	return false;
});

$(function (){
	$(function menu(){
		if($('#nav').innerHeight()!=66) {
			// Le nav est a 66px sur mobile
			$("#nav").sticky({ 
				topSpacing: 0,
				zIndex: null
			});
		}
		$('#nav-bars').on('click', function(e) {
			$('#nav-container').toggleClass('is-active');
		});
		$('.nav-element').on('click', function(e) {
			$('#nav-container').toggleClass('is-active');
		});
	});
});

$('.field-input').on('focus', function() {
	$(this).parent().addClass('is-focused has-label');
});

$('.field-input').on('blur', function() {
	if($(this).val()=='') {
		$(this).parent().removeClass('has-label');
	}
	$(this).parent().removeClass('is-focused');
});
