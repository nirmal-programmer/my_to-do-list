//page2.js
// MY Code☠️☠️☠️☠️
let nm=localStorage.getItem("userName");

document.getElementById("welcome").textContent =
      "Hello, " + nm + " 👋"; 

let data;
let arr = [];
let taskNum = 0;

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

function addTaskImg(){
    let taskImg = document.createElement("img");
    taskImg.src = "taskImg.png";
    taskImg.id = "taskImage";

    if (taskNum == 0) {
        tasksDiv.append(taskImg); // Append the image you created
    } else {
        let taskImage = document.getElementById("taskImage");
        if (taskImage) {
            taskImage.remove();
        };
    };
};

updateProgress();
addTaskImg();

function createTask(task) {

    let tasksDiv = document.getElementById("tasksDiv")

    const taskDiv = document.createElement("div");
    taskDiv.id="task"; 

    const taskLabel = document.createElement("label");
    taskLabel.id="taskLabel"; 
    taskLabel.textContent = task.taskName;
 
    const taskCheckbox = document.createElement("input");
    taskCheckbox.type="checkbox";
    taskCheckbox.id="taskCheckbox";
    taskCheckbox.classList.add("task-checkbox");
    taskCheckbox.checked = task.completed;
    

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

    deleteBtn.onclick = () => {
        arr = arr.filter(item => item.taskName !== task.taskName);
        localStorage.setItem("task" , JSON.stringify(arr));
        taskDiv.remove();
        taskNum--;
        addTaskImg();
        updateProgress();
    };

    taskCheckbox.addEventListener("change", () => {
        if(taskCheckbox.checked){
            task.completed = true;
        }else{
            task.completed = false;
            taskLabel.style.textDecoration = "none";
            taskLabel.style.color = "black";
            updateProgress(); 
        };
        
        if(task.completed){
            taskLabel.style.textDecoration = "line-through";
            taskLabel.style.color = "grey";
            updateProgress();
        };
        localStorage.setItem("task" , JSON.stringify(arr));
    });

    if(task.completed){
        taskLabel.style.textDecoration = "line-through";
        taskLabel.style.color = "grey";
        updateProgress();
    }
};

let addTaskBtn=document.getElementById("addTaskBtn");

addTaskBtn.addEventListener("click", () =>{
    let check = false;
    let input = document.getElementById("addTaskBar");
    let task = input.value.trim();

    if(task === ""){
        return("please enter task");
    };

    let taskObj = {
        taskName: task,
        completed: check
    };

    arr.push(taskObj);
    createTask(taskObj);
    taskNum++;
    addTaskImg();
    

    let lData = localStorage.setItem("task" , JSON.stringify(arr));
    console.log(localStorage.getItem("task"));

    input.value = "";

});

arr = JSON.parse(localStorage.getItem("task")) || [];
console.log(arr);

for(let i=0; i<arr.length; i++){
    taskData = arr[i];
    createTask(taskData);
    taskNum++
    addTaskImg();
};
console.log("Task added:" + taskNum);

// Register Service Worker
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("service-worker.js")
            .then(() => console.log("Service Worker Registered"))
            .catch(err => console.log(err));
    });
}


