import css from "./style.css";
import { compareAsc, format } from "date-fns";
import inputPannel from "./inputPannel.js";
import { displayProjects, displayCurrentProject } from "./displayProjects.js";
import { loadProjects, projects, removeProject } from "./ProjectsLogic.js";
loadProjects();
const doomLoad = (function () {
  const body = document.querySelector("body");
  body.innerHTML = `
<div class="background"></div>
<nav>
<button class="projectsbtn">projects</button>
<button class="today">Today</button>
<button class="home">home</button>
<button class="tomorrow">tomorrow</button>
<h1 class="todo" style="margin:0;justify-self:end;padding-right:12px">TO-DO</h1>
</nav>
<article>
<div class="displayProjects"></div>
<div class="projectDetails">
<h1></h1>
<div class="content"></div>
</div>
</article>`;
  function toggleDisplay() {
    const projectsDisplayBar = document.querySelector(".displayProjects");
    projectsDisplayBar.classList.toggle("Active");
    if (!document.querySelector(".addProject")) {
      displayProjects();
      const add = document.createElement("button");
      add.classList.add("addProject");
      add.textContent = " Add Project";
      projectsDisplayBar.appendChild(add);
    } else if (
      document.querySelector(".displayProjects.Active") &&
      document.querySelector(".displayProjects>.addProject")
    ) {
    } else if (!document.querySelector(".displayProjects.Active")) {
      document.querySelector(".Projects").remove();
      document.querySelector(".displayProjects>button").remove();
    }
  }
  return { toggleDisplay };
})();

const nav = (function () {
  document.querySelector(".projectsbtn").addEventListener("click", function () {
    doomLoad.toggleDisplay();

    if (document.querySelector(".displayProjects.Active")) {
      input();
    }
  }),
    document.querySelector(".today").addEventListener("click", function () {}),
    document
      .querySelector(".tomorrow")
      .addEventListener("click", function () {}),
    document.querySelector(".home").addEventListener("click", function () {});
})();

const input = function () {
  document.querySelector(".addProject").addEventListener("click", function () {
    inputPannel();
  });
};
const del = () => {
  document.querySelectorAll(".deleteProject").forEach((item) =>
    item.addEventListener("click", function me(Event) {
      const hide = String(Event.currentTarget.parentElement.classList);
      console.log(hide);
      const itemm = document.querySelector(`[class='${hide}']`);
      if (itemm) {
        itemm.remove();
      }

      removeProject(hide);
    })
  );
};
const observer = new MutationObserver((list) => {
  del();
  displayCurrentProject();
});
observer.observe(document.body, {
  attributes: true,
  childList: true,
  subtree: true,
});
export { del };
