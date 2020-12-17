var element = document.getElementById("gioca");
element.addEventListener('click',
    function(){
        var giocatoreReale = Math.floor(Math.random()*6) +1;
        var giocatoreCpu = Math.floor(Math.random()*6) +1;
        var message = 'pareggio';

        if (giocatoreReale > giocatoreCpu) {
        message = 'player ha vinto'
        } else if (giocatoreReale < giocatoreCpu){
        message = 'cpu ha vinto';
        }

        document.getElementById('my-profyle').innerHTML = giocatoreReale;
        document.getElementById('cpu').innerHTML = giocatoreCpu;
        document.getElementById('mex').innerHTML = message;
    }
);

var resetta = document.getElementById("reset");
resetta.addEventListener('click',
    function() {
        document.getElementById('my-profyle').innerHTML = ' ';
        document.getElementById('cpu').innerHTML =' ';
        document.getElementById('mex').innerHTML = ' ';
    }
);
