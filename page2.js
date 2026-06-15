let name=localStorage.getItem("userName");

document.getElementById("welcome").textContent =
      "Hello, " + name + " 👋";

let addTaskBtn=document.getElementById("addTaskBtn");

addTaskBtn.addEventListener("click", () =>{
    
    let input = document.getElementById("addTaskBar");
    let task = input.value;

    let tasksDiv = document.getElementById("tasksDiv")

    const taskDiv = document.createElement("div");
    taskDiv.id="task";

    const taskLabel = document.createElement("label");
    taskLabel.id="taskLabel"; 
    taskLabel.textContent = task;
 
    const taskCheckbox = document.createElement("input");
    taskCheckbox.type="checkbox";
    taskCheckbox.id="taskCheckbox";

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
    
    if(task !==""){
        input.value = "";
    };

    deleteBtn.onclick = () => {
        taskDiv.remove();
    };

    taskCheckbox.addEventListener("change", () => {
        if(taskCheckbox.checked){
            taskLabel.style.textDecoration = "line-through";
            taskLabel.style.color = "grey";
        }else{
            taskLabel.style.textDecoration = "none";
            taskLabel.style.color = "black";
        };
    });
});