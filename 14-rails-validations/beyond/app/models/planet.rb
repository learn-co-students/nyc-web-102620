class Planet < ApplicationRecord
  has_many :trips
  has_many :aliens, through: :trips
end
