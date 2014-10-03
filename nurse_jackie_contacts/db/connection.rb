require 'active_record'

ActiveRecord::Base.establish_connection({
  :adapter => "postgresql",
  :host => "localhost",
  :username => "heidiwilliams",
  :database => "nurse_jackie"
})

ActiveRecord::Base.logger = Logger.new(STDOUT)
