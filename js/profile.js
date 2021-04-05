document.getElementsByClassName("item")[0].classList.add("item-selected");

document.querySelectorAll(".horizontal-menu .item").forEach(item => {
    item.addEventListener("click", () => {
        document.querySelectorAll(".horizontal-menu .item").forEach(item => item.classList.remove("item-selected"))
        item.classList.add("item-selected");
    });
});