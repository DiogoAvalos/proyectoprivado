// Cuando la página se carga completamente, oculta la pantalla de carga
function hideLoader() {
  $(".loader-logo").fadeOut("slow", function() {
    $(".loader-overlay").fadeOut("slow");
  });
}
// Agregar un retardo de 1 segundo (1500 milisegundos)
setTimeout(hideLoader, 1500);

/*
Author       : Theme_ocean.
Template Name: Fury - Product Landing Page
Version      : 1.0
*/
(function($) {
	'use strict';
	
	jQuery(document).on('ready', function(){
	
			$('a.page-scroll').on('click', function(e){
				var anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top - 50
				}, 1500);
				e.preventDefault();
			});		

	}); 	

				
});

//Script JavaScript para cargar el PDF
document.addEventListener('DOMContentLoaded', function () {
	var pdfViewer = document.getElementById('pdfViewer');
	var pdfModal = new bootstrap.Modal(document.getElementById('pdfModal'));
	var pdfLinks = document.querySelectorAll('.pdf-link');
	pdfLinks.forEach(function (link) {
	  link.addEventListener('click', function (e) {
		e.preventDefault();
		var pdfSrc = link.getAttribute('data-pdf-src');
		pdfViewer.setAttribute('src', pdfSrc);
		pdfModal.show();
	  });
	});
  });