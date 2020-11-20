class Planet < ApplicationRecord
  has_many :trips
  has_many :aliens, through: :trips

  validate :name_cannot_be_pluto
  validates :name, uniqueness: { case_sensitive: false, message: 'is already used, bantha fodder!' }
  validates_presence_of :name, :size
   
  private

  def name_cannot_be_pluto
    # if self.name == 'pluto'
      # add "name can't be plute" to errors

    if self.name.downcase == 'pluto'
      self.errors.add(:name, "can't be Pluto. Sorry Pluto.")
    end
  end
end
