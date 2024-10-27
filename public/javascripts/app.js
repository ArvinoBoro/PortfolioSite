// Script for debugging after project launch.

(function() {
    function start() {
        console.log("Server has started.");
    }
    window.addEventListener("load", start); // If the window opens, the function calls itself. 
})(); 

