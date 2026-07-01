
// MY Code☠️☠️☠️☠️
let nm=localStorage.getItem("userName");

document.getElementById("welcome").textContent =
      "Hello, " + nm + " 👋"; 

function updateProgress(){
     let totalTask = document.querySelectorAll(".task-checkbox").length;

     let completedTask = document.querySelectorAll(".task-checkbox:checked").length;

     let persentage = totalTask === 0 ? 0 : 
     (completedTask/totalTask) *100;

     let ProgressLine=document.querySelector("#progressLine");

     ProgressLine.style.width = Math.round(persentage) + "%";

     let persentageheading=document.querySelector("#persentage");
     persentageheading.textContent = Math.round(persentage) + "%";

     let completedTaskLine=document.querySelector("#completedTaskLine");
     completedTaskLine.textContent = "Completed " + completedTask + " of " + totalTask +" task ";

};  

updateProgress();

let addTaskBtn=document.getElementById("addTaskBtn");

addTaskBtn.addEventListener("click", () =>{

    let input = document.getElementById("addTaskBar");
    let task = input.value.trim();

    if(task === ""){
        return("please enter task");
    }

    let tasksDiv = document.getElementById("tasksDiv")

    const taskDiv = document.createElement("div");
    taskDiv.id="task"; 

    const taskLabel = document.createElement("label");
    taskLabel.id="taskLabel"; 
    taskLabel.textContent = task;
 
    const taskCheckbox = document.createElement("input");
    taskCheckbox.type="checkbox";
    taskCheckbox.id="taskCheckbox";
    taskCheckbox.classList.add("task-checkbox");

    const deleteBtn=document.createElement("button");
    deleteBtn.id="deleteBtn"; 

    const icon = document.createElement("i");
    icon.classList.add("material-icons");
    icon.textContent = "delete";
    icon.style.fontSize = "23px";
    icon.style.color = "red";
 
    deleteBtn.appendChild(icon);
    taskDiv.appendChild(taskCheckbox);
    taskDiv.appendChild(taskLabel);
    taskDiv.appendChild(deleteBtn);
    tasksDiv.append(taskDiv);
    updateProgress();
    
    input.value = "";

    deleteBtn.onclick = () => {
        taskDiv.remove();
        updateProgress();
    };

    taskCheckbox.addEventListener("change", () => {
        if(taskCheckbox.checked){
            taskLabel.style.textDecoration = "line-through";
            taskLabel.style.color = "grey";
            updateProgress();
        }else{
            taskLabel.style.textDecoration = "none";
            taskLabel.style.color = "black";
            updateProgress();
        };
    });
}); 


// AI code💀💀
// let nm = localStorage.getItem("userName");
// document.getElementById("welcome").textContent = "Hello, " + nm + " 👋";

// let lastPercentage = 0;

// function updateProgress() {
//     let totalTask = document.querySelectorAll(".task-checkbox").length;
//     let completedTask = document.querySelectorAll(".task-checkbox:checked").length;
//     let persentage = totalTask === 0 ? 0 : (completedTask / totalTask) * 100;
//     let rounded = Math.round(persentage);

//     document.querySelector("#progressLine").style.width = rounded + "%";
//     document.querySelector("#completedTaskLine").textContent =
//         "Completed " + completedTask + " of " + totalTask + " task";

//     let persentageheading = document.querySelector("#persentage");
//     let start = lastPercentage;
//     let end = rounded;
//     let duration = 500;
//     let startTime = null;

//     if (end > start) {
//         persentageheading.style.color = "green";
//     } else if (end < start) {
//         persentageheading.style.color = "red";
//     }

//     function animate(timestamp) {
//         if (!startTime) startTime = timestamp;
//         let progress = Math.min((timestamp - startTime) / duration, 1);
//         let current = Math.round(start + (end - start) * progress);
//         persentageheading.textContent = current + "%";

//         if (progress < 1) {
//             requestAnimationFrame(animate);
//         } else {
//             persentageheading.textContent = end + "%";
//             persentageheading.style.transition = "color 0.5s";
//             persentageheading.style.color = "";
//         }
//     }

//     requestAnimationFrame(animate);
//     lastPercentage = rounded;
// }

// function saveTasks() {
//     let tasks = [];
//     document.querySelectorAll("#tasksDiv #task").forEach(taskDiv => {
//         let label = taskDiv.querySelector("label").textContent;
//         let checked = taskDiv.querySelector(".task-checkbox").checked;
//         tasks.push({ label, checked });
//     });
//     localStorage.setItem("tasks", JSON.stringify(tasks));
// }

// function createTaskElement(taskText, isChecked = false) {
//     let tasksDiv = document.getElementById("tasksDiv");

//     const taskDiv = document.createElement("div");
//     taskDiv.id = "task";

//     const taskLabel = document.createElement("label");
//     taskLabel.id = "taskLabel";
//     taskLabel.textContent = taskText;

//     const taskCheckbox = document.createElement("input");
//     taskCheckbox.type = "checkbox";
//     taskCheckbox.id = "taskCheckbox";
//     taskCheckbox.classList.add("task-checkbox");
//     taskCheckbox.checked = isChecked;

//     if (isChecked) {
//         taskLabel.style.textDecoration = "line-through";
//         taskLabel.style.color = "grey";
//     }

//     const deleteBtn = document.createElement("button");
//     deleteBtn.id = "deleteBtn";

//     const icon = document.createElement("i");
//     icon.classList.add("material-icons");
//     icon.textContent = "delete";
//     icon.style.fontSize = "23px";
//     icon.style.color = "red";

//     deleteBtn.appendChild(icon);
//     taskDiv.appendChild(taskCheckbox);
//     taskDiv.appendChild(taskLabel);
//     taskDiv.appendChild(deleteBtn);
//     tasksDiv.append(taskDiv);

//     deleteBtn.onclick = () => {
//         taskDiv.remove();
//         updateProgress();
//         saveTasks();
//     };

//     taskCheckbox.addEventListener("change", () => {
//         if (taskCheckbox.checked) {
//             taskLabel.style.textDecoration = "line-through";
//             taskLabel.style.color = "grey";
//         } else {
//             taskLabel.style.textDecoration = "none";
//             taskLabel.style.color = "black";
//         }
//         updateProgress();
//         saveTasks();
//     });
// }

// function loadTasks() {
//     let saved = localStorage.getItem("tasks");
//     if (saved) {
//         JSON.parse(saved).forEach(task => createTaskElement(task.label, task.checked));
//     }
// }

// loadTasks();
// updateProgress();

// document.getElementById("addTaskBtn").addEventListener("click", () => {
//     let input = document.getElementById("addTaskBar");
//     let task = input.value.trim();

//     if (task === "") return;

//     createTaskElement(task);
//     updateProgress();
//     saveTasks();
//     input.value = "";
// });

