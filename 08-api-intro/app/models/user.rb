require "tty-prompt"

class User < ActiveRecord::Base
    has_many :games
    has_many :categories, through: :games
    @@prompt = TTY::Prompt.new

    def self.signup
        username = @@prompt.ask("What is your name?")
        password = @@prompt.mask("What is your password?")
        self.create(username: username, password: password)
    end

    def self.login
        username = @@prompt.ask("What is your name?")
        password = @@prompt.mask("What is your password?")
        self.find_by(username: username, password: password)
    end
end