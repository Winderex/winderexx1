document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("progressButton");
    let progress = 0;
    const goal = 2000;

    button.addEventListener("click", function() {
        if (progress < goal) {
            progress += 100; // Change this value to adjust increment per click
            button.textContent = `${progress} из ${goal}`;
        }
    });
});
