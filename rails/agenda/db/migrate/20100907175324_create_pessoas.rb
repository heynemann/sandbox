class CreatePessoas < ActiveRecord::Migration
  def self.up
    create_table :pessoas do |t|
      t.string :nome
      t.date :data_de_nascimento
      t.float :altura

      t.timestamps
    end
  end

  def self.down
    drop_table :pessoas
  end
end
