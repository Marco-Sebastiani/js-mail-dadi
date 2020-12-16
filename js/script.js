
var element = document.getElementById("gioca");
element.addEventListener('click',
    function(){
        var giocatoreReale = Math.floor(Math.random()*6) +1;
        var giocatoreCpu = Math.floor(Math.random()*6) +1;
        var message = 'pari';

        if (giocatoreReale > giocatoreCpu) {
        message = 'Il giocatore ha vinto'
        } else if (giocatoreReale < giocatoreCpu){
        message = 'La cpu ha vinto';
        }

        document.getElementById('my-profyle').innerHTML = 'Arianna' + giocatoreReale;
        document.getElementById('cpu').innerHTML = 'Cpu' + giocatoreCpu;
        document.getElementById('mex').innerHTML += message;
    }
);


var resetta = document.getElementById("reset");
resetta.addEventListener('click',
    function() {
        document.getElementById('my-profyle').innerHTML = 'Arianna' + ' ';
        document.getElementById('cpu').innerHTML = 'Cpu' + ' ';
        document.getElementById('mex').innerHTML = ' ';
    }
);
