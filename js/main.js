//Night mode
const nightMode = document.querySelector("#night-mode");
const header = document.querySelector("header");

nightMode.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

//Hidden
const bullet = document.getElementById("triggerItem");
const image = document.getElementById("hiddenImage");

bullet.addEventListener("click", () => {
  image.classList.toggle("show-img");
});
