// var course = new Object();

// var course = {
//     title: "JavaScript Essential Training",
//     instructor: "Morten Rand-Hendriksen",
//     level: 1,
//     published: true,
//     views: 0,
//     updateViews: function() {
//         return ++course.views;
//     }
// }

// console.log(course);

// var currentDate = new Date();

// var course02 = new Course();

function Course(title,instructor,level,published,views) {
    this.title = title;
    this.instructor = instructor;
    this.level = level;
    this.published = published;
    this.views = views;
}
var courses = [
    new Course("javascript","me",3,true,34),
    new Course("javascript","not me",4,false,1232)
]

console.log(courses);
console.log(courses[1].title);