//! ---------------------- Active Card ------------------------------------------

const xMarkButton = document.querySelector( '.icon-mark' );
const barsButton = document.querySelector( ".icon-list" );

const picture = document.querySelector( ".container" );
const pictureActive = document.querySelector( ".container-active" );

barsButton.addEventListener( "click", () => {
    pictureActive.style.display = "block";
    picture.style.display = "none";
} );

xMarkButton.addEventListener( "click", () => {
    pictureActive.style.display = "none";
    picture.style.display = "block";
} );


//! ---------------------- Active A ---------------------------------------------

const frontEnd = document.getElementById( 'frontend' );
const backEnd = document.getElementById( 'backend' );
const uIUx = document.getElementById( 'uiux' );

const containerActiveRight = document.querySelector( '.container-active-right' );
const containerActiveCent = document.querySelector( '.container-active-cent' );
const containerActiveEnd = document.querySelector( '.container-active-end' );

frontEnd.addEventListener( 'click', () => {
    containerActiveRight.classList.add( 'front' );
    containerActiveCent.classList.remove( 'back' );
    containerActiveEnd.classList.remove( 'ui' );
} );

backEnd.addEventListener( 'click', () => {
    containerActiveCent.classList.add( 'back' );
    containerActiveRight.classList.remove( 'front' );
    containerActiveEnd.classList.remove( 'ui' );
} );

uIUx.addEventListener( 'click', () => {
    containerActiveEnd.classList.add( 'ui' );
    containerActiveRight.classList.remove( 'front' );
    containerActiveCent.classList.remove( 'back' );
} );


//! ---------------------- Active Courses ---------------------------------------

const coursesBtn = document.getElementById( 'courses' );
const coursesActiveMain = document.querySelector( '.courses-active' );


coursesBtn.addEventListener( 'click', () => {
    coursesActiveMain.classList.toggle( 'active' );
} );


//!------------------------ API -------------------------------------------------

const populyarLineContainer = document.querySelector( '.populyar-line-container' );
let courses;

const PostUI = ( filtered ) => {
    let filteredCources;

    switch ( filtered ) {
        case "Hamisi":
            filteredCources = courses.filter( ( post ) => post.courseAll === filtered );
            console.log( filteredCources );
            break;
        case "Frontend":
            filteredCources = courses.filter( ( post ) => post.courseType === filtered );
            break;
        case "Backend":
            filteredCources = courses.filter( ( post ) => post.courseType === filtered );
            break;
        case "UI/UX":
            filteredCources = courses.filter( ( post ) => post.courseType === filtered );
        default:
            filteredCources = courses;
            break;
    }

    populyarLineContainer.innerHTML = "";

    filteredCources.forEach( ( post ) => {

        populyarLineContainer.innerHTML += `
        <div class="populyar-card">

                        <div class="populyar-image">
                            <img src="${ post.img }" alt="">
                        </div>

                        <div class="populyar-video-text">

                            <div class="populyar-video-left">

                                <a href="#" class="populyar-btn">
                                    ${ post.courseType }
                                </a>

                            </div>

                            <div class="populyar-video-right">

                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                        fill="none">
                                        <path
                                            d="M10.875 8.15831L8.33334 6.24998V13.75L10.875 11.8416L13.3333 9.99998L10.875 8.15831ZM10.875 8.15831L8.33334 6.24998V13.75L10.875 11.8416L13.3333 9.99998L10.875 8.15831ZM10.875 8.15831L8.33334 6.24998V13.75L10.875 11.8416L13.3333 9.99998L10.875 8.15831ZM9.16668 3.39165V1.70831C7.49168 1.87498 5.96668 2.54165 4.73334 3.54998L5.91668 4.74165C6.8583 4.00655 7.98135 3.54006 9.16668 3.39165ZM4.74168 5.91665L3.55001 4.73331C2.51235 5.99713 1.8716 7.53959 1.70834 9.16665H3.39168C3.54168 7.94998 4.02501 6.84165 4.74168 5.91665ZM3.39168 10.8333H1.70834C1.87501 12.5083 2.54168 14.0333 3.55001 15.2666L4.74168 14.075C4.00531 13.1373 3.53857 12.0165 3.39168 10.8333ZM4.73334 16.45C5.99799 17.4863 7.54001 18.1268 9.16668 18.2916V16.6083C7.98135 16.4599 6.8583 15.9934 5.91668 15.2583L4.73334 16.45ZM18.3333 9.99998C18.3333 14.3 15.0667 17.85 10.875 18.2916V16.6083C14.1417 16.175 16.6667 13.375 16.6667 9.99998C16.6667 6.62498 14.1417 3.82498 10.875 3.39165V1.70831C15.0667 2.14998 18.3333 5.69998 18.3333 9.99998Z"
                                            fill="#939393" />
                                    </svg>
                                </a>

                                <a href="#" class="num">${ post.lesson } dərs</a>

                            </div>

                        </div>

                        <div class="populyar-line"></div>

                        <div class="populyar-text-icon">

                            <div class="populyar-paragraph">
                                <p>${ post.title }
                                </p>
                            </div>

                            <div class="populyar-radius">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16"
                                    fill="none">
                                    <path d="M14 8L0.499999 15.7942L0.5 0.205771L14 8Z" fill="white" />
                                </svg>
                            </div>

                        </div>

                    </div>

        `;

        // postList.innerHTML = result;

    } );

};

const getData = async () => {
    const { pathname } = location;
    const limit = pathname === "/index.html" ? "?_limit=8" : "";

    const res = await fetch( `http://localhost:3000/courses${ limit }` );
    const data = await res.json();

    courses = data;
    PostUI();
};

window.addEventListener( "DOMContentLoaded", getData );


const populyarCenterContainer = document.querySelector( '.populyar-center-container' );
const populyarCenterFrontContainer = document.querySelector( '.populyar-center-front-container' );
const populyarCenterBackContainer = document.querySelector( '.populyar-center-back-container' );
const populyarCenterUiuxContainer = document.querySelector( '.populyar-center-uiux-container' );

const commonBtn = document.getElementById( 'common-btn' );
const froBtn = document.getElementById( 'fro-btn' );
const backBtn = document.getElementById( 'back-btn' );
const uiBtn = document.getElementById( 'ui-btn' );



const btnnn = document.querySelectorAll( '.btnnn' );
btnnn.forEach( btn => {
    btn.addEventListener( 'click', ( e ) => {
        PostUI( e.target.innerText );
    } );
} );



// commonBtn.addEventListener("click", () => {
//     populyarCenterContainer.classList.add('common');
//     populyarCenterFrontContainer.classList.remove('fro');
//     populyarCenterBackContainer.classList.remove('back');
//     populyarCenterUiuxContainer.classList.remove('ui');
// });

// froBtn.addEventListener("click", () => {
//     populyarCenterFrontContainer.classList.add('fro');
//     populyarCenterContainer.classList.remove('common');
//     populyarCenterBackContainer.classList.remove('back');
//     populyarCenterUiuxContainer.classList.remove('ui');
// });

// backBtn.addEventListener("click", () => {
//     populyarCenterBackContainer.classList.add('back');
//     populyarCenterFrontContainer.classList.remove('fro');
//     populyarCenterContainer.classList.remove('common');
//     populyarCenterUiuxContainer.classList.remove('ui');
// });

// uiBtn.addEventListener("click", () => {
//     populyarCenterUiuxContainer.classList.add('ui');
//     populyarCenterBackContainer.classList.remove('back');
//     populyarCenterFrontContainer.classList.remove('fro');
//     populyarCenterContainer.classList.remove('common');
// });