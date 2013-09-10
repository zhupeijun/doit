class TasksController < ApplicationController
	before_action :set_task, only: [:show, :edit, :update, :destroy]

	# GET /tasks
	# GET /tasks.json
	def index

		session[:project_id] = params[:project_id]

		@pid = session[:project_id]

		@tasks = Task.where("project_id = ? and is_finished = 'f' ", @pid)
		@finished_tasks = Task.where("project_id = ? and is_finished = 't' ", @pid)
		@projects = Project.where("user_id = ?", session[:user_id])

		if params[:sort] then
			@tasks.order("? asc", params[:sort])
		end

		puts "+++++++++++++++++++++++++++"
		puts session[:project_id]
		puts "+++++++++++++++++++++++++++"

		@time = "#{Time.now}"

		puts "**************************"
		puts @tasks.count
		puts "**************************"

		respond_to do |format|
			format.js
		end
	end

	# GET /tasks/1
	# GET /tasks/1.json
	def show

	end

	# GET /tasks/new
	def new
		@task = Task.new
	end

	# GET /tasks/1/edit
	def edit
	end

	# POST /tasks
	# POST /tasks.json
	def create

		@pid = session[:project_id]

		@task = Task.new
		@task.content = params[:content]
		@task.project_id = @pid
		@task.is_finished = false;

		@tasks = Task.where("project_id = ? and is_finished = 'f' ", @pid)
		@finished_tasks = Task.where("project_id = ? and is_finished = 't' ", @pid)

		@projects = Project.where("user_id = ?", session[:user_id])

		respond_to do |format|
			if @task.save
				format.js
				#format.html { redirect_to index_url(project_id: @pid) }
				#format.html { redirect_to @task, notice: 'Task was successfully created.' }
				#format.json { render action: 'show', status: :created, location: @task }
			else
				format.html { redirect_to index_url(project_id: @pid) }
				#format.html { render action: 'new' }
				#format.json { render json: @task.errors, status: :unprocessable_entity }
			end
		end
	end

	# PATCH/PUT /tasks/1
	# PATCH/PUT /tasks/1.json
	def update

		@pid = session[:project_id]

		@tasks = Task.where("project_id = ? and is_finished = 'f' ", @pid)
		@finished_tasks = Task.where("project_id = ? and is_finished = 't' ", @pid)
		@projects = Project.where("user_id = ?", session[:user_id])


		puts "+++++++++++++++++++++++++++++"
		puts params[:task_due_time]
		puts "+++++++++++++++++++++++++++++"

		#DateTime.new(date[2],date[0],date[1])
		task_params[:due_time] = DateTime.now

		puts "----------------------------"
		puts params[:task_due_time]
		puts task_params[:due_date]
		puts "----------------------------"

		respond_to do |format|
			if @task.update(task_params)
				format.js
				#format.html { redirect_to @task, notice: 'Task was successfully updated.' }
				#format.json { head :no_content }
			else
				format.html { render action: 'edit' }
				format.json { render json: @task.errors, status: :unprocessable_entity }
			end
		end
	end

	# DELETE /tasks/1
	# DELETE /tasks/1.json
	def destroy

		@task.destroy

		@pid = session[:project_id]
		@tasks = Task.where("project_id = ? and is_finished = 'f' ", @pid)
		@finished_tasks = Task.where("project_id = ? and is_finished = 't' ", @pid)
		@projects = Project.where("user_id = ?", session[:user_id])

		respond_to do |format|
			format.js
		end
	end

	# DELETE tasks_path
	def destroy_



		@pid = session[:project_id]

		selected_tasks = Task.where("project_id = ? and is_finished = 't'", @pid)

		selected_tasks.each do |st|
			Task.delete(st)
		end


		@tasks = Task.where("project_id = ? and is_finished = 'f' ", @pid)
		@finished_tasks = Task.where("project_id = ? and is_finished = 't' ", @pid)
		@projects = Project.where("user_id = ?", session[:user_id])

		respond_to do |format|
			format.js
		end
	end


	private
		# Use callbacks to share common setup or constraints between actions.
		def set_task
			@task = Task.find(params[:id])
		end

		# Never trust parameters from the scary internet, only allow the white list through.
		def task_params
			params.require(:task).permit(:content, :is_finished, :due_date, :priority)
		end
end
