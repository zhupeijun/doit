/****************************************************************************************/
/*task jquery script */
/****************************************************************************************/

$(document).ready(function() {

	var editshow = false;

	$(".task_content").click(function(){

		if(editshow == false) {

			$(this).parentsUntil(".task_item").parent().find(".task_content_div").hide();
			$(this).parentsUntil(".task_item").parent().find(".task_edit").slideDown(200);

			editshow = true;
		}
		
	});

	$(".task_item").mouseover(function(){
	});

	$(".task_item").mouseleave(function(){
	});

	$(".task_edit_submit").click(function(){
		$(this).parent().find(":submit").click();
	});

	$(".task_edit_cancle").click(function(){

		if(editshow == true) {

			$(this).parentsUntil(".task_item").parent().find(".task_edit").hide();
			$(this).parentsUntil(".task_item").parent().find(".task_content_div").fadeIn(800);

			editshow = false;
		}
		
	});

	$(".task_finished_checkbox").find(":checkbox").click(function(){
		$(this).parent().parent().find(":submit").click();
	});

	$(".datepicker").each(function(){
		$(this).datepicker({
			dateFormat: 'yy-mm-dd',
			showButtonPanel: true
		});
	});

	$(".task_item").fadeIn(500);

});