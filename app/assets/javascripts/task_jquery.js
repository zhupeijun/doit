/****************************************************************************************/
/*task jquery script */
/****************************************************************************************/

$(document).ready(function() {

	var editshow = false;
	var task_menu = false;

	$(".task_content").click(function(){

		if(editshow == false) {

			$(this).parentsUntil(".task_item").parent().find(".task_content_table").hide();
			$(this).parentsUntil(".task_item").parent().find(".task_edit").show();
			editshow = true;
		}
		
	});

	$(".task_delete_div").click(function(){

		

		if (task_menu == false) {

			$(this).parentsUntil(".task_item").parent().find(".task_menu").slideDown(400);

			task_menu = true;

		} else {

			$(this).parentsUntil(".task_item").parent().find(".task_menu").slideUp(400);

			task_menu = false;
		}

		//alert(task_menu);
	});

	

	$(".task_item").mouseover(function(){
		$(this).find('.task_delete_div').show();
	});

	$(".task_item").mouseleave(function(){
		$(this).find('.task_delete_div').fadeOut(500);
	});

	$(".task_edit_submit").click(function(){
		$(this).parent().find(":submit").click();
	});

	$(".task_edit_cancle").click(function(){

		if(editshow == true) {

			$(this).parentsUntil(".task_item").parent().find(".task_edit").hide();
			$(this).parentsUntil(".task_item").parent().find(".task_content_table").show();

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