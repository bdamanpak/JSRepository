import {taskNameInput, taskDescInput, saveButton, showButton, tasksListDrawer, closingDrawerButton} from "./src/importers.js"
import {createUser, openUpDrawer, closeUpDrawer} from "./src/events.js"


saveButton?.addEventListener("click", createUser);
showButton?.addEventListener("click", openUpDrawer);
closingDrawerButton?.addEventListener("click", closeUpDrawer);
