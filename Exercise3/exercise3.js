
//    --- ENSF 381 -- Lab 3 Exercise 3, A ---

let classRoster = ["Alice", "Tom", "Charlie", "Diana", "Evan"];
//console.log("Initial Array: " + classRoster);

// To string
//classRoster = classRoster.toString();
//console.log("Converted to String : " + classRoster);

// To array
//classRoster = classRoster.split(",");

classRoster.push("Fionna");
classRoster.push("Nancy");

removedStudent = classRoster.shift();    // Remove Alice
//console.log("Removed Student: " + removedStudent);


//console.log("Updated Class Roster: " + classRoster);


//    --- ENSF 381 -- Lab 3 Exercise 3, B ---
classInfo = Object();
classInfo.className = "ENSF381: Full-Stack Web Development";
classInfo.instructor = "Dr. Smith";
classInfo.students = classRoster;
classInfo.details = Object();
    classInfo.details.semester = "Winter";
    classInfo.details.year = 2026;
classInfo.schedule = ["Monday", "Wednesday", "Friday"];

classInfo.instructor = "Dr.  Abdellatif" // Update instructor name

console.log("Class Name: " + classInfo.className);
console.log("Instructor: " + classInfo.instructor);
console.log("Students: " + classInfo.students);
console.log("Semester: " + classInfo.details.semester);
console.log("Year: " + classInfo.details.year);
console.log("Schedule: " + classInfo.schedule);

// Destructuring
// className and students into variables
const { className, students } = classInfo;
console.log("Destructured Class Name: " + className);
console.log("Destructured Students: " + students);

// semester and year into variables
const { details: { semester, year } } = classInfo;
console.log("Destructured Semester: " + semester);
console.log("Destructured Year: " + year);

// first 2 students into variables
const [student1, student2, ...remainingStudents] = students;
console.log("First Student: " + student1);
console.log("Second Student: " + student2);
console.log("Remaining Students: " + remainingStudents);