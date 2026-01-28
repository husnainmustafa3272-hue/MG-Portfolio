// DROPDOWN MENU
document.addEventListener("DOMContentLoaded", () => {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector(".dropdown-toggle");

        toggle.addEventListener("click", (e) => {
            e.preventDefault();

            dropdowns.forEach(item => {
                if (item !== dropdown) {
                    item.classList.remove("active");
                }
            });

            dropdown.classList.toggle("active");
        });
    });

    document.addEventListener("click", (e) => {
        dropdowns.forEach(dropdown => {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove("active");
            }
        });
    });
});

// Hamburger + Sidebar + Icon animation
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".navbar ul");
const dropdowns = document.querySelectorAll(".dropdown");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    menuToggle.classList.toggle("active");

    menuToggle.textContent =
        menuToggle.classList.contains("active") ? "✖" : "☰";

    // reset dropdowns
    dropdowns.forEach(d => d.classList.remove("active"));
});