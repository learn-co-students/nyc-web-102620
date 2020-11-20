class Trip < ApplicationRecord
  belongs_to :alien
  belongs_to :planet


  def alien_name=(user_input)
    alien = Alien.find_by(name: user_input)

    self.alien_id = alien.id
  end 

  def alien_name
  end 
end
