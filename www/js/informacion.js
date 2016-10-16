
var ruta="http://localhost/ladc_web/php/";
//
function onDeviceReady()
{
    
  myScroll = new IScroll('#wrapper', {
    zoom: true,
    scrollX: true,
    scrollY: true,
    mouseWheel: true,
    wheelAction: 'zoom'
  });
$('#mp2').hide();
$('#mp3').hide();
$('#mp4').hide();
}
  function redirect(){

     var ref = window.open('https://www.facebook.com/', '_blank', 'location=yes');
     alert(ref);
     ref.show();
  }

function orden(url,peti,lugar)
{
    $(lugar).html("<img src='img/carga.gif'>");
    $.ajax({
            type: 'post',
            url: ruta+""+url,
            data: {peticion:peti},
            dataType: "html",
            success: function(data) {
                $(lugar).html(data);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $(lugar).html("<div class='adver'> :( NO ESTAS CONECTADO CON EL SERVIDOR INTENTA CONECTANDOTE A INTERNET. :(</div>");

            }
        });
}

function consultas(url,peti,lugar,dato)
{
    $(lugar).html("<img src='img/carga.gif'>");
    $.ajax({
            type: 'post',
            url: ruta+""+url,
            data: {peticion:peti,dato:dato},
            dataType: "html",
            success: function(data) {
            $(lugar).html(data);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $(lugar).html("<div class='adver'> :( NO ESTAS CONECTADO CON EL SERVIDOR INTENTA CONECTANDOTE A INTERNET. :(</div>");
            }
        });
}
function programacion(url,peti,lugar,dato,dia)
{
  $(lugar).html("<img src='img/carga.gif'>");
    $.ajax({
            type: 'post',
            url: ruta+""+url,
            data: {peticion:peti,dato:dato,dia:dia},
            dataType: "html",
            success: function(data) {
            if (data) 
            {
              $(lugar).html(data);
            }

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $(lugar).html("<div class='adver'> :( NO ESTAS CONECTADO CON EL SERVIDOR INTENTA CONECTANDOTE A INTERNET. :(</div>");

            }
        });
}
$('#btn_mp2').on('tap',function(){
  $('#mp1').hide('slow/400/fast');
  $('#mp3').hide('slow/400/fast');
  $('#mp4').hide('slow/400/fast');
  $('#mp2').show('slow/400/fast');
})
$('#btn_mp1').on('tap',function(){
  $('#mp2').hide('slow/400/fast');
  $('#mp3').hide('slow/400/fast');
  $('#mp4').hide('slow/400/fast');
  $('#mp1').show('slow/400/fast');
})
$('#btn_mp3').on('tap',function(){
  $('#mp1').hide('slow/400/fast');
  $('#mp2').hide('slow/400/fast');
  $('#mp4').hide('slow/400/fast');
  $('#mp3').show('slow/400/fast');
})
$('#btn_mp4').on('tap',function(){
  $('#mp1').hide('slow/400/fast');
  $('#mp3').hide('slow/400/fast');
  $('#mp2').hide('slow/400/fast');
  $('#mp4').show('slow/400/fast');
})

$('#mapa1').on('tap',function(){
  $('#piso2').hide('slow/400/fast');
  $('#rutafup').hide('slow/400/fast');
  $('#piso1').show('slow/400/fast');
})
$('#mapa2').on('tap',function(){
  $('#piso1').hide('slow/400/fast');
  $('#rutafup').hide('slow/400/fast');
  $('#piso2').show('slow/400/fast');
})
$('#fup').on('tap',function(){
  $('#piso1').hide('slow/400/fast');
  $('#rutafup').show('slow/400/fast');
  $('#piso2').hide('slow/400/fast');
})
//Keynotes
$('#btn_plenaria').on('tap',function(){
  
 orden("MainKeynote.php",6,"#listkeynote");
})
//consultas
$('#actividades-btn').on('tap',function()
{
  orden("MainActividades.php",6,"#listaactiv");
})
  //tutoriales
