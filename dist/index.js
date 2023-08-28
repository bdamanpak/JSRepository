import { saveButton, showButton, closingDrawerIcon } from "./src/importers.js";
import { createTask, openDrawer, closeDrawer } from "./src/events.js";
saveButton?.addEventListener("click", createTask);
showButton?.addEventListener("click", openDrawer);
closingDrawerIcon?.addEventListener("click", closeDrawer);
