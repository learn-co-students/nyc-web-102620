class ClassroomSerializer < ActiveModel::Serializer
  attributes :id, :name, :teacher_id
  has_many :assignments
  # belongs_to :teacher
end
