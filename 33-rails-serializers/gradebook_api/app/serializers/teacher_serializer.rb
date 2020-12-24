class TeacherSerializer < ActiveModel::Serializer
  # attributes :INSTANCE_METHOD_NAME1, :INSTANCE_METHOD_NAME2
  # attributes will not call on other serializers
  attributes :id, :name, :subject, :professor_name

  # has_many/belongs_to macros inside serializers tell the serializer you're in to call on the other serializers
  has_many :classrooms

end
