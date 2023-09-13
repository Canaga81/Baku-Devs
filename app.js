//! ---------------------- Active Card ------------------------------------------

const xMarkButton = document.querySelector('.icon-mark');
const barsButton = document.querySelector(".icon-list");

const picture = document.querySelector(".container");
const pictureActive = document.querySelector(".container-active");

barsButton.addEventListener("click", () => {
    pictureActive.style.display = "block";
    picture.style.display = "none";
})

xMarkButton.addEventListener("click", () => {
    pictureActive.style.display = "none";
    picture.style.display = "block";
});


//! ---------------------- Active A ---------------------------------------------

const frontEnd = document.getElementById('frontend');
const backEnd = document.getElementById('backend');
const uIUx = document.getElementById('uiux');

const containerActiveRight = document.querySelector('.container-active-right');
const containerActiveCent = document.querySelector('.container-active-cent');
const containerActiveEnd = document.querySelector('.container-active-end');

frontEnd.addEventListener('click', () => {
    containerActiveRight.classList.add('front');
    containerActiveCent.classList.remove('back');
    containerActiveEnd.classList.remove('ui');
});

backEnd.addEventListener('click', () => {
    containerActiveCent.classList.add('back');
    containerActiveRight.classList.remove('front');
    containerActiveEnd.classList.remove('ui');
});

uIUx.addEventListener('click', () => {
    containerActiveEnd.classList.add('ui');
    containerActiveRight.classList.remove('front');
    containerActiveCent.classList.remove('back');
});


//! ---------------------- Active Courses ---------------------------------------

const coursesBtn = document.getElementById('courses');
const coursesActiveMain = document.querySelector('.courses-active');


coursesBtn.addEventListener('click', () => {
    coursesActiveMain.classList.toggle('active');
});