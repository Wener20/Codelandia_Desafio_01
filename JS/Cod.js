const icons = document.querySelectorAll(".icon_heart");


Array.from(icons).forEach( icon => icon.addEventListener("click", function() {
this.classList.toggle("filled")
    console.log(this)
} ) )