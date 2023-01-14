const menu_btn = document.getElementById("menu-btn");
const close_btn = document.getElementById("close-btn");
const btns = [menu_btn, close_btn];
const mobile_nav_el = document.querySelector(".nav__mobile");

// menu_btn.addEventListener("click", function () {
//   mobile_nav_el.classList.toggle("open");
// });

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    mobile_nav_el.classList.toggle("open");
  });
});
