/* function sayHello(){
    for (var i = 0; i < 5; i++) {
        console.log(i);   
    }
    for (let i = 0; i < 5; i++) {
        console.log(i);  
    }

    console.log(i);
}

// variables declared with var are scoped to function
// variables declared with let are scoped to block in which they're defined
// constants declared with const are also block-scoped

sayHello(); */

/* const x = 1;
x= 2; */
/* 
const person = {
    name: 'Mosh',
    walk() {
        console.log(this);
    }
}; */

// person.walk();

/* const walk = person.walk.bind(person);
// console.log(walk);
walk(); */

/* person.talk();
person.name = '';
const targetMember = 'name';
// person['name'] = 'John';
person[targetMember.value] = 'John'; */

/* const square = function(number) {
    return number * number;
} */

/* const square = (number) => number * number;
console.log(square(5));

const jobs = [
    {id: 1, isActive: true},
    {id: 2, isActive: true},
    {id: 3, isActive: false}
];

// const activeJobs = jobs.filter(function(job) {return job.isActive;});
const activeJobs = jobs.filter(job => job.isActive);
console.log(activeJobs); */

/* const person = {
    talk() {
        var self = this;
        /* setTimeout(function() {
            // console.log('this', this);
            console.log('self', self);
        }, 1000); */
        /* setTimeout(() => console.log("this", this), 1000);
    }
};

person.talk(); */

// const colors = ['red', 'green', 'blue'];
/* const items = colors.map(function(color) {
    return '<li>' + color + '</li>';
}); */
// const items = colors.map(color => '<li>' + color + '</li>');
/* const items = colors.map(color => `<li>${color}</li>`);
console.log(items); */
/* 
const address = {
    street: '',
    city: '',
    country: ''
} */

/* const street = address.street;
const city = address.city;
const country = address.country; */

// const {street, city, country} = address;
// const {street: st} = address;

/* const first = [1, 2, 3];
const second = [4, 5, 6]; */
// const combined = first.concat(second);
/* const combined = [...first, 'a', ...second, 'b'];
console.log(combined); */

/* const clone = [...first];
console.log(first);
console.log(clone); */

/* const first = {name: 'Mosh'};
const second = {job: 'Instructor'};
const combined = {...first, ...second, location: 'Australia'};
console.log(combined);
const clone = {...first}; */

/* const person = {
    name: "Mosh",
    walk() {
        console.log("walk");
    }
}; */

/* const person2 = {
    name: "Mosh",
    walk() {
        console.log("walk");
    }
}; */


/* const person = new Person("Mosh"); */

// import {Teacher} from './teacher.js';
// curly braces only needed for named exports, not default ones
import Teacher, {promote} from './teacher.js';
// import React, {Component} from 'react';

const teacher = new Teacher("Mosh", "MSc");
teacher.teach();

