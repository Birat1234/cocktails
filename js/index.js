
// document.getElementById("btn").onclick= function () {
//     console.log('btn clicked');
    
// };

window.onload = function () {
    var button = document.getElementById("btn");
     
    var count = 0;
    button.addEventListener("click", function xyz() {
    console.log('clicked', count++);
})
}





