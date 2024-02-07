import { Teacher } from './teacher';
import { Student } from './student';
import { Course } from './course';

// Creating instances of teacher, students, and courses
const teacher = new Teacher("Saiful Islam");
const course = new Course("Advanced Web Technology", teacher);
const student1 = new Student("Mohammad");
const student2 = new Student("Saif");
const student3 = new Student("Shuvo");
const student4 = new Student("Prince");
const student5 = new Student("Mithi");

// Enroll students in the course
course.enrollStudent(student1);
course.enrollStudent(student2);
course.enrollStudent(student3);
course.enrollStudent(student4);
course.enrollStudent(student5);

// Output course details
console.log(course.getCourseDetails());
