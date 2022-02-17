import { projects } from "./ProjectsLogic";
const displayProjects = () => {
  const article = document.querySelector("article");
  if ([article].length == 1) {
    const displayProjects = document.querySelector(".displayProjects");
    const projectsdisplay = document.createElement("div");
    projectsdisplay.classList.add("Projects");
    displayProjects.appendChild(projectsdisplay);
    for (let i = 0; i != localStorage.length; i++) {
      const project = document.createElement("div");
      const projectBtn = document.createElement("button");
      project.classList.add(localStorage.key(i));
      projectBtn.innerText = localStorage.key(i);
      projectBtn.id = localStorage.key(i);
      projectsdisplay.appendChild(project);

      project.appendChild(projectBtn);
      project.innerHTML += `<button class="deleteProject">⌫</button>`;
    }
  }
};
const showAddedProject = () => {
  const project = document.createElement("div");
  const projectBtn = document.createElement("button");
  project.classList.add(title.value);
  projectBtn.innerText = title.value;
  projectBtn.id = title.value;
  const projectsdisplay = document.querySelector(".Projects");
  projectsdisplay.appendChild(project);
  project.appendChild(projectBtn);
  project.innerHTML += `<button class="deleteProject">⌫</button>`;
};
const displayCurrentProject = () => {
  const article = document.querySelector("article");
  const projectDetails = document.querySelector(".projectDetails");
  if ([...document.querySelectorAll(".projectDetails>*")].length < 3) {
    const showProjects = document.querySelectorAll(
      ".Projects>div>button:not(.deleteProject)"
    );
    showProjects.forEach((item) =>
      item.addEventListener("click", function (event) {
        const projectName = event.currentTarget.id;

        const content = document.querySelector(".content");

        content.innerHTML = `
                <h1>${projectName}</h1>
                <div class="tasks">
                <div><input type="text" id="task"><button id="deleteTask">Delete </button> <button id="addTask">add</button><div>
                </div> 
                <div id="dueDate">dueDate:${projects
                  .filter((item) => item.title == projectName)
                  .map((itemm) => itemm["dueDate"])}</div>
                  `;
      })
    );
  }
};
export { displayProjects, showAddedProject, displayCurrentProject };
