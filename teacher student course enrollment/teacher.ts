import { Course } from './course';

export class Teacher {
    name: string;
    courses: Course[];

    constructor(name: string) {
        this.name = name;
        this.courses = [];
    }

    addCourse(course: Course) {
        this.courses.push(course);
    }
}
