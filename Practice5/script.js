// Task 1
function propsCount(currentObject) {
    return Object.keys(currentObject).length;
}

let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development", 
};

console.log(`Task 1 result: ${ propsCount(mentor) }` );  

// Task 2
let user = {
    firstName: 'Petro',
    secondName: 'Husak',
    age: 22,
    city: 'Lviv',
    eyeColor: 'green'
}


function showProps(obj) {
    let propertyArray = [];
    let valueArray = [];
    let counter = 0;

    for (let i in obj) {
        propertyArray[counter] = i;
        valueArray[counter] = obj[i];
        counter++;
    }

    console.log(`Task 2`);
    console.log(`Property: ${propertyArray}`);
    console.log(`Value: ${valueArray}`);
}

showProps(user);


// Task 3
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    showFullName() {
        console.log(`Full name: ${this.name + this.surname}`);
    }
}

class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }
    
    #currentYear = (new Date()).getFullYear();

    showFullName(midleName) {
        console.log(`Full name: ${this.name} ${this.surname} ${midleName}`);
    }

    showCourse() {
        return this.#currentYear - this.year;
    }
}

let student1 = new Student("Petro", "Petrenko", 2015);
student1.showFullName("Petrovych"); 
console.log("Current course: " + student1.showCourse()); 

// Task 4
console.log('Task 4');

class Worker {
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }

    #experience = 1.2;

    get showExp() {
        return this.#experience;
    }

    set setExp(experience) {
        this.#experience = experience;
    }

    showSalary() {
        return this.dayRate * this.workingDays;
    }

    showSalaryWithExperience() {
        return this.dayRate * this.workingDays * this.#experience;
    }
}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);                 
console.log(worker1.showSalary());
console.log("New experience: " + worker1.showExp);
console.log(worker1.showSalaryWithExperience());
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
console.log(worker1.showSalaryWithExperience());

let worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);                 
console.log(worker2.showSalary());
console.log("New experience: " + worker2.showExp);
console.log(worker2.showSalaryWithExperience());
worker2.setExp = 2;
console.log("New experience: " + worker2.showExp);
console.log(worker2.showSalaryWithExperience());

let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);                 
console.log(worker3.showSalary());
console.log("New experience: " + worker3.showExp);
console.log(worker3.showSalaryWithExperience());
worker3.setExp = 1.3;
console.log("New experience: " + worker3.showExp);
console.log(worker3.showSalaryWithExperience());

if(worker1.showExp < worker2.showExp && worker1.showExp < worker3.showExp) {
    
    if(worker2.showExp < worker3.showExp) {
        console.log(worker1.fullName + ': ' + worker1.showSalaryWithExperience());
        console.log(worker2.fullName + ': ' + worker2.showSalaryWithExperience());
        console.log(worker3.fullName + ': ' + worker3.showSalaryWithExperience());
    } else {
        console.log(worker1.fullName + ': ' + worker1.showSalaryWithExperience());
        console.log(worker3.fullName + ': ' + worker3.showSalaryWithExperience());
        console.log(worker2.fullName + ': ' + worker2.showSalaryWithExperience());
    }

} else if(worker2.showExp < worker1.showExp && worker2.showExp < worker3.showExp) {
   
    if(worker1.showExp < worker3.showExp) {
        console.log(worker2.fullName + ': ' + worker2.showSalaryWithExperience());
        console.log(worker1.fullName + ': ' + worker1.showSalaryWithExperience());
        console.log(worker3.fullName + ': ' + worker3.showSalaryWithExperience());
    } else {
        console.log(worker2.fullName + ': ' + worker2.showSalaryWithExperience());
        console.log(worker3.fullName + ': ' + worker3.showSalaryWithExperience());
        console.log(worker1.fullName + ': ' + worker1.showSalaryWithExperience());
    }

} else if(worker3.showExp < worker1.showExp && worker3.showExp < worker2.showExp) {
   
    if(worker2.showExp < worker1.showExp) {
        console.log(worker3.fullName + ': ' + worker3.showSalaryWithExperience());
        console.log(worker2.fullName + ': ' + worker2.showSalaryWithExperience());
        console.log(worker1.fullName + ': ' + worker1.showSalaryWithExperience());
    } else {
        console.log(worker3.fullName + ': ' + worker3.showSalaryWithExperience());
        console.log(worker1.fullName + ': ' + worker1.showSalaryWithExperience());
        console.log(worker2.fullName + ': ' + worker2.showSalaryWithExperience());
    }

} 

// Task 5
class GeometricFigure {
    getArea() {
        return 0;
    }

    toString() {
        return Object.getPrototypeOf(this).constructor.name;
   }
   
}

class Triangle extends GeometricFigure{
    constructor(sideA, sideB, sideC) {
        super();
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }
    
    #halfPerimeter = 0;
    
    getArea() {
        this.#halfPerimeter = (this.sideA + this.sideB + this.sideC) / 2;
        return (this.#halfPerimeter * (this.#halfPerimeter - this.sideA) * (this.#halfPerimeter - this.sideB) * (this.#halfPerimeter - this.sideC)) ** (1/2);
    }

}

class Square extends GeometricFigure {
    constructor(sideA) {
        super();
        this.sideA = sideA;
    }

    getArea() {
        return this.sideA ** 2;
    }
}

class Circle extends GeometricFigure {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    getArea() {
        return Math.PI * (this.radius ** 2);
    }
}

function handleFigures(figures) {
    let totalArea = 0;

    for(let i = 0; i < figures.length; i++) {
        if( !( figures[i] instanceof GeometricFigure ) ){
            console.log(`Class ${figures[i]} not derived from GeometricFigure`);
            return;
        } else {
            console.log(`GeometricFigure : ${figures[i].toString()} - area: ${figures[i].getArea()}`);
            totalArea += figures[i].getArea();
        }
        
    }

    return `Total area: ${totalArea}`;
}

const figures = [new Triangle(4, 5, 3), new Square(7), new Circle(5)];
console.log(handleFigures(figures));