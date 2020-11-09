require "tty-prompt"
require "pry"
require 'rest-client'  
require 'json' 

class CLI
    @@prompt = TTY::Prompt.new
    @@artii = Artii::Base.new :font => 'slant'
    @@user = nil

    def welcome
        system('clear')
        puts @@artii.asciify("Welcome to")
        puts @@artii.asciify("Jeopardy ( Lite )!")
        self.auth_sequence
    end

    def auth_sequence
        sleep(1.5)
        @@user = User.first
        self.display_menu
        # choices = { "Log In" => 1,
        #     "Sign Up" => 2
        # }
        # choice = @@prompt.select("Would you like to sign up or log in?", choices)
        # if choice == 1
        #     @@user = User.login
        #     if @@user
        #         self.display_menu
        #     else
        #         self.auth_sequence
        #     end
        # else
        #     @@user = User.signup
        #     if @@user
        #         self.display_menu
        #     else
        #         self.auth_sequence
        #     end
        # end
    end

    def display_menu
        # Displays the options to the user!
        system('clear')
        choices = { "Play a random category" => 1,
                "Search for a category" => 2, 
                "See my game results" => 3,
                "See leaderboard" => 4,
                "Select from all categories" => 5
            }
        action = @@prompt.select("What would you like to do?", choices)
        case action
        when 1 
            random_cat = Category.all.sample # gets random category from those seeded
            api_data = self.get_category_data(random_cat) # uses helper method to get clues from API
            self.play_game(random_cat.id, api_data) # plays the game!
        when 2
            puts "You chose to search"
        when 3
            puts "You chose to see results"
        when 4
            puts "You chose to see your game results"
        when 5
            chosen_category = self.choose_category # uses helper method to display and get category choice
            api_data = self.get_category_data(chosen_category) # uses helper method to get clues from API
            self.play_game(chosen_category.id, api_data) # plays the game!
        end
    end

    def choose_category
        # displays all seeded categories to user 
        category_titles = Category.all.map { |cat| cat.title }
        chosen_title = @@prompt.enum_select("Choose your category", category_titles, per_page: 10)
        Category.find_by(title: chosen_title)
    end

    def get_category_data(category)
        # binding.pry
        resp = RestClient.get("http://jservice.io/api/category?id=#{category.api_id}")
        JSON.parse(resp)
        # AI: send a request to the API for clues from the correct category, passed in as an argument
    end

    def play_game(category_id, category_data)
        # currently only shows 2 quesions in order to get the get the total possible score and
        # display the questions and get actual scores 
        possible = category_data["clues"].slice(0,2).sum { |clue| clue["value"] }
        total = category_data["clues"].slice(0,2).map do |clue|
            self.give_clue_prompt(category_data["title"], clue)
        end.sum
        puts "You scored #{total}!"
        Game.create(user_id: @@user.id, category_id: category_id, score: total, total_possible: possible)
    end

    def give_clue_prompt(title, clue)
        attempts = 0
        while attempts < 3
            system('clear')
            puts @@artii.asciify(title)
            puts "Your clue... \n"
            puts "#{clue["question"]} \n"
            guess = @@prompt.ask("What is your answer?")
            if guess == clue["answer"]
                puts "You did it!! Correct answer! \n\n"
                sleep(1.5)
                return clue["value"]
            end
            puts "Wrong! Try Again!" if attempts < 2
            sleep(0.5)
            attempts += 1
        end
        puts "Alas, you ran out of tries. The correct answer was: #{clue["answer"]} \n\n"
        sleep(1.5)
        return 0
    end
end