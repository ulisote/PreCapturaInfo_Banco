console.log(window.location.href);



var turno =getQueryVariable('turno');
var cliname = getQueryVariable('cliname');
var clifirst = getQueryVariable('clifirst');
var clisecond = getQueryVariable('clisecond');

var benname = getQueryVariable('benname');
var benfirst = getQueryVariable('benfirst');
var bensecond = getQueryVariable('bensecond');

var cuenta = getQueryVariable('cuenta');
var monto = getQueryVariable('monto');


$(document).ready(function(){

    	$('#otro').text(cliname + ' ' + clifirst+ ' ' + clisecond);
    	$('#sucBen').text(benname + ' ' +benfirst+ ' ' +bensecond);
    	$('#sucCuenta').text(cuenta);
    	$('#sucMonto').text("$ "+ monto);
});

function getQueryVariable(variable) {
        // Estoy asumiendo que query es window.location.search.substring(1);
        var query = window.location.href;
        var vars = query.split("&");
        for (var i=0; i < vars.length; i++) {
            var pair = vars[i].split("="); 
            if (pair[0] == variable) {
                return pair[1];
            }
        }
        return false;
    }


