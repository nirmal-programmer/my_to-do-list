// script.js

let registerBtn = document.getElementById("registerBtn");

registerBtn.addEventListener("click", function () {
    let Name = document.getElementById("name").value;
    let errorPara = document.getElementById("errorPara");
    let layoutBox = document.getElementById("layoutBox");
    
    if(Name.length < 2){
        errorPara.style.display = "block";
        layoutBox.style.height = "440px";
    } else {
        localStorage.setItem("userName", Name);
        window.location.href = "page2.html";
    };
});

// Register Service Worker
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("service-worker.js")
            .then(() => console.log("Service Worker Registered"))
            .catch(err => console.log(err));
    });
};
   