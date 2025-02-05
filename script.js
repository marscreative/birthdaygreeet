document.getElementById("startButton").addEventListener("click", function () {
    // Hide Button
    this.style.display = "none";

    // Show Birthday Message
    document.getElementById("birthdayContainer").style.display = "flex";

    // Generate Flowers and Gifts
    createItems();
});

function createItems() {
    const flowerContainer = document.getElementById("flowerContainer");
    const items = [
        { type: "flower", image: "images/flower.svg" },
        { type: "gift", image: "images/gift.svg" }
    ];

    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            let item = document.createElement("div");
            item.className = "item";
            let randomItem = items[Math.floor(Math.random() * items.length)];
            let img = document.createElement("img");
            img.src = randomItem.image;
            item.appendChild(img);

            // Random position
            item.style.left = Math.random() * window.innerWidth + "px";
            item.style.top = Math.random() * window.innerHeight + "px";

            flowerContainer.appendChild(item);
        }, i * 300);
    }
}
