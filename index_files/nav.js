// $(function () {
//     $("#header").load("header.html", function () {
//         // Handle menu toggle
//         $(document).on("click", ".menu-toggle", function () {
//             let menu = $(".Banner-menu");

//             if (menu.hasClass("active")) {
//                 menu.css("opacity", "0");
//                 setTimeout(() => {
//                     menu.removeClass("active").css("display", "none");
//                 }, 300);
//             } else {
//                 menu.css("display", "flex");
//                 setTimeout(() => {
//                     menu.addClass("active").css("opacity", "1");
//                 }, 10);
//             }
//         });

//         // Handle window resize to reset menu visibility
//         $(window).on("resize", function () {
//             if ($(window).width() > 768) {
//                 $(".Banner-menu").css({
//                     "display": "flex",
//                     "opacity": "1",
//                     "visibility": "visible",
//                     "pointer-events": "auto"
//                 });
//             } else {
//                 $(".Banner-menu").removeAttr("style"); // Reset styles when resizing back
//             }
//         });
//     });

//     $("#footer").load("footer.html");
// });

// document.addEventListener("DOMContentLoaded", function() {
//     const menuToggle = document.querySelector(".menu-toggle");
//     const menu = document.querySelector(".Banner-menu");

//     // Function to reset menu when resizing
//     function resetMenuVisibility() {
//         if (window.innerWidth > 768) {
//             menu.classList.remove("active");
//             menu.style.display = "flex"; // Keep menu visible on large screens
//             menu.style.opacity = "1";
//             menu.style.visibility = "visible";
//             menu.style.pointerEvents = "auto";
//         } else {
//             menu.classList.remove("active"); // Ensure it stays hidden when resizing
//             menu.style.display = "none"; // Prevent flicker
//             menu.style.opacity = "";
//             menu.style.visibility = "";
//             menu.style.pointerEvents = "";
//         }
//     }

//     menuToggle.addEventListener("click", function() {
//         if (menu.classList.contains("active")) {
//             menu.style.opacity = "0";
//             setTimeout(() => {
//                 menu.style.display = "none";
//                 menu.classList.remove("active");
//             }, 300); // Match the transition duration
//         } else {
//             menu.style.display = "flex";
//             setTimeout(() => {
//                 menu.classList.add("active");
//                 menu.style.opacity = "1";
//             }, 10); // Slight delay to trigger transition
//         }
//     });

//     window.addEventListener("resize", resetMenuVisibility);
//     resetMenuVisibility(); // Ensure the correct state on page load
// });

// // === Fix extensionless links for non-GitHub environments ===
// function fixLinksForNonGithub() {
//     const host = window.location.hostname;
//     if (host.includes("yongming.fan")) return; // Skip on GitHub Pages

//     console.log("[nav.js] Link fixer active for host:", host);

//     document.querySelectorAll("a[href]").forEach(a => {
//         const href = a.getAttribute("href");

//         if (
//             !href ||
//             href.startsWith("http") ||
//             href.startsWith("#") ||
//             href.startsWith("mailto:") ||
//             href.endsWith(".html") ||
//             href.endsWith("/")
//         ) {
//             return;
//         }

//         const newHref = href + ".html";
//         console.log(`[nav.js] Rewriting ${href} → ${newHref}`);
//         a.setAttribute("href", newHref);
//     });
// }

// === Navigation & Header/Footer Loader ===
$(function () {
    // Load header first
    $("#header").load("header.html", function () {
        // Handle menu toggle
        $(document).on("click", ".menu-toggle", function () {
            let menu = $(".Banner-menu");

            if (menu.hasClass("active")) {
                menu.css("opacity", "0");
                setTimeout(() => {
                    menu.removeClass("active").css("display", "none");
                }, 300);
            } else {
                menu.css("display", "flex");
                setTimeout(() => {
                    menu.addClass("active").css("opacity", "1");
                }, 10);
            }
        });

        // Handle window resize to reset menu visibility
        $(window).on("resize", function () {
            if ($(window).width() > 768) {
                $(".Banner-menu").css({
                    display: "flex",
                    opacity: "1",
                    visibility: "visible",
                    "pointer-events": "auto",
                });
            } else {
                $(".Banner-menu").removeAttr("style");
            }
        });

        // === Fix extensionless links AFTER header is loaded ===
        fixLinksForNonGithub();
    });

    // Load footer
    $("#footer").load("footer.html", function () {
        // Also fix links in footer if any
        fixLinksForNonGithub();
    });

    // Also fix links in the base page immediately
    fixLinksForNonGithub();
});

// === Fix extensionless links for non-GitHub environments ===
function fixLinksForNonGithub() {
    const host = window.location.hostname;
    if (host.includes("yongming.fan")) return; // Skip on GitHub Pages

    console.log("[nav.js] Link fixer active for host:", host);

    document.querySelectorAll("a[href]").forEach(a => {
        const href = a.getAttribute("href");

        if (
            !href ||
            href.startsWith("http") ||
            href.startsWith("#") ||
            href.startsWith("mailto:") ||
            href.endsWith(".html") ||
            href.endsWith("/")
        ) {
            return;
        }

        const newHref = href + ".html";
        console.log(`[nav.js] Rewriting ${href} → ${newHref}`);
        a.setAttribute("href", newHref);
    });
}