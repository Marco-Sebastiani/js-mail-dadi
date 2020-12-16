
var giocatoreReale = Math.floor(Math.random()*6) +1;
/* console.log(giocatoreReale);
 */
var giocatoreCpu = Math.floor(Math.random()*6) +1;
/* console.log(giocatoreCpu);
 */

var message = 'pari';

if (giocatoreReale > giocatoreCpu) {
    message = 'Il giocatore ha vinto'
} else if (giocatoreReale < giocatoreCpu){
    message = 'La cpu ha vinto';
}

/* console.log(message);
 */
document.getElementById('my-profyle').innerHTML += giocatoreReale;
document.getElementById('cpu').innerHTML += giocatoreCpu;
document.getElementById('mex').innerHTML = message;

