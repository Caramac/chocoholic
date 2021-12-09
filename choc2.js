
document.addEventListener('DOMContentLoaded', function() {
  const main = document.getElementById("main");

  const disclaimer = document.createElement("p");

  disclaimer.innerText = "All chocolate-related opinions are my own!";

  disclaimer.style.fontSize = "14px"; 
  disclaimer.style.fontFamily = "Helvetica, sans-serif";
  disclaimer.style.width = "300px";
  disclaimer.style.border = "4px solid red";
  disclaimer.style.padding = "10px";

  main.appendChild(disclaimer);

  disclaimer.addEventListener("mouseenter", function(){
      disclaimer.style.color = "black";
    });

  disclaimer.addEventListener("mouseleave", function(){
    disclaimer.style.color = "gray";
});


});