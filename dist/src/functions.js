export const listItemCreation = (task) => {
    const listItem = document.createElement("li");
    const taskNameElement = document.createElement("h2");
    taskNameElement.innerText = task.taskNameInfo;
    const taskDescElement = document.createElement("p");
    taskDescElement.innerText = task.taskDescInfo;
    listItem.className = "py-4 px-4";
    taskNameElement.className = "text-zinc-600 font-bold";
    taskDescElement.className = "text-zinc-500";
    listItem.appendChild(taskNameElement);
    listItem.appendChild(taskDescElement);
    return listItem;
};
export const fieldsValidation = (...fields) => {
    return fields.every((field) => !!field.toString());
};
export const tasksInputsValidation = (task) => {
    if (!fieldsValidation(task.taskNameInfo, task.taskDescInfo)) {
        alert("INPUT ERROR !!!!");
        throw Error("INPUT ERROR !!!!");
    }
    ;
};
