let registerBtn=document.getElementById("registerBtn");

registerBtn.addEventListener("click",function(){
    
    let name=document.getElementById("name").value ;
    localStorage.setItem("userName", name);

    window.location.href="page2.html";
});
 