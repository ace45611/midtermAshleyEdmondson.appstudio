/*
Program 1 Extra Credit (2.5%):  
Scenario:  This will work exactly like the program 'animal' from above, except it will run twice.  

Program 1 Extra Credit Requirements

Used the code from the 'animal' form in a new form named 'animalEC'.
Removed all 'let' code from copied code variables so you aren't re-creating the variables again.
The program runs exactly two times. 
The program runs without error.
*/

myAnimals = ['dog', 'cat', 'horse', 'meerkat']

for (i = 0; i < 2; i++){
    addAnimal = prompt("Enter an animal")
    addAnimal = addAnimal.toLowerCase()
    myAnimals.push(addAnimal)
    console.log(`The last animal in the array is a/an ${myAnimals[myAnimals.length - 1]}.`)
}
    