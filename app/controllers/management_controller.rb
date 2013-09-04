class ManagementController < ApplicationController
	def index
		@projects = Project.where("user_id = #{session[:user_id]}")

		@pid = -1;

		if session[:project_id] then
			@pid = session[:project_id]
		end

		@cur_pid = params[:project_id]

		debug_it(@pid)
		debug_it(session[:project_id])

		@tasks = Task.where("project_id = #{@pid} and is_finished = 'f' ")
		@finished_tasks = Task.where("project_id = #{@pid} and is_finished = 't' ")


	end

	def debug_it(msg)
		puts "------------------------------------------"
		puts "#Time: #{Time.now}"
		puts "#Message: #{msg}"
		puts "------------------------------------------"
	end
end
