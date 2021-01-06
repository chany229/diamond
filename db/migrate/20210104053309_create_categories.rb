class CreateCategories < ActiveRecord::Migration[6.1]
  def change
    create_table :categories do |t|
      t.string :title
      t.integer :father_id
      t.integer :position

      t.timestamps
    end
  end
end
