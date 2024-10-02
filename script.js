// Adiciona evento de clique ao menu
document.addEventListener("DOMContentLoaded", function() {
    const menu = document.querySelector("nav ul");
    menu.addEventListener("click", function(event) {
        if (event.target.tagName === "A") {
            event.preventDefault();
            const href = event.target.getAttribute("href");
            window.location.href = href;
        }
    });
});