
document.addEventListener("DOMContentLoaded", function () {
    const bubblesContainer = document.querySelector(".bubbles");

    // Generate bubbles dynamically
    for (let i = 0; i < 20; i++) {
        const bubble = document.createElement("div");
        bubble.className = "bubble";
        bubble.style.left = Math.random() * 100 + "%";
        bubble.style.animationDelay = Math.random() * 2 + "s";
        bubble.style.animationDuration = 3 + Math.random() * 2 + "s";
        bubblesContainer.appendChild(bubble);
    }
});
