const btns = [
  document.getElementById("menu-btn"),
  document.getElementById("close-btn"),
];
const mobile_nav_el = document.querySelector(".nav__mobile");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    mobile_nav_el.classList.toggle("open");
  });
});
