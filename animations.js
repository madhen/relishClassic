
document.addEventListener("DOMContentLoaded", function () {
    // Trigger animations for hidden elements
    const bubbleText = document.querySelector(".bubble-text");
    const relishLogo = document.querySelector(".relish-logo");
    const textContent = document.querySelector(".text-content");

    // Delay visibility of text and logo
    setTimeout(() => bubbleText.classList.remove("hidden"), 2000);
    setTimeout(() => relishLogo.classList.remove("hidden"), 3000);
    setTimeout(() => textContent.classList.remove("hidden"), 3500);
});
