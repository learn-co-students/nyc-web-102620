class Alien < ApplicationRecord
  has_many :trips
  has_many :planets, through: :trips

  def user_name_and_name 
    "#{self.name} || #{self.user_name}"
  end 
end
