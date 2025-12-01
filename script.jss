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
