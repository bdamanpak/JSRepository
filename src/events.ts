import {taskNameInput, taskDescInput, saveButton, showButton, tasksListDrawer, closingDrawerButton} from "./importers.js"
import {tasksList} from "./states.js"
import {TaskType} from "./types.js"


export const createUser = () => {
    const newTask: TaskType = {
        ID: crypto.randomUUID(),
        taskName: taskNameInput?.value ?? "",
        taskDesc: taskDescInput?.value ?? ""
    };
    tasksList.push(newTask);
    
    const listItem = document.createElement("li");
    const taskNameElement = document.createElement("h3");
    const taskDescElement = document.createElement("p");

    taskNameElement.innerText = newTask.taskName;
    taskDescElement.innerText = newTask.taskDesc;

    listItem.appendChild(taskNameElement);
    listItem.appendChild(taskDescElement);
    tasksListDrawer?.appendChild(listItem);

    listItem.className = "py-4 px-4";
    taskNameElement.className = "text-zinc-600";
    taskDescElement.className = "text-zinc-500";

};

export const openUpDrawer = () => {
    tasksListDrawer?.classList.remove("hidden");

};

export const closeUpDrawer = () => {
    tasksListDrawer?.classList.add("hidden");

};