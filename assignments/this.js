/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function windowBinder(params) {
    return this;
}
// console.log(windowBinder());
// Principle 2
// code example for Implicit Binding
const implicitBinding = {
    "name": 'Ruben',
    "school": "Lambda School",
    "bio": function (){
        return `${this.name} is a student at ${this.school}`;
    }

}
// console.log(implicitBinding.bio());


// Principle 3

// code example for New Binding
function Binding(name){
    this.name = name;
    this.school = 'Lambda School'
    this.bio = function () {
        return `${this.name} is a student at ${this.school}`;
    }
}
const steven = new Binding ('Steven');
// console.log(steven.bio()); 
// Principle 4

// code example for Explicit Binding
function Student(name, school) {
    this.name = name;
    this.school = school;

}
function Occupation(name, school, occupation){
    Student.call(this, name, school);
    this.occupation = occupation;
    this.introduction = function (){
        return `${this.name} is a ${this.occupation} that went to ${this.school}`
    }
}
// console.log(new Occupation('Ruben', 'Lambda School', 'Full Stack Developer').introduction())