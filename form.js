const labels = document.querySelectorAll('.form-control label');


labels.forEach((label) => {
    label.innerHTML = label.innerText
    .split('')
    .map((letter, index) => `<span style="transition-delay: ${index * 50}ms;">${letter}</span>`)
    .join('');
});


//! Form


const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    window.location.href='kabinet.html';

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
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