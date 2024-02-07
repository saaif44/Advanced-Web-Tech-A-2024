import { Student } from './student';
import { Teacher } from './teacher';

export class Course {
    name: string;
    teacher: Teacher;
    students: Student[];

    constructor(name: string, teacher: Teacher) {
        this.name = name;
        this.teacher = teacher;
        this.students = [];
        teacher.addCourse(this);
    }

    enrollStudent(student: Student) {
        this.students.push(student);
    }

    getCourseDetails(): string {
        let details = `\n\nCourse Name: ${this.name}\n\n`;
        details += `Faculty/Teacher: ${this.teacher.name}\n\n`;
        details += "Students enrolled:\n";
        this.students.forEach((student, index) => {
            details += `${index + 1}. ${student.name}\n`;
        });
        return details;
    }
}
