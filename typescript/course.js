"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
var Course = /** @class */ (function () {
    function Course(name, teacher) {
        this.name = name;
        this.teacher = teacher;
        this.students = [];
        teacher.addCourse(this);
    }
    Course.prototype.enrollStudent = function (student) {
        this.students.push(student);
    };
    Course.prototype.getCourseDetails = function () {
        var details = "\n\nCourse Name: ".concat(this.name, "\n\n");
        details += "Faculty/Teacher: ".concat(this.teacher.name, "\n\n");
        details += "Students enrolled:\n";
        this.students.forEach(function (student, index) {
            details += "".concat(index + 1, ". ").concat(student.name, "\n");
        });
        return details;
    };
    return Course;
}());
exports.Course = Course;
