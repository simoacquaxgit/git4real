$('.classe_padre').on('click','button',function(){
	$.ajax('url_relativo.html', {
		success: function(response){
			$('.classe_div_da_visualizzare').html(response).slideDown();
		},
		data: { 'key': 'value' }
	})

});

// or

$('.classe_padre').on('click','button',function(){
	$.get('url_relativo.html', function(response){
		$('.classe_div_da_visualizzare').html(response).slideDown();
	});
});

// or


// <div class="classe_div" data-info="valore"></div>

$('.classe_padre').on('click','button',function(){

	$.ajax('url_relativo.html', {
		success: function(response){
			$('.classe_div').html(response).slideDown(); // carico nel div l'html ricevuto dal server
		},
		data: { "info" : $('.classe_div').data('info'): }, // ricevo i parametri impostati nell'html tramite l'elemento data
	)};

});

// modifica
