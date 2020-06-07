$(document).ready(function(){
	var imgItems = $('.sliders li').length;  //numero de sliders
	var imgPos = 1;
	//paginacion
	for(i = 1; i <= imgItems; i++){
		$('.paginacion') .append('<li><span class="fas fa-circle"></span></li>');
	}

	$('.sliders li').hide(); //oculta todos los sliders
	$('.sliders li:first').show(); // muestra el primero
	$('.paginacion li:first').css({'color': '#D10D0D0'}); //estilo primer item paginacion

	// ejecutar funciones
	$('.paginacion li').click(paginacion);
	$('.right span').click(nextSlider);
	$('.left span').click(prevSlider);

	var autoslider = setInterval(function(){
		nextSlider();
	}, 5000);

	$('.slider').hover(function() {
		clearInterval(autoslider);
	}, function() {
		autoslider = setInterval(function(){
			nextSlider();
		}, 5000);
	});

	//Funciones
	function paginacion(){
		var posicion = $(this).index() + 1;   // posiciond e la paginacion seleccionada
		$('.sliders li').hide(); // oculta dotos los slides
		$('.sliders li:nth-child('+ posicion +')').fadeIn(); //mostrar el slide seleccionado

		//estilos a la paginacion seleccionada
		$('.paginacion li').css({'color': '#BDBDBD'});
		$(this).css({'color': '#D10D0D'});

		imgPos = posicion;
	}
	function nextSlider(){
		if( imgPos >= imgItems){imgPos = 1;}
		else {imgPos++;}

		$('.paginacion li').css({'color': '#BDBDBD'});
		$('.paginacion li:nth-child('+ imgPos +')').css({'color': '#D10D0D'});
		$('.sliders li').hide(); // oculta dotos los slides
		$('.sliders li:nth-child('+ imgPos +')').fadeIn(); //mostrar el slide seleccionado
	}

	function prevSlider(){
		if( imgPos <= 1){imgPos = imgItems;}
		else {imgPos--;}

		$('.paginacion li').css({'color': '#BDBDBD'});
		$('.paginacion li:nth-child('+ imgPos +')').css({'color': '#D10D0D'});
		$('.sliders li').hide(); // oculta dotos los slides
		$('.sliders li:nth-child('+ imgPos +')').fadeIn(); //mostrar el slide seleccionado
	}
});
