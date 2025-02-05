document.getElementById("yesButton").addEventListener("click", function() {
    document.getElementById("popup").classList.remove("hidden");
});

document.getElementById("noButton").addEventListener("mouseover", function() {
    this.style.top = Math.random() * window.innerHeight + "px";
    this.style.left = Math.random() * window.innerWidth + "px";
});

// Create floating hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    document.querySelector(".hearts").appendChild(heart);
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);