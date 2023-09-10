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
    console.log("The method makeSound called by the instance:::");
    console.log("'Species' is:", this.species);
    console.log("'Species's Sound' is:", this.sound);
    console.log(`${this.species} species makes ${this.sound} sound`);
  }
}
//Create a sub-class 'Dog' that inherit the properties of 'Animal' (Instance of 'Dog')
const testDog = new Animals("Dog", "Woof");
console.log(testDog);

//Dog species make sound
testDog.makeSound();

//Subclass of 'Dog' add more property
class Dog extends Animals {
  constructor(species, sound, color) {
    super(species, sound);
    this.color = color;
  }

  //Override the makeSound
  makeSound() {
    console.log(
      "The method makeSound method is override, to add property of color:::"
    );
    console.log("'Species' is:", this.species);
    console.log("'Species's Sound' is:", this.sound);
    console.log("Species's Color' is:", this.color);
    console.log(
      `${this.color} color ${this.species} species make ${this.sound} sound`
    );
  }
}

//Make an instance of dogColor class
const dogColor = new Dog("Dog", "Woof", "Black");
console.log(dogColor);
//dogColor calls makeSound method
dogColor.makeSound();
