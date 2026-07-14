document.addEventListener("DOMContentLoaded", function() {

    const button = document.querySelector(".btn");

    if(button){
        button.addEventListener("click", function(){
            alert("Welcome to Student Portal!");
        });
    }

});
