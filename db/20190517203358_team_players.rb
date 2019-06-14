class TeamPlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :teamplayers do |t|
      t.references :team
      t.references :player

      t.timestamps
    end
  end
end
