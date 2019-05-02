var firmaCanva = "<canvas id='pizarra'>hola</canvas>";
$("#traerCanvas").append(firmaCanva);

$( "#moral" ).on( "click", function() {
	$("#benNom, #benApe1, #benApe2").hide();
	$("#razonso").show();
});
$( "#fisica" ).on( "click", function() {
	$("#benNom, #benApe1, #benApe2").show();
	$("#razonso").hide();
});
 var moral = false;
$( "#rMoral" ).on( "click", function() {
   moral = true;
});

$( "#rFisica" ).on( "click", function() {
   moral = false;
});
$( "#btnQRAceptar" ).on( "click", function() {
   $('#ci4').val($('#hola').val())
   modalQr.style.display = "none";
   scanner.stop();
});

/*

 $("#pa2").focus(function(){
    $("#li10").css("display", "inline-block");
  });
 $("#pa2").focus(function(){
    $("#li10").css("display", "inline-block");
  });
 $("#pa2").focus(function(){
    $("#li10").css("display", "inline-block");
  });
 $("#pa2").focus(function(){
    $("#li10").css("display", "inline-block");
  });
 $("#pa2").focus(function(){
    $("#li10").css("display", "inline-block");
  });
 $("#pa2").focus(function(){
    $("#li10").css("display", "inline-block");
  });
 $("#pa2").focus(function(){
    $("#li10").css("display", "inline-block");
  });*/





var canvasborrar = document.getElementById('canvas');

//Repetir firma
$( "#repetirFirma" ).on( "click", function() {
//posicion = miCanvas.getBoundingClientRect()

ctx.clearRect(0, 0, miCanvas.width, miCanvas.height);
lineas=[];

});

var nombre;

$( "#modalContinuar" ).on( "click", function() {

    nombre = $('#cn1').val();
    
});

//Condicion de campos llenos

if($('#ti1').val() == ""){
   

    //$("#btncondicion").show();
    //$("#desabilitado").hide();
}else{
     alert("hola")
}



var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementById("close");

var entiendo = document.getElementById("modalEntiendo");


btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}
entiendo.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {


  if (event.target == modal) {
    modal.style.display = "none";
  }


// Persona Fisica 

if(moral){
if(
    $('#ti1').val() == "" ||
    $('#ci1').val() == "" ||
    $('#ci2').val() == "" ||
    $('#ci3').val() == "" ||
    $('#ci4').val() == "" ||
    $('#cn4').val() == "" ||
    $('#pa1').val() == "" ||
    $('#pa2').val() == "" ||
    omar == false

    ){
   

        //$("#btncondicion").show();
        //$("#desabilitado").hide();
        $("#btncondicion").hide();
        $("#desabilitado").show();
    }else{
         $("#btncondicion").show();
        $("#desabilitado").hide();
    }
}else{

    if(
    $('#ti1').val() == "" ||
    $('#ci1').val() == "" ||
    $('#ci2').val() == "" ||
    $('#ci3').val() == "" ||
    $('#ci4').val() == "" ||
    $('#cn1').val() == "" ||
    $('#cn2').val() == "" ||
    $('#cn3').val() == "" ||
    $('#pa1').val() == "" ||
    $('#pa2').val() == "" ||
    omar == false

    ){
   

        //$("#btncondicion").show();
        //$("#desabilitado").hide();
        $("#btncondicion").hide();
        $("#desabilitado").show();
    }else{
         $("#btncondicion").show();
        $("#desabilitado").hide();
    }
}
  
}



$(document).ready(function(){
    

	$('#pizarra').hide();

    $('#sucname').val("nombre");


});

var modalFirma = document.getElementById("modalFirma");
var btnFirma = document.getElementById("capturarFirma");

var spanFirma = document.getElementById("closeFirma");
var firma = document.getElementById("pizarra");

var omar = true;
btnFirma.onclick = function() {
  modalFirma.style.display = "block";
  firma.style.display="block";
  ctx.clearRect(0, 0, miCanvas.width, miCanvas.height);
lineas=[];
}
spanFirma.onclick = function() {
  modalFirma.style.display = "none";
  firma.style.display="none";
}
$('#eliminarFirma').on("click",function(){
    $("#firmaCapturada").empty();
    $('#capturarFirma').show();
    $('#eliminarFirma').hide();
    omar = false

})



$('#canCapturar').on("click",function(){

	var img = new Image();
	img.src = firma.toDataURL();
	document.getElementById("firmaCapturada").appendChild(img);

	modalFirma.style.display = "none";
  	firma.style.display="none";

    $('#capturarFirma').hide();
    $('#eliminarFirma').show();
    omar = true;

})
// window.onclick = function(event2) {
//   if (event2.target == modalFirma) {
//     modalFirma.style.display = "none";
//   }
// }


//Boton borrar los campos de input
            $('#li1').click(function() {
                $('#ti1').val('');
            });
            $('#li2').click(function() {
                $('#ci1').val('');
            });
            $('#li3').click(function() {
                $('#ci2').val('');
            });
            $('#li4').click(function() {
                $('#ci3').val('');
            });
            $('#li5').click(function() {
                $('#ci4').val('');
            });
            $('#li6').click(function() {
                $('#cn1').val('');
            });
            $('#li7').click(function() {
                $('#cn2').val('');
            });
            $('#li8').click(function() {
                $('#cn3').val('');
            });
            $('#li9').click(function() {
                $('#pa1').val('');
            });
            $('#li10').click(function() {
                $('#pa2').val('');
            });



 //======================================================================
    // VARIABLES
    //======================================================================
    let miCanvas = document.querySelector('#pizarra');

    let lineas = [];
    let correccionX = 0;
    let correccionY = 0;
    let pintarLinea = false;


    let posicion = miCanvas.getBoundingClientRect()
    correccionX = posicion.x;
    correccionY = posicion.y;

    miCanvas.width = 480;
    miCanvas.height = 313;




    //======================================================================
    // FUNCIONES
    //======================================================================

    /**
     * Funcion que empieza a dibujar la linea
     */
    function empezarDibujo () {
        pintarLinea = true;
        lineas.push([]);
    };

    /**
     * Funcion dibuja la linea
     */var ctx = miCanvas.getContext('2d')
    function dibujarLinea (event) {
        event.preventDefault();
        if (pintarLinea) {
            
            // Estilos de linea
            ctx.lineJoin = ctx.lineCap = 'round';
            ctx.lineWidth = 5;
            // Color de la linea
            ctx.strokeStyle = '#000';
            // Marca el nuevo punto
            let nuevaPosicionX = 0;
            let nuevaPosicionY = 0;
            if (event.changedTouches == undefined) {
                // Versión ratón
                nuevaPosicionX = event.layerX;
                nuevaPosicionY = event.layerY;
            } else {
                // Versión touch, pantalla tactil
                nuevaPosicionX = event.changedTouches[0].pageX - correccionX;
                nuevaPosicionY = event.changedTouches[0].pageY - correccionY;
            }
            // Guarda la linea
            lineas[lineas.length - 1].push({
                x: nuevaPosicionX,
                y: nuevaPosicionY
            });

            
            // Redibuja todas las lineas guardadas
            ctx.beginPath();
            lineas.forEach(function (segmento) {
                ctx.moveTo(segmento[0].x, segmento[0].y);
                segmento.forEach(function (punto, index) {
                    ctx.lineTo(punto.x, punto.y);
                });
            });
            ctx.stroke();

        }
    }

    /**
     * Funcion que deja de dibujar la linea
     */
    function pararDibujar () {
        pintarLinea = false;
    }



    //Modal de condiciones
    var modalcondicion = document.getElementById("modalcondicion");
    var btncondicion = document.getElementById("btncondicion");
    var spancondicion= document.getElementById("closecondicion");
    var modalRegresar= document.getElementById("modalRegresar");

    btncondicion.onclick = function() {
      modalcondicion.style.display = "block";
    }
    spancondicion.onclick = function() {
      modalcondicion.style.display = "none";
    }
    modalRegresar.onclick = function() {
      modalcondicion.style.display = "none";
    }


    //======================================================================
    // EVENTOS
    //======================================================================

    // Eventos raton
    miCanvas.addEventListener('mousedown', empezarDibujo, false);
    miCanvas.addEventListener('mousemove', dibujarLinea, false);
    miCanvas.addEventListener('mouseup', pararDibujar, false);

    // Eventos pantallas táctiles
    miCanvas.addEventListener('touchstart', empezarDibujo, false);
    miCanvas.addEventListener('touchmove', dibujarLinea, false);


    var modalQr = document.getElementById('modalQr');
 var btnQr = document.getElementById("btnQr");
 var spanQr = document.getElementById("closeQr");
 var btQrCancel = document.getElementById("btnQRCancelar");

// var entiendo = document.getElementById("modalEntiendo");


  let scanner = new Instascan.Scanner(
            {
                video: document.getElementById('preview')
            }
        );
btnQr.onclick = function() {
   modalQr.style.display = "block";
 
        scanner.addListener('scan', function(content) {
        var pollo =content.slice(17, 30);
        $('#hola').val(pollo);
        });
        Instascan.Camera.getCameras().then(cameras => 
        {
            if(cameras.length > 0){
                scanner.start(cameras[0]);
            } else {
                console.error("No está la camara en este dispositivo");
            }
        });

}


 spanQr.onclick = function() {
   modalQr.style.display = "none";
   scanner.stop();
 }
 btQrCancel.onclick = function() {
   modalQr.style.display = "none";
   scanner.stop();
 }
// entiendo.onclick = function() {
//   modal.style.display = "none";
// }



