require 'pry'
require_relative '../config/environment'

cli = CLI.new

cli.welcome

binding.pry