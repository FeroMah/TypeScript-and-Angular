import { Junior, Senior, Manager } from "./people";

let junior: Junior = new Junior(`j`, 30);
//TODO
junior.work();
console.log(junior.getSalary());

let senior: Senior = new Senior(`s`, 32);
//TODO
senior.work();
console.log(senior.getSalary());

let manager: Manager = new Manager(`m`, 40);
//TODO
manager.work();
console.log(manager.getSalary());
