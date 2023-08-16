// type TaskType = {
//     ID: number;
//     taskName: string;
//     taskDesc: string;
// };

// const tasks: Array<TaskType> = [];

// const adding = (arr: Array<TaskType>, name: string | undefined, desc: string | undefined): void => {
//     const task: TaskType = {
//         ID: Date.now(),
//         taskName: name ?? "",
//         taskDesc: desc ?? ""
//     }
//     arr.push(task);
// }


// function addTask() {
//     let nameT;
//     let descT;
//     const taskNameInput = document.querySelector<HTMLInputElement>("#taskName");
//     const taskDescInput = document.querySelector<HTMLInputElement>("#description");
//     const saveBTN = document.querySelector<HTMLButtonElement>("#saveBTN");
//     saveBTN?.addEventListener("click", () => {
//         nameT = taskNameInput?.value;
//         descT = taskDescInput?.value;
//         console.log(nameT);
//         console.log(descT);
//         adding(tasks, nameT, descT);
//     });

// }

// addTask();

// console.log(tasks);

type TaskType = {
    ID: number;
    taskName: string;
    taskDesc: string;
};

const taskNameInput = document.querySelector<HTMLInputElement>("#taskName");
const taskDescInput = document.querySelector<HTMLInputElement>("#description");
const saveBTN = document.querySelector<HTMLButtonElement>("#saveBTN");
const taskNameValue = taskNameInput?.value;
const taskDescValue = taskDescInput?.value;

saveBTN?.addEventListener("click", () => {
    console.log(taskNameInput?.value);
    console.log(taskDescInput?.value);
});

const showBTN = document.querySelector<HTMLButtonElement>("#showBTN");
showBTN?.addEventListener("click", () => {
    const formContainer = document.getElementById("formCont");
    formContainer?.remove();
    // window.alert(taskNameValue);
    document.body.innerHTML = document.body.innerHTML + `
    <div style="font-family:'Courier New', Courier, monospace; padding-top: 30px; padding-left: 20px; margin-left: 600px; margin-top: 300px; max-width: 500px; border: 1px rgb(26 86 219) solid; border-radius: 20px; max-width: 600px";>
        <h1 style="color: rgb(26 86 219); font-size: 45px;">Task Name <br><span style="color: rgb(5, 20, 51); font-size: 25px;">${taskNameValue}</span></h1>
        <h1 style="color: rgb(26 86 219); font-size: 45px;">Task Desc <br><span style="color: rgb(5, 20, 51); font-size: 25px;">${taskDescValue}</span></h1>
    </div>
    `
});


