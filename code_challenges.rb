# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in an array of words and a letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

#write a method called drank with def/end
#drank will take in 2 parameters, array and letter
#use .select method which returns a new array with in which the given block returns a true value
    #in the .select block, the value is passed in pipes 
#use .includes? on value and pass in letter as argument
#implicit return will return the new array with values that contain selected letter

def drank array, letter
    array.select { |value| value.include?(letter)}
end

p drank beverages_array, letter_o
p drank beverages_array, letter_t

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

#create method called theBeatles
#method will take in string
#change characters in sting to lowercase with .downcase
#delete vowels with .delete "aeiou"
#the beatles rock!
def theBeatles string
    string.downcase.delete "aeiou"
end

p theBeatles album1
p theBeatles album2
p theBeatles album3

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a get_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike
    def initialize model, num
        @model = model
        @wheels = 2
        @current_speed = 0
    end
    def pedal_faster num
        @current_speed += num
    end
    def get_info
        "The #{@model} bike has #{@wheels} wheel and is going #{@current_speed} mph."    
    end
end
new_bike = Bike.new 'Trek', 10
p new_bike.get_info
# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0
