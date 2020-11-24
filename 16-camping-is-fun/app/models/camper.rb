class Camper < ApplicationRecord
  has_many :signups, dependent: :destroy
  has_many :activities, through: :signups

  validates :name, uniqueness: { case_sensitive: false }
  validates :age, inclusion: { in: 8..18, message: 'has to be between 8 and 18' }
end
