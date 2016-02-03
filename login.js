var usuario="sabi";
var contra="dorados";

$(document).on('ready',inicia);

function inicia()
{
  $('input[type=submit]').on('click',validar);
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
    $('div').append('<a href="registro.html">Registrate</a>');
  }
}

function redi()
{
window.location="http://www.tentaculos.com";
}
