json.array!(@users) do |user|
  json.extract! user, :user_name, :email, :password_digest, :time_zone
  json.url user_url(user, format: :json)
end
