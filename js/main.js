document.addEventListener("DOMContentLoaded", function () {

    const menuToggle =
        document.querySelector(".menu-toggle");

    const navigation =
        document.querySelector(".main-nav");


    if (menuToggle && navigation) {

        menuToggle.addEventListener("click", function () {

            navigation.classList.toggle("open");

            const expanded =
                navigation.classList.contains("open");

            menuToggle.setAttribute(
                "aria-expanded",
                expanded
            );

        });

    }

});
