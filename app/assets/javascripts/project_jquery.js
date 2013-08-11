/****************************************************************************************/
/*project jquery script */
/****************************************************************************************/

//$(".project_show").hide();

$(document).ready(function(){
	
	$(".project_menu_btn").click(function(){

		if($(".project_menu").is(":visible")){
			$(".project_menu").slideUp(300);
		} else {
			var dropmenu = $(this).parentsUntil(".project_parent").parent().find("div").first();
			//p.css('background-color',"red");
			dropmenu.after($(".project_menu"));
			$(".project_menu").slideDown(300);
		}
	});



	$(".project_menu_delete").click(function(){
		$(this).parentsUntil(".project_parent").parent().find(".project_delete").click();
	});

	$(".title_td").click(function(){
		//$(this).parent().find(".find_task").css("color","red");
		$(this).parent().find(".find_task").click();

	});

});



//$(".project_show").fadeIn(1500);