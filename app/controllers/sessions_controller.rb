class SessionsController < ApplicationController
  def new
  end

  def create
		user = User.find_by_user_name(params[:user_name])
		if user and user.authenticate(params[:password])
			session[:user_id] = user.id
			redirect_to index_url
		else 
			redirect_to login_url, 
				alert: "Invalid user or password"
		end
  end

  def destroy
  end
end
