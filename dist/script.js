const toggleMenu = document.querySelector(".toggle_menu");
const headerNav = document.querySelector(".header_nav ul");
const lovely = document.querySelector(".lovely");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headerNav.classList.toggle("open");
  headerNav.style=("open");
  headerNav.style=("transition: .5s ease");
  lovely.classList.toggle("open");
});

// const kamote = document.querySelectorAll('.title');
// kamote.forEach((kamoteq) => {
//     kamoteq.addEventListener('click', () => {
//         kamoteq.nextElementSibling.classList.toggle('open');
//         kamoteq.querySelector("i").classList.toggle("open");
       
//     })
// })

const kamote = document.querySelectorAll('.drop__item h4');
kamote.forEach((kamoteq) => {
    kamoteq.addEventListener('click', () => {
        kamoteq.nextElementSibling.classList.toggle('open');
        kamoteq.querySelector("i").classList.toggle("open");
       
    })
})


