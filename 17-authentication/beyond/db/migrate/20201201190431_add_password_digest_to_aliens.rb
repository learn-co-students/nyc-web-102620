class AddPasswordDigestToAliens < ActiveRecord::Migration[6.0]
  def change
    add_column :aliens, :password_digest, :string
  end
end
