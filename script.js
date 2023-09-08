"use strict";
/* Write a JavaScript program that creates a class called 'Animal' with properties for species and sound. Include a method to make the animal's sound. Create a subclass called 'Dog' that inherits from the 'Animal' class and adds an additional property for color. Override the make sound method to include the dog's color. Create an instance of the 'Dog' class and make it make its sound."*/
//Pseudocode

// Create class 'Animal'
//Add Properties of 'species' and 'sound'
//Include a method 'MakeSound'
//Create a sub-class 'Dog' that inherit the properties of 'Animal'
//Add addotional property of 'color' to the 'Dog' class properties
//Override the Makesound method to include 'Dog' class
//Make the 'Dog' sound

// Create class 'Animal'
class Animals {
  constructor(species, sound) {
    this.species = species;
    this.sound = sound;
  }
  //Include a method 'MakeSound'
  makeSound() {
    console.log(`${this.species} species makes ${this.sound} sound`);
  }
}
//Create a sub-class 'Dog' that inherit the properties of 'Animal' (Instance of 'Dog')
const Dog = new Animals("Dog", "Woof");
console.log(Dog);

//Dog species make sound
Dog.makeSound();

//Subclass of 'Dog'
class DogColor extends Animals {}
