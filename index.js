// Array of numbers
let numbers = [1, 2, 3, 4, 5, 6, 7];
// Calculating the sum of the array of numbers
let sum = numbers.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber,
  0
);
console.log("The sum of all the numbers in the array is ", sum);

// Removing duplicate values from the array
let arrayOfDuplicates = [2, 9, 3, 9, 2, 0, 1, 4, 3, 7];
let arrayWithoutDuplicates = arrayOfDuplicates.reduce((accumulator,currentValue)=> {
  if (accumulator.indexOf(currentValue) === -1) {
    accumulator.push(currentValue);
  }
  return accumulator;
},
[]);
console.log("Array without duplicates :", arrayWithoutDuplicates);

// Array of words
let arrayofwords = ["This", "is", "a", "small", "world"];
// Genrate the sentence from the array of words
let sentence = arrayofwords.reduce(
  (accumulator, currentWord) => accumulator + " " + currentWord,
  ""
);
console.log("The sentence is :", sentence);

//Array of the marks received in each of 7 subjects
let marksArray = [61, 45, 94, 49, 78, 40, 89];

//Get the maximum and the minimum marks from the array
let marksMaxMin = marksArray.reduce(
  (accumulator, marks) => [
    Math.max(accumulator[0], marks),
    Math.min(accumulator[1], marks),
  ],
  [0, 100]
);
console.log(marksMaxMin);

// Total scores received by 5 students
let scores = [470, 600, 550, 450, 399];
// percentage of the scores out of 800
let percentScores = scores.reduce((accumulator, score) => {
  return [...accumulator, (score / 800) * 100];
}, []);

console.log("Array of percentage ", percentScores);
let students = [
  {
    username: "klebanc",
    name: "Kaye Leblanc",
    age: 27,
    gender: "female",
    company: "ENTALITY",
    email: "kayeleblanc@entality.com",
  },
  {
    username: "nbentley",
    name: "Nona Bentley",
    age: 30,
    gender: "female",
    company: "LEXICONDO",
    email: "nonabentley@lexicondo.com",
  },
  {
    username: "mlang",
    name: "Marks Lang",
    age: 27,
    gender: "male",
    company: "LOVEPAD",
    email: "markslang@lovepad.com",
  },
];

// Generate a new javascript object based on the username so that we can get the details
// based on the username rather than iterating on each element of the array to find out
// the username and the details
let studentDetails = students.reduce((accumulator, student) => {
  return { ...accumulator, [student.username]: student };
}, {});

console.log(studentDetails);
