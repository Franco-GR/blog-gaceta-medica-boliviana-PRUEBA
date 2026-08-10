const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("active");
});

const navigationLinks = document.querySelectorAll(".navigation a");

navigationLinks.forEach(link => {
    link.addEventListener("click", () => {
        navigation.classList.remove("active");
    });
});
