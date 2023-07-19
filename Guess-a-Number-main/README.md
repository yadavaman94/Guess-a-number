# Guess-a-Number
A "Guess the Number" game is a simple HTML, CSS, and JavaScript project that involves generating a random number and having the user guess what the number is. The game is usually displayed on a web page and consists of a title, a description, an input field for the user to enter their guess, and buttons to submit the guess and start a new game.
#Efficinet approach to solve this problem using binary search
To solve the "Guess a Number" problem using binary search, we can follow these steps:

1.Define the range of possible numbers, in this case, it's from 1 to 20.
2.Define the middle number between the minimum and maximum values of the range. In this case, the middle number would be 10 ((1+20)/2).
3.Ask the user to guess the number.
4.Compare the user's guess with the middle number.
5.If the user's guess is equal to the middle number, then the user has guessed the correct number and the game ends.
6.If the user's guess is greater than the middle number, then the new range is from middle number + 1 to the maximum value of the previous range.
7.If the user's guess is less than the middle number, then the new range is from the minimum value of the previous range to middle number - 1.
8.Calculate the new middle number based on the new range and repeat the above steps until the user has guessed the correct number.
