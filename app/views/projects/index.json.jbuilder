json.array!(@projects) do |project|
  json.extract! project, :title, :tag, :user_id
  json.url project_url(project, format: :json)
end
