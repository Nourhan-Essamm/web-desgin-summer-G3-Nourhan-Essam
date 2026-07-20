let courses = ["html", "css", "js"];

let searchcourses = prompt("Enter your course name");

let index = courses.findIndex((item) => item == searchcourses);

if (index != -1) {
    alert("founded at index:  " + index);
} else {
    courses.push(searchcourses);
    console.log(courses);
}