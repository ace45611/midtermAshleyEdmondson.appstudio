let myAnimals = ['dog', 'cat', 'horse', 'meerkat']

let addAnimal = prompt("Enter an animal")
addAnimal = addAnimal.toLowerCase()

myAnimals.push(addAnimal)
console.log(`The last animal in the array is: ${myAnimals[myAnimals.length - 1]}`)