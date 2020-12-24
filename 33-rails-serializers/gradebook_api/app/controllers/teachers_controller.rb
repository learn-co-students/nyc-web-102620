class TeachersController < ApplicationController

    def index
        @teachers = Teacher.all
        # Without the serializer:
        # When we do render json: @instance <- we send out only the attributes written in schema.rb


        # A serializer is the filter that decides the structure of the information being sent out from our backend to our frontend
        render json: @teachers
    end

    def show
        @teacher = Teacher.find(params[:id])
        render json: @teacher
    end


    def please_log_me_in
        @teacher = Teacher.find_by(name: params[:hereIsTheUserName])
        
        if @teacher
            render json: @teacher
        else
            render json: {error: "Try Again"}
        end
    end

end
