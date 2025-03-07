document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const closeMenu = document.getElementById("close-menu");
    const mobileNav = document.getElementById("mobileNav");
    const fixedButton = document.querySelector(".fixed-button");

    function toggleMenu(show) {
        if (show) {
            mobileNav.style.left = "0"; 
            fixedButton.style.display = "none"; 
        } else {
            mobileNav.style.left = "-100%"; 
            fixedButton.style.display = "block"; 
        }
    }

    menuToggle.addEventListener("click", function () {
        mobileNav.classList.add("active");
        toggleMenu(true);
    });

    closeMenu.addEventListener("click", function () {
        mobileNav.classList.remove("active");
        toggleMenu(false);
    });
});



