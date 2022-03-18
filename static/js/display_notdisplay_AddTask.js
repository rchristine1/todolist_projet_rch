let togg1 = document.getElementById("togg1")           
let c1 = document.getElementById("cardAddNewtask")
c1.style.display = "none"
togg1.addEventListener("click", () => {
if(getComputedStyle(c1).display != "none"){
    c1.style.display = "none";
} else {
c1.style.display = "block";
}
}) 