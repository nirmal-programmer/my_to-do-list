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


