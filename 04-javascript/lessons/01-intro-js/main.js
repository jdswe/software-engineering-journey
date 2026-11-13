const message = "Hello from JavaScript";
console.log(message);

function greet(name) {
  return "Hola, " + name;
}

console.log(greet("Jose"));

const age = 20;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

const score = 95;

if (score >= 90) {
  console.log("Excellent");
} else if (score >= 70) {
  console.log("Good");
} else {
  console.log("Keep practicing");
}

function grade(score) {
  if (score >= 90) {
    return "Excellent";
  } else if (score >= 70) {
    return "Good";
  } else {
    return "Keep practicing";
  }
}
console.log(grade(95));
console.log(grade(75));
console.log(grade(30));
