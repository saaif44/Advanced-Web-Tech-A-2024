"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var teacher_1 = require("./teacher");
var student_1 = require("./student");
var course_1 = require("./course");
// Creating instances of teacher, students, and courses
var teacher = new teacher_1.Teacher("Saiful Islam");
var course = new course_1.Course("Advanced Web Technology", teacher);
var student1 = new student_1.Student("Mohammad");
var student2 = new student_1.Student("Saif");
var student3 = new student_1.Student("Shuvo");
var student4 = new student_1.Student("Prince");
var student5 = new student_1.Student("Mithi");
// Enroll students in the course
course.enrollStudent(student1);
course.enrollStudent(student2);
course.enrollStudent(student3);
course.enrollStudent(student4);
course.enrollStudent(student5);
// Output course details
console.log(course.getCourseDetails());
