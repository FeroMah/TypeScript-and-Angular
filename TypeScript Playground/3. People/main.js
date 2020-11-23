"use strict";
exports.__esModule = true;
var people_1 = require("./people");
var junior = new people_1.Junior("j", 30);
//TODO
junior.work();
console.log(junior.getSalary());
var senior = new people_1.Senior("s", 32);
//TODO
senior.work();
console.log(senior.getSalary());
var manager = new people_1.Manager("m", 40);
//TODO
manager.work();
console.log(manager.getSalary());
