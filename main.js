// Assignment 9

// Answer 1
let literalNotation = [];

// Answer 2
let objectNotation = [];

// Answer 3
let names = ["ahmed", "hamza", "abduillah"];

// Answer 4
let numbers = [1, 2, 3, 4, 5];

// Answer 5
let booleanArray = [true, false];

// Answer 6
let mixedArray = [1, "ahmed", true];

// Answer 7
let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write("<h2>Educational Qualifications in Pakistan:</h2>");
document.write("<ul>");
for (let i = 0; i < qualifications.length; i++) {
    document.write("<li>" + qualifications[i] + "</li>");
}
document.write("</ul>");

// Answer 8
let studentNames = ["ahmed", "hamza", "abduillah"];
let scores = [420, 380, 450];
let totalMarks = 500;
console.log("Student Scores and Percentages:");
for (let i = 0; i < studentNames.length; i++) {
    let percentage = (scores[i] / totalMarks) * 100;
    console.log(studentNames[i] + ": Score - " + scores[i] + ", Percentage - " + percentage.toFixed(2) + "%");
}

// Answer 9
// Initialize array with color names
let colors = ["red", "green", "blue"];

// Display initial array
document.write("<h3>Initial Array:</h3>");
document.write("<ul>");
for (let i = 0; i < colors.length; i++) {
    document.write("<li>" + colors[i] + "</li>");
}
document.write("</ul>");

// Ask user for color to add to the beginning and add it
let newColorBeginning = prompt("Enter a color to add to the beginning:");
colors.unshift(newColorBeginning);
document.write("<h3>Array after adding color to the beginning:</h3>");
document.write("<ul>");
for (let i = 0; i < colors.length; i++) {
    document.write("<li>" + colors[i] + "</li>");
}
document.write("</ul>");

// Ask user for color to add to the end and add it
let newColorEnd = prompt("Enter a color to add to the end:");
colors.push(newColorEnd);
document.write("<h3>Array after adding color to the end:</h3>");
document.write("<ul>");
for (let i = 0; i < colors.length; i++) {
    document.write("<li>" + colors[i] + "</li>");
}
document.write("</ul>");

// Add two more colors to the beginning of the array
colors.unshift("yellow", "orange");
document.write("<h3>Array after adding two more colors to the beginning:</h3>");
document.write("<ul>");
for (let i = 0; i < colors.length; i++) {
    document.write("<li>" + colors[i] + "</li>");
}
document.write("</ul>");

// Delete the first color in the array
colors.shift();
document.write("<h3>Array after deleting the first color:</h3>");
document.write("<ul>");
for (let i = 0; i < colors.length; i++) {
    document.write("<li>" + colors[i] + "</li>");
}
document.write("</ul>");

// Delete the last color in the array
colors.pop();
document.write("<h3>Array after deleting the last color:</h3>");
document.write("<ul>");
for (let i = 0; i < colors.length; i++) {
    document.write("<li>" + colors[i] + "</li>");
}
document.write("</ul>");

// Ask user for index and color to add at that index
let indexToAdd = prompt("Enter the index where you want to add a color:");
let colorToAddAtIndex = prompt("Enter the color you want to add at that index:");
colors.splice(indexToAdd, 0, colorToAddAtIndex);
document.write("<h3>Array after adding color at a specific index:</h3>");
document.write("<ul>");
for (let i = 0; i < colors.length; i++) {
    document.write("<li>" + colors[i] + "</li>");
}
document.write("</ul>");

// Ask user for index and count of colors to delete
let indexToDelete = prompt("Enter the index from where you want to delete color(s):");
let countToDelete = prompt("Enter the number of colors you want to delete:");
colors.splice(indexToDelete, countToDelete);
document.write("<h3>Array after deleting colors from a specific index:</h3>");
document.write("<ul>");
for (let i = 0; i < colors.length; i++) {
    document.write("<li>" + colors[i] + "</li>");
}
document.write("</ul>");

// Answer 10
let studentScores = [85, 92, 78, 90, 88];
console.log("Initial array:", studentScores);
studentScores.sort();
console.log("Array after sorting in ascending order:", studentScores);

// Answer 11
let cities = ["Karachi", "Lahore", "Islamabad", "Pindi", "Delhi"];
let selectedCities = cities.slice(0, 3);
console.log("Selected Cities:", selectedCities);

// Answer 12
var arr = ["This", "is", "my", "cat"];
var singleString = arr.join(" ");
console.log(singleString);

// Answer 13
let fifoArray = [];
fifoArray.push("Apple");
fifoArray.push("Banana");
fifoArray.push("Orange");
for (let i = 0; i < fifoArray.length; i++) {
    console.log(fifoArray[i]);
}

// Answer 14
let lifoArray = [];
lifoArray.push("Apple");
lifoArray.push("Banana");
lifoArray.push("Orange");
for (let i = lifoArray.length - 1; i >= 0; i--) {
    console.log(lifoArray[i]);
}

//  Answer 15
let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select>");
for (let i = 0; i < manufacturers.length; i++) {
    document.write("<option>" + manufacturers[i] + "</option>");
}
document.write("</select>");

