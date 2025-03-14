document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".Banner-menu");

    // Function to reset menu when resizing
    function resetMenuVisibility() {
        if (window.innerWidth > 768) {
            menu.classList.remove("active");
            menu.style.display = "flex"; // Keep menu visible on large screens
            menu.style.opacity = "1";
            menu.style.visibility = "visible";
            menu.style.pointerEvents = "auto";
        } else {
            menu.classList.remove("active"); // Ensure it stays hidden when resizing
            menu.style.display = "none"; // Prevent flicker
            menu.style.opacity = "";
            menu.style.visibility = "";
            menu.style.pointerEvents = "";
        }
    }

    menuToggle.addEventListener("click", function() {
        if (menu.classList.contains("active")) {
            menu.style.opacity = "0";
            setTimeout(() => {
                menu.style.display = "none";
                menu.classList.remove("active");
            }, 300); // Match the transition duration
        } else {
            menu.style.display = "flex";
            setTimeout(() => {
                menu.classList.add("active");
                menu.style.opacity = "1";
            }, 10); // Slight delay to trigger transition
        }
    });

    window.addEventListener("resize", resetMenuVisibility);
    resetMenuVisibility(); // Ensure the correct state on page load
});