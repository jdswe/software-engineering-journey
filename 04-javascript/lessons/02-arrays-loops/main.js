const skillsList = document.querySelector("#skills-list");
const learningList = document.querySelector("#learning-list");

const skills = ["HTML", "CSS", "Git", "JavaScript"];

for (const skill of skills) {
  const item = document.createElement("li");
  item.textContent = skill;
  skillsList.append(item);
}

const learning = ["Java", "MySQL", "MVC"];

for (const learn of learning) {
  const item = document.createElement("li");
  item.textContent = learn;
  learningList.append(item);
}
