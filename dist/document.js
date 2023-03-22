const buger__menu = document.querySelector(".burger__btn");
const navigation = document.querySelector(".navigation");
buger__menu.addEventListener("click", () => {
  buger__menu.classList.toggle("open");
  navigation.classList.toggle("open");
  navigation.style=("transition: .5s ease")
});

const kamote = document.querySelectorAll('.drop__item h4');
kamote.forEach((kamoteq) => {
    kamoteq.addEventListener('click', () => {
        kamoteq.nextElementSibling.classList.toggle('open');
        kamoteq.querySelector("i").classList.toggle("open");
       
    })
})