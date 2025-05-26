//task1
class Animal{
constructor (name, age){
this.name = name;
this.age = age;
}
}

//task2
class Mammal extends Animal {
constructor(name, age, warmblooded){
super(name, age);
this.warmblooded= warmblooded;
}
feeds(type){
console.log(`${this.name} is a warm-blooded mammal and eats ${type}.`);
}
}

//task3
class Dog extends Mammal {
constructor(name, age, warmblooded, breed){
super(name, age,warmblooded);
this.breed= breed;
}
describe(){
        console.log(`${this.name} is a ${this.age}-year-old ${this.breed} dog.`);
    }
}

//task4
class Bird extends Animal{
constructor (name, age, wingspan){
super(name, age);
this.wingspan = wingspan;
}
hatchEggs(period){
        console.log(`${this.name} will hatch eggs in ${period} days.`);
    }
}

//task5
class Parrot extends Bird{
constructor( name, age, wingspan, canTalk){
super(name, age, wingspan);
this.canTalk= canTalk;
}
speaks(words){
        if (this.canTalk) {
            console.log(`${this.name} says: "${words}"`);
        } else {
            console.log(`${this.name} cannot talk.`);
        }
    }
}

//task6
const dog1= new Dog("Leo", 2, true, "Pitbull");
const dog2 = new Dog("Duke", 4, true, "Cane Corso");

const parrot1 = new Parrot("Blue", 3, "0.5 meters", true);
const parrot2 = new Parrot("Jack", 1, "0.6 meters", true);

dog1.describe();
dog1.feeds("pellets and gravy");

dog2.describe();
dog2.feeds("meat and rice");

parrot1.hatchEggs(20);
parrot1.speaks("Hello, how are you?");

parrot2.hatchEggs(35);
parrot2.speaks("Have a good day!");

//task7

class Home{
constructor(){
this.pets=[];
}
addPets(pet){
this.pets.push(pet);
}
listPets(){
console.log("Pets in the home:");
        this.pets.forEach(pet => {
            console.log(`- ${pet.name}`);
        });
}
}

const myHome = new Home();
myHome.addPets(dog1);
myHome.addPets(dog2);
myHome.addPets(parrot1);
myHome.addPets(parrot2);

myHome.listPets();