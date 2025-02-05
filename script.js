document.getElementById("startButton").addEventListener("click", function () {
    // Hide Button
    this.style.display = "none";

    // Show Birthday Message
    document.getElementById("birthdayContainer").style.display = "flex";

    // Generate Flowers
    createFlowers();
});

function createFlowers() {
    const flowerContainer = document.getElementById("flowerContainer");
    const flowerImages = ["??", "??", "??", "??", "??"];

    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            let flower = document.createElement("div");
            flower.className = "flower";
            flower.innerHTML = flowerImages[Math.floor(Math.random() * flowerImages.length)];

            // Random position
            flower.style.left = Math.random() * window.innerWidth + "px";
            flower.style.top = Math.random() * window.innerHeight + "px";

            flowerContainer.appendChild(flower);
        }, i * 300);
    }
}
