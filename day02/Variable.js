// This file is a practice of Variables
// First we should declare a variable for that we will use 'let'
let bookName;

// after declaration we have to initialize the variable 
bookName = "Harry Potter";

//Both the declaration and initialization can be done in same line 
var bookAuthor = "J K Rowling";
// We can also use 'Var' instead of 'let' to declare a variable

//Instead of using let in every declaration we can use comma
let bookPublisher = "Arun", secondName ="Krishna";

//To print a variable using console log use the variable name without " double quotes
console.log(bookAuthor, bookName,  "\n", bookPublisher,secondName);

/* Rules to Name a variable (variables are also known as identifiers)
1. Variable should be unique
2. Varibale should not start with numbers, but can have numbers
3. only $ and _ are the allowed special characters
4. Variables are case sensitive. for ex: BookName and bookName are 2 different variables
5. Keywords should not be used a variable. ex: log, let.
 */