"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
var Teacher = /** @class */ (function () {
    function Teacher(name) {
        this.name = name;
        this.courses = [];
    }
    Teacher.prototype.addCourse = function (course) {
        this.courses.push(course);
    };
    return Teacher;
}());
exports.Teacher = Teacher;
