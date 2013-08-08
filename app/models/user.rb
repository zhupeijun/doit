class User < ActiveRecord::Base
	has_many :projects, dependent: :destroy
	
	validates :email, :time_zone, presence: true
	validates :user_name, presence: true, uniqueness: true
	has_secure_password
end
