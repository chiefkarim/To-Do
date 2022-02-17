import { add } from "date-fns";
import { displayProjects } from "./displayProjects";
import { addproject, projects } from "./ProjectsLogic";
export default function pageload() {
  const body = document.querySelector("body");
  const background = document.querySelector(".background");
  const inputContainer = document.createElement("div");

  inputContainer.classList.add("inputContainer");
  body.appendChild(inputContainer);
  body.classList.add("blur");
  background.style = "transform:scale(1.2)";
  inputContainer.innerHTML = `
  <form>
  <div>
  <label for="title">Title</label>
  <input type="text" id="title" name="title" required>
  <span></span>
  </div>
  <div>
  <label for="description">description</label>
  <textarea id="description" name="description"></textarea>
  
  </div>
<div>
  <label for="inputdueDate">due Date</label>
  <input type="date" id="inputdueDate" name="dueDate">
  
  </div>
<div>
  <label for="priority">Priority/10</label>
  <input type="number"id="priority" name="priority" min="1" max="10">
  <span></span>
  </div>
  </form>
  <button id="submit">Submit</button>`;
  const formValidation = (function () {
    const title = document.querySelector("#title");
    const priority = document.querySelector("#priority");
    const titleMessage = document.querySelector("#title+span");
    const priorityMessage = document.querySelector("#priority+span");
    const description = document.querySelector("#description");
    const inputdueDate = document.querySelector("#inputdueDate");
    title.addEventListener("change", function (event) {
      if (title.validity.valueMissing) {
        titleMessage.textContent = "please, enter a project Title";
        event.preventDefault();
      } else {
        titleMessage.textContent = "";
      }
    });

    priority.addEventListener("change", function (event) {
      if (priority.validity.rangeOverflow) {
        priorityMessage.textContent = "priority must be 10 or less";
        event.preventDefault();
      } else if (priority.validity.rangeUnderflow) {
        priorityMessage.textContent = "priority must be 1 or more";
        event.preventDefault();
      } else {
        priorityMessage.textContent = "";
      }
    });

    document
      .querySelector("#submit")
      .addEventListener("click", function (Event) {
        if (!title.validity.valid || !priority.validity.valid) {
          Event.preventDefault();
        } else {
          addproject();
          const inputContainer = document.querySelector(".inputContainer");
          const body = document.querySelector("body");
          inputContainer.remove();
          body.classList.remove("blur");
        }
      });
  })();
}
