class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :title
      t.integer :tag
      t.integer :user_id

      t.timestamps
    end
  end
end
