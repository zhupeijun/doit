// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require jquery.ui.all


$(document).ready(function(){
	//alert("1234");
	$('#overlay_btn').click(function(){
		$('.overlay').css('height','100%');		$('.overlay').fadeIn(500);
		$('#w').css("z-index","1101");
		$('#w').css("left",((document.documentElement.clientWidth / 2) - 200));
		$('#w').css('top',((document.documentElement.clientHeight / 2) - 150));
		$('#w').fadeIn(700);
	});

	$('.overlay').click(function(){
		$('.overlay').fadeOut(200);
		$('#w').hide();
	});
});