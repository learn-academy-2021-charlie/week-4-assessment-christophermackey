# ASSESSMENT 4: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.  

1. What is an instance variable in Ruby? How is it different from other variables?

  Your answer: An instance variable is a variable inside a class. It is locally scoped and can be accessed by instances of the class with a getter and setter method or attr_accessor. 

  Researched answer:  The instance variable is a variable that starts with @ and belongs to the instance of a class. Each instance of a class will have its own instance variables. 



2. What is a block in Ruby? 

  Your answer: Blocks are anonymous functions in Ruby. They can use `do` and `end` with the function logic inside or { } if the logic is short enough for one line. 

  Researched answer: Blocks are similar to anonymous functions in Javascript. Blocks are code that is passed to a method.



3. Ruby has an implicit return. What does that mean?

  Your answer: This means that the last line inside of a method will be automatically returned and does not use the 'return' keyword.

  Researched answer: In a method, that value of the last line is returned without using the keyword 'return'. 



4. What is object-oriented programming? How is it different than functional programming?

  Your answer: OOP focuses on data stored in objects, whereas functional programming does not have objects. I know there's more to this but I will have to research first. 

  Researched answer: OOP is a programming model that was designed to handle large, complex software systems. In order to maintain large amounts of data, OOP implements objects which are containers to house the data. This allows dependencies to be split into smaller parts, rather than relying on the entire program. Functional programming is programming that avoids changing state and mutable data. 


5. What is the difference between a class and an object?

  Your answer: A class is a blueprint of an object. An object is an instance of a class.

  Researched answer: Class defines the data and behavior that exist within an object. Everything in Ruby is an object and every object belongs to a class. 



6. STRETCH: What is `attr_accessor`?

  Your answer: attr_accessor is a shortcut to the setter and getter methods. It allows us to more easily access values within a class by directly calling its variable.

  Researched answer: attr_accessor automatically sets the setter and getter methods for instance variables and allows us to access its values from outside the class.



## Looking Ahead: Terms for Next Week

1. PostgreSQL: postgres is a type of structured query language used to look at databases in an object-oriented programming lens. With postgres you can define your own data types and build out custom functions.
 
2. Ruby on Rails: Rails is a model-view-controller framework written in Ruby. It is designed to make building web apps easier and fun. Its two principles are `convention over configuration` and `programmer happiness.`

3. CRUD: stands for `create, read, update, delete.` These are the four functions considered necessary to implement a persistent storage application. It creates an virtual object database that can be accessed from within the language.

4. ORM: object relational mapping is a programming technique for converting data between incompatible type systems using object-oriented programming languages. It allows developers to write SQL queries using Rails.

5. Active Record: is a Rails ORM, which acts like an interface between the Rails app and the database. It allows developers to access data from a database table, and interact with it like an object.
