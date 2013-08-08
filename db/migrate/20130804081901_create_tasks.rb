class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.integer :project_id
      t.text :content
      t.integer :priority
      t.datetime :due_time
      t.boolean :is_finished

      t.timestamps
    end
  end
end
