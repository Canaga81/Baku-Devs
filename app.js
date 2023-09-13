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


//!------------------------ API -------------------------------------------------

// const populyarLineContainer = document.querySelector('.populyar-line-container');

// const PostUI = (posts) => {

//     let result = '';

//     posts.forEach((post) => {

//         result += `
//         <li class="post-item">
//                 <div class="post-body">
//                     <span class="post-id">Post Id: <b>${post.id}</b></span>
//                     <strong class="post-title">${post.title}</strong>
//                     <p class="post-content">${post.body}</p>
//                 </div>

//                 <button class="post-button">Read More</button>
//             </li>
//         `;

//         postList.innerHTML = result;

//     });

// }

// const getData  = async () => {

//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await res.json();

//     PostUI(data);

// }

// window.addEventListener("DOMContentLoaded", getData);


const populyarCenterContainer = document.querySelector('.populyar-center-container');
const populyarCenterFrontContainer = document.querySelector('.populyar-center-front-container');
const populyarCenterBackContainer = document.querySelector('.populyar-center-back-container');
const populyarCenterUiuxContainer = document.querySelector('.populyar-center-uiux-container');

const commonBtn = document.getElementById('common-btn');
const froBtn = document.getElementById('fro-btn');
const backBtn = document.getElementById('back-btn');
const uiBtn = document.getElementById('ui-btn');

commonBtn.addEventListener("click", () => {
    populyarCenterContainer.classList.add('common');
    populyarCenterFrontContainer.classList.remove('fro');
    populyarCenterBackContainer.classList.remove('back');
    populyarCenterUiuxContainer.classList.remove('ui');
});

froBtn.addEventListener("click", () => {
    populyarCenterFrontContainer.classList.add('fro');
    populyarCenterContainer.classList.remove('common');
    populyarCenterBackContainer.classList.remove('back');
    populyarCenterUiuxContainer.classList.remove('ui');
});

backBtn.addEventListener("click", () => {
    populyarCenterBackContainer.classList.add('back');
    populyarCenterFrontContainer.classList.remove('fro');
    populyarCenterContainer.classList.remove('common');
    populyarCenterUiuxContainer.classList.remove('ui');
});

uiBtn.addEventListener("click", () => {
    populyarCenterUiuxContainer.classList.add('ui');
    populyarCenterBackContainer.classList.remove('back');
    populyarCenterFrontContainer.classList.remove('fro');
    populyarCenterContainer.classList.remove('common');
});