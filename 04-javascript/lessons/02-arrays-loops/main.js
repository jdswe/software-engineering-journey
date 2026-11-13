const list = document.querySelector("#skills-list");

const skills = ["HTML", "CSS", "Git", "JavaScript"];

for (const skill of skills) {
  const item = document.createElement("li");
  item.textContent = skill;
  list.append(item);
}
