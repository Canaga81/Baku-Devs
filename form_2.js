const labels = document.querySelectorAll( '.form-control label' );


labels.forEach( ( label ) => {
    label.innerHTML = label.innerText
        
        .split( '' )
        .map( ( letter, index ) => `<span style="transition-delay: ${ index * 50 }ms;">${ letter }</span>` )
        .join( '' );
    
} );


//! ------------ Form Control ------------

const inputText = document.getElementById( 'input-text' );
const inputEmail = document.getElementById( 'input-email' );
const inputNumber = document.getElementById( 'input-number' );
const formTextarea = document.getElementById( 'form-textarea' );
const questionBtn = document.getElementById( 'question-btn' );
const form = document.getElementById( 'form' );

form.addEventListener( 'submit', e => {
    e.preventDefault();
} );

inputNumber.addEventListener( 'input', e => {

    let inputValue = e.target.value.replace( /\D/g, '' ); //! Sadece Reqemler Al
    let formattedValue = '';

    for ( let i = 0; i < inputValue.length; i++ ) {

        formattedValue += inputValue[i];

    }

    e.target.value = formattedValue;

} );

inputText.addEventListener( 'input', e => {

    let inputValue = e.target.value;
    let lettersOnly = inputValue.replace( /[^a-zA-Z]/g, '' );

    if ( inputValue !== lettersOnly ) {
        e.target.value = lettersOnly; //! Sadece harf karakterlerini geri yazar.
    }

} );