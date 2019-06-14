class CreateHoles < ActiveRecord::Migration[5.2]
  def change
    create_table :holes do |t|
      t.string :name
      t.time :start_time
      t.integer :duration
      t.string :par
      t.string :birdie
      t.string :eagle
      t.references :tournament

      t.timestamps
    end
  end
end
