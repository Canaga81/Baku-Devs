const labels = document.querySelectorAll( '.form-control label' );


labels.forEach( ( label ) => {
    label.innerHTML = label.innerText
        .split( '' )
        .map( ( letter, index ) => `<span style="transition-delay: ${ index * 50 }ms;">${ letter }</span>` )
        .join( '' );
} );


//! Form


const form = document.getElementById( 'form' );
const username = document.getElementById( 'username' );
const email = document.getElementById( 'email' );
const password = document.getElementById( 'password' );
const password2 = document.getElementById( 'password2' );

form.addEventListener( 'submit', e => {
    e.preventDefault();

    window.location.href = 'kabinet.html';

    validateInputs();
} );

const setError = ( element, message ) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector( '.error' );

    errorDisplay.innerText = message;
    inputControl.classList.add( 'error' );
    inputControl.classList.remove( 'success' );
};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector( '.error' );

    errorDisplay.innerText = '';
    inputControl.classList.add( 'success' );
    inputControl.classList.remove( 'error' );
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test( String( email ).toLowerCase() );
};

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if ( usernameValue === '' ) {
        setError( username, 'Username is required' );
    } else {
        setSuccess( username );
    }

    if ( emailValue === '' ) {
        setError( email, 'Email is required' );
    } else if ( !isValidEmail( emailValue ) ) {
        setError( email, 'Provide a valid email address' );
    } else {
        setSuccess( email );
    }

    if ( passwordValue === '' ) {
        setError( password, 'Password is required' );
    } else if ( passwordValue.length < 8 ) {
        setError( password, 'Password must be at least 8 character.' );
    } else {
        setSuccess( password );
    }

    if ( password2Value === '' ) {
        setError( password2, 'Please confirm your password' );
    } else if ( password2Value !== passwordValue ) {
        setError( password2, "Passwords doesn't match" );
    } else {
        setSuccess( password2 );
    }

};

//! Button & New Page Active

//! Kabinet-Page Sehifesini Yaratmaq ucun JS Code

const refreshBtn = document.getElementById( 'refresh-btn' );
const xMarkBtn = document.getElementById( 'x-mark' );
const kabinetPage = document.querySelector( '.kabinet-page' );

refreshBtn.addEventListener( 'click', () => {
    kabinetPage.classList.add( 'active' );
} );

xMarkBtn.addEventListener( 'click', () => {
    kabinetPage.classList.remove( 'active' );
} );

//! Kabinet-Page-2 Sehifesini Yaratmaq ucun JS Code

const page2Btn = document.getElementById( 'page2Btn' );
const xMark2Btn = document.getElementById( 'x-mark-2' );
const kabinetPage2 = document.querySelector( '.kabinet-page-2' );

page2Btn.addEventListener( 'click', () => {
    kabinetPage2.classList.add( 'active2' );
} );

xMark2Btn.addEventListener( 'click', () => {
    kabinetPage2.classList.remove( 'active2' );
} );


const populyarLineContainer = document.querySelector( '.populyar-line-container' );

const PostUI = ( filtered ) => {
    let filteredCources = [];

    switch ( filtered ) {
        case "Hamisi":
            filteredCources = courses.find( ( post ) => post.courseAll === filtered );
            console.log( filteredCources );
            break;
        case "Frontend":
            filteredCources = courses.find( ( post ) => post.courseType === filtered );
            break;
        case "Backend":
            filteredCources = courses.find( ( post ) => post.courseType === filtered );
            break;
        case "UI/UX":
            filteredCources = courses.find( ( post ) => post.courseType === filtered );
            break;
        default:
            filteredCources = courses;
            break;
    }


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

    const res = await fetch( `http://localhost:3000/courses-2${ limit }` );
    const data = await res.json();

    courses = data;
    PostUI();
};

window.addEventListener( "DOMContentLoaded", getData );