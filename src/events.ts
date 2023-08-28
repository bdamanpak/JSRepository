import {TaskType, TaskListType, TaskInfoType} from "./types"
import {taskNameInput, taskDescInput, tasksDrawer} from "./importers.js"
import {listItemCreation, tasksInputsValidation} from "./functions.js"

const tasksList: TaskListType = [];

export const createTask = () => {
    const newTask: TaskType = {
        ID: crypto.randomUUID(),
        taskName: taskNameInput?.value ?? "",
        taskDesc: taskDescInput?.value ?? ""
    };

    const taskInfo: TaskInfoType = {
        taskNameInfo: newTask.taskName,
        taskDescInfo: newTask.taskDesc
    };

    tasksInputsValidation(taskInfo);

    tasksList.push(newTask);

    const listItem = listItemCreation(taskInfo);
    tasksDrawer?.appendChild(listItem);

};

export const openDrawer = () => {
    tasksDrawer?.classList.remove("hidden");
};

export const closeDrawer = () => {
    tasksDrawer?.classList.add("hidden");
};