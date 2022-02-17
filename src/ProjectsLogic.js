import { showAddedProject, displayCurrentProject } from "./displayProjects";
const projects = [];
const loadProjects = () => {
  for (let i = 0; i != localStorage.length; i++) {
    projects.push(JSON.parse(localStorage[localStorage.key(i)]));
  }
};
function removeProject(ProjectName) {
  localStorage.removeItem(ProjectName);
  projects.filter((item) => item.title != ProjectName);
}
function addproject() {
  const project = {
    title: title.value,
    description: description.value,
    dueDate: `${inputdueDate.value}`,
    priority: priority.value,
  };
  localStorage.setItem(title.value, JSON.stringify(project));
  projects.push(project);
  showAddedProject();
}
console.log(projects);
export { addproject, projects, loadProjects, removeProject };
