const formEl = document.getElementById( 'formEl' );
const passwordInputEl = document.getElementById( 'password-input' );

formEl.addEventListener( 'submit', e  => {
    e.preventDefault();
} );

passwordInputEl.addEventListener( 'click', e => {

    let inputValue = e.target.value.replace( /\D/g, '' ); //! Sadece Reqemler Al
    let formattedValue = '';

    for ( let i = 0; i < inputValue.length; i++ ) {

        formattedValue += inputValue[i];

    }

    e.target.value = formattedValue;

} );