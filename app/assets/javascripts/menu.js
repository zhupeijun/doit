$(document).ready(function() {

//	alert("1");

	$(".task_item").fadeIn(500);

	$(".btn_div").click(function(){
		alert("button click!");
		$(this).parent().find(".btn_click").click();
	});

	$(".project_menu_btn").click(function(){

		if($(".project_menu").is(":visible")){
			$(".project_menu").slideUp(300);
		} else {
			var p = $(this).parentsUntil(".project_parent").parent().find("div").first();
			//p.css('background-color',"red");
			p.after($(".project_menu"));
			$(".project_menu").slideDown(300);
		}
	});

	$(".title_td").click(function(){
		//$(this).parent().find(".find_task").css("color","red");
		$(this).parent().find(".find_task").click();
	});


	$(".task_content").click(function(){
		$(this).parentsUntil(".task_item").parent().find(".task_content_div").hide();
		$(this).parentsUntil(".task_item").parent().find(".task_edit").slideDown(500);
	});


	$(".task_edit_submit").click(function(){
			$(this).parent().find(":submit").click();
	});

	$(".task_edit_cancle").click(function(){
		$(this).parentsUntil(".task_item").parent().find(".task_edit").hide();
		$(this).parentsUntil(".task_item").parent().find(".task_content_div").fadeIn(1000);
	});

	$(".project_menu_delete").click(function(){
		$(this).parentsUntil(".project_parent").parent().find(".project_delete").click();
	});


	$(".task_finished_checkbox").find(":checkbox").click(function(){
		$(this).parent().parent().find(":submit").click();
	});

});