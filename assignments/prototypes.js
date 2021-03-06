/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
function GameObject(attributes) {
  this.createdAt = attributes.createdAt;
  this.name = attributes.name;
  this.dimensions = attributes.dimensions;
} //GameObject
GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game`;
};

CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`;
};
function CharacterStats(charAttributes) {
  GameObject.call(this, charAttributes),
    (this.healthPoints = charAttributes.healthPoints);
} //Character Stats

Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}`;
};

function Humanoid(humanProps) {
  CharacterStats.call(this, humanProps);
  this.team = humanProps.team;
  this.weapons = humanProps.weapons;
  this.dimensions = humanProps.dimensions;
  this.language = humanProps.language;
} //Humanoid

Villain.prototype = Object.create(Humanoid.prototype);
Villain.prototype.useWeapon = this.useWeapon = function() {
  return -1;
}
Hero.prototype = Object.create(Humanoid.prototype);
Hero.prototype.useWeapon = this.useWeapon = function(hit) {
  if(hit){
    return --this.healthPoints
  }
  return this.healthPoints;
}


let villain = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: "Villain",
  team: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Tongue",
  hit: ""
});

function Villain(evil) {
  Humanoid.call(this, evil)
  let roll = Math.floor((Math.random() * 5) + 1)
  if(roll %2===0 ){
    evil.hit = this.takeDamage();
    console.log(evil.hit)
    evil.healthPoints = evil.healthPoints-1; 
    console.log(`Hero has ${evil.healthPoints} health points`)
  } else{
    console.log('The Hero Missed!')
  }
  
}
function Hero(good) {
  Humanoid.call(this, good)
  let roll = Math.floor((Math.random() * 5) + 1)
  if(roll %2===0 ){
    good.hit = this.takeDamage();
    console.log(good.hit)
    good.healthPoints = good.healthPoints-1; 
    console.log('The Villain Missed')
  } else{
 
    console.log(`Vilain has ${good.healthPoints} health points`)
  }
  
}




/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Test you work by un-commenting these 3 objects and the list of console logs below:


// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!
