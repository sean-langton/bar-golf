class CreateTournaments < ActiveRecord::Migration[5.2]
  def change
    create_table :tournaments do |t|
      t.string :name
      t.date :date
      t.integer :per_team
      t.string :entry_code, limit: 4

      t.timestamps
    end
  end
end
