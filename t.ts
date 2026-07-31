import { Register } from "./class";

interface User {
    name: string,
    age: number,
    gender?: string,
}

class UserAccount {
    name: string;
    age: number;
    gender?: string;

    constructor(name: string, age: number, gender?: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const user : User = new UserAccount('kofi', 3, "Rather not say");

// console.log(user);

// console.log(`My name is ${user.name} and I'm ${user.age} years old and my gender, ${user.gender}`);

function wrapInArray(incoming: string | string[]) {
    if(typeof incoming === 'string'){
        return [incoming];
    }
    return incoming;
}

const outcome = wrapInArray(user.name)

// console.log(typeof outcome);


interface Weather<T> {
    add: (incoming: T) => void;
    get: () => T;
}

function todayWeather<T>(): Weather<T> {
    let data: T;
    return {
        add: (incoming: T) => {data = incoming;},
        get: () => data
    }
}

const weatherToday= todayWeather<{today: string}[]>();

weatherToday.add([{today: 'sunny'}, {today: 'rainy'}]);

// console.log(weatherToday.get());


/**
 * to run a .ts file
 * command is ts-node <filename.ts>
 */

import { ClassRegister } from "./classInterface";

const studentObj: ClassRegister = new Register('randy effah cudjoe', 45, 'male', 'black');
console.log("First student register", studentObj);


