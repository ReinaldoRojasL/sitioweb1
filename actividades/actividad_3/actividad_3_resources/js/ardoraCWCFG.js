//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=300; timeIni=300; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=2;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1;
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime; var tiAudio=false;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=2; messageOk="bien hecho"; messageTime="sigue intentando"; messageError="no te rindas"; messageErrorG="no te rindas"; messageAttempts="mala suerte"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="YWN0aXZpZGFkXzM"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["Uw","RQ","Rw","VQ","Ug","SQ","RA","QQ","RA","","","","",""],["","","","","","Tg","","","","","","","",""],["","","","","","Rg","","","","","","","",""],["","","","","","Tw","Qg","Sg","RQ","VA","SQ","Vg","Tw","Uw"],["","","","","","Ug","","","","","","SQ","","SQ"],["","","","","","TQ","","","","","","Ug","","Uw"],["","","","","","QQ","","","","","","VQ","","VA"],["","","","","","VA","","","","","","Uw","","RQ"],["","","","","Ug","SQ","RQ","Uw","Rw","Tw","","","","TQ"],["","","","","","Qw","","","","","","","","QQ"],["","","","","","QQ","","","","","","","",""]];
var x1=[1,6,14,5,12,6];
var y1=[1,1,4,9,4,4];
var x2=[9,6,14,10,12,14];
var y2=[1,11,10,9,8,4];
var imaCW=["","","","","",""];
var audioCW=["","","","","",""];
var defCW=["parte de la informatica que nos permite proteger informacion","Conjunto de conocimientos técnicos que se ocupan del tratamiento automático de la información por medio de computadoras","parte donde la informatica almacena y procesa informacion","los virus son para el sistema un?","son creados por personas para dañar o robar informacion","para tener una buena seguridad en la informacion de nesecitan..."];
var colNum=14;
var rowNum=11;