$('#tutorial-btn').on('tap',function()
{
  orden("Main.php",6,"#lista");
})


//programación wednesday
$('#programwed').on('tap',function(){
  
//carga los keynotes al entrar a la ventana del dia
consultas("MainKeynote.php",7,"#pro_wed","2016-10-19");
})
//caraga las sesiones del dia
$('#ses_wed').on('tap',function(){
 
  programacion("MainPaper.php",7,"#pro_wed",2,"2016-10-19")
   $('#pro_wed').hide('slow/400/fast');
  $('#pro_wed').show('slow/400/fast');
})
$('#wed_key').on('tap',function()
{ 
//carga los keynotes del dia
consultas("MainKeynote.php",7,"#pro_wed","2016-10-19");
 $('#pro_wed').hide('slow/400/fast');
  $('#pro_wed').show('slow/400/fast');
})
//caraga de las acitvidades  del dia 
$('#wed_acti').on('tap',function()
{ 
 consultas("MainActividades.php",7,"#pro_wed","2016-10-19");
 $('#pro_wed').hide('slow/400/fast');
  $('#pro_wed').show('slow/400/fast');
})
//carga de la informacion del tutorial del di
$('#tuto_wed').on('tap',function()
{
  consultas("Main.php",7,'#pro_wed',"2016-10-19");
  $('#pro_wed').hide();
    $('#pro_wed').show('slow/400/fast');
})
//fin de la programcion del wednesday

//programación thrusday
$('#programthr').on('tap',function(){
 //carga los keynotes al entrar a la ventana del dia
consultas("MainKeynote.php",7,"#thrus_program","2016-10-20");
})
//caraga las sesiones del dia
$('#thru_ws').on('tap',function(){
 
  programacion("MainPaper.php",7,"#thrus_program",2,"2016-10-20")
   $('#thrus_program').hide('slow/400/fast');
  $('#thrus_program').show('slow/400/fast');
})
//keynotes del dia
$('#thru_key').on('tap',function()
{
consultas("MainKeynote.php",7,"#thrus_program","2016-10-20");
$('#thrus_program').hide('slow/400/fast');
  $('#thrus_program').show('slow/400/fast');
})
//actividades sociales del dia 
$('#thru_act').on('tap',function()
{ 
 consultas("MainActividades.php",7,"#thrus_program","2016-10-20");
 $('#thrus_program').hide('slow/400/fast');
  $('#thrus_program').show('slow/400/fast');
})
//caraga de los tutoriales del dia
$('#thru_tuto').on('tap',function()
{
  
  consultas("Main.php",7,'#thrus_program',"2016-10-20");
   $('#thrus_program').hide('slow/400/fast');
    $('#thrus_program').show('slow/400/fast');
})

//programacion viernes
$('#prografri').on('tap',function(){
  
 //carga los keynotes al entrar a la ventana del dia
consultas("MainKeynote.php",7,"#pro_friday","2016-10-21");
})

//caraga las sesiones del dia
$('#sesion_fri').on('tap',function(){
 
  programacion("MainPaper.php",7,"#pro_friday",2,"2016-10-21")
   $('#pro_friday').hide('slow/400/fast');
  $('#pro_friday').show('slow/400/fast');
})

//carag de los keynotes del dia
$('#fri_key').on('tap',function()
{ 
consultas("MainKeynote.php",7,"#pro_friday","2016-10-21");
 $('#pro_friday').hide('slow/400/fast');
  $('#pro_friday').show('slow/400/fast');
})

//actividades sociales del dia
$('#fri_social').on('tap',function()
{ 
   
 consultas("MainActividades.php",7,"#pro_friday","2016-10-21");
   $('#pro_friday').hide('slow/400/fast');
  $('#pro_friday').show('slow/400/fast');
})

$('#fri_tuto').on('tap',function()
{
 
  consultas("Main.php",7,'#pro_friday',"2016-10-21");
   $('#pro_friday').hide('slow/400/fast');
    $('#pro_friday').show('slow/400/fast');
})