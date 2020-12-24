class ToysController < ApplicationController

    def how_many_toys_please
        @count = Toy.count
        
        render json: {
            this_is_how_many_toys: @count,
            api: "rocks", 
            ian: 2, 
            eric: true
        }
    end




    def index
        toys = Toy.order(:id)
        render json: toys
    end

    def show
        toy = Toy.find(params[:id])
        render json: toy
    end

    def create
        # params[:eric].each {|num| puts num * 3 }
        @toy = Toy.create(toy_params)
        render json: @toy
    end

    def update
        @toy = Toy.find(params[:id])
        @toy.update(toy_params)
        render json: @toy
    end

    def destroy
        @toy = Toy.find(params[:id])
        @toy.destroy
        render json: @toy
    end


    private 
    def toy_params
        # YOU CAN:
        # params.require(:toy).permit(:name, :image, :likes)

        # THIS ALSO WORKS:
        params.permit(:name, :image, :likes)
    end

end
