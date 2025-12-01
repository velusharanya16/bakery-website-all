// Cute sparkle animation on click
document.addEventListener("click", (e) => {
    let sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");
    sparkle.style.left = e.pageX + "px";
    sparkle.style.top = e.pageY + "px";
    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 600);
});

// Floating animation for bakery items
document.querySelectorAll(".item img").forEach(img => {
    img.addEventListener("click", () => {
        img.classList.add("bounce");

        setTimeout(() => {
            img.classList.remove("bounce");
        }, 600);
    });
});

// ORDER CONFIRMATION POPUP
function placeOrder(itemName) {
    const popup = document.createElement("div");
    popup.classList.add("order-popup");

    popup.innerHTML = `
        <div class="order-card">
            <h2>🎀 Order Confirmed 🎀</h2>
            <p>Your <strong>${itemName}</strong> is on the way! 🍰</p>
            <button onclick="this.parentElement.parentElement.remove()">Okay 💗</button>
        </div>
    `;

    document.body.appendChild(popup);
}
