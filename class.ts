import { ClassRegister } from "./classInterface";

 export class Register implements ClassRegister { 

    constructor (
        public full_name: string, 
        public age: number, 
        public gender: string, 
        public skin_color: string) 
        { }
 }