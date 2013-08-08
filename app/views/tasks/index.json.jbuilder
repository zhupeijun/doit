json.array!(@tasks) do |task|
  json.extract! task, :project_id, :content, :priority, :due_time, :is_finished
  json.url task_url(task, format: :json)
end
