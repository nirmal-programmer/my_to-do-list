// script.js

let registerBtn = document.getElementById("registerBtn");

registerBtn.addEventListener("click", function () {
    let name = document.getElementById("name").value;
    localStorage.setItem("userName", name);
    window.location.href = "page2.html";
});

// Register Service Worker
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("service-worker.js")
            .then(() => console.log("Service Worker Registered"))
            .catch(err => console.log(err));
    });
};
   