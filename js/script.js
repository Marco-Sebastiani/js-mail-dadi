
var giocatoreReale = Math.floor(Math.random()*6) +1;
console.log(giocatoreReale);

var giocatoreCpu = Math.floor(Math.random()*6) +1;
console.log(giocatoreCpu);

var giocatoreReale = giocatoreCpu;
var message = parità;

if (giocatoreReale > giocatoreCpu) {
    message = vittoria
} else if (giocatoreReale < giocatoreCpu){
    message = lose ;
}

console.log(message);