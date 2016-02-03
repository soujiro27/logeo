var usuario="sabi";
var contra="dorados";
var numeros=['0','1','2','3','4','5','6','7','8','9'];
$(document).on('ready',inicia);

function inicia()
{
  //$('input[type=submit]').on('click',validar);
  $('input#registro').on('click',registrar);
}

function validar(e)
{
  e.preventDefault();
  var nombre=$('input[type=text]').val();
  var pass=$('input[type=password]').val();
  if(nombre==usuario && pass==contra)
  {
    setTimeout("redi()",5000);
  }
  else
  {
    $('div').append
    ('<a href="registro.html">Registrate</a>');
  }
}

function redi()
{
window.location="http://www.tentaculos.com";
}


function registrar(e)
{
  e.preventDefault();
  var nombre=$('input[type=text]').val();
  var contra=$('input[type=password]').val();
  //console.log(nombre[0]);
  for(x in nombre)
  {
    for(y in numeros)
    {
      if(nombre[x]==numeros[y]){
        console.log("no deben de ir numeros");
      }

    }

  }

var contador=0;
for(x in contra)
{
  contador+=1;
}
if(contador<6 || contador>8)
{
  console.log("contraseña mal");
}



}
