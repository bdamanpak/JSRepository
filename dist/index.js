"use strict";
// type TaskType = {
//     ID: number;
//     taskName: string;
//     taskDesc: string;
// };
const taskNameInput = document.querySelector("#taskName");
const taskDescInput = document.querySelector("#description");
const saveBTN = document.querySelector("#saveBTN");
const taskNameValue = taskNameInput === null || taskNameInput === void 0 ? void 0 : taskNameInput.value;
const taskDescValue = taskDescInput === null || taskDescInput === void 0 ? void 0 : taskDescInput.value;
saveBTN === null || saveBTN === void 0 ? void 0 : saveBTN.addEventListener("click", () => {
    console.log(taskNameInput === null || taskNameInput === void 0 ? void 0 : taskNameInput.value);
    console.log(taskDescInput === null || taskDescInput === void 0 ? void 0 : taskDescInput.value);
});
const showBTN = document.querySelector("#showBTN");
showBTN === null || showBTN === void 0 ? void 0 : showBTN.addEventListener("click", () => {
    const formContainer = document.getElementById("formCont");
    formContainer === null || formContainer === void 0 ? void 0 : formContainer.remove();
    // window.alert(taskNameValue);
    document.body.innerHTML = document.body.innerHTML + `
    <div style="font-family:'Courier New', Courier, monospace; padding-top: 30px; padding-left: 20px; margin-left: 600px; margin-top: 300px; max-width: 500px; border: 1px rgb(26 86 219) solid; border-radius: 20px; max-width: 600px";>
        <h1 style="color: rgb(26 86 219); font-size: 45px;">Task Name <br><span style="color: rgb(5, 20, 51); font-size: 25px;">${taskNameValue}</span></h1>
        <h1 style="color: rgb(26 86 219); font-size: 45px;">Task Desc <br><span style="color: rgb(5, 20, 51); font-size: 25px;">${taskDescValue}</span></h1>
    </div>
    `;
});
