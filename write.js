const knowledgePEl = document.getElementById( 'knowledgeP' );
const speedEl = document.getElementById( 'speed' );

const text = `Nə üçün tədrisinizi məhz bizdə keçməlisiniz? Bunun üçün ən azı dörd səbəb var:`;
let idx = 1;
let speed = 30;

writeText();

function writeText () {

    knowledgePEl.innerText = text.slice( 0, idx );
    idx++;

    if ( idx > text.length ) {

        //*** content.innerText => (Dongunu Dayandirir);
        idx = 1; //! => (Dongunu Yaradir)
        
    }

    setTimeout( writeText, speed );

}