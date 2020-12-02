class Alien < ApplicationRecord
  has_many :trips
  has_many :planets, through: :trips

  has_secure_password

  def user_name_and_name 
    "#{self.name} || #{self.user_name}"
  end 


  # def password=(user_input)
  #   hashed_password = BCrypt::Password.create(user_input)
  #   self.password_digest = hashed_password
  # end 

  # def password 
  # end 
end
