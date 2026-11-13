const skillsList = document.querySelector("#skills-list");
const learningList = document.querySelector("#learning-list");

const skills = ["HTML", "CSS", "Git", "JavaScript"];

const learning = ["Java", "MySQL", "MVC"];

function renderList(items, container) {
  for (const skill of items) {
    const item = document.createElement("li");
    item.textContent = skill;
    container.append(item);
  }
}

renderList(skills, skillsList);
renderList(learning, learningList);
