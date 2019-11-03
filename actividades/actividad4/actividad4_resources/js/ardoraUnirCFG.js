//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=90; timeIni=90; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=2; messageOk="bien hecho"; messageTime="suerte para la proxima"; messageError="sigue estudiando"; messageErrorG="sigue estudiando"; messageAttempts="ups"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="YWN0aXZpZGFkNA"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["ZXN0b3Mgc29uIGFsZ3Vub3Mgcmllc2dvcyBkZSBsYSBzZWd1cmlkYWQgaW5mb3JtYXRpY2E", "dmlydXMsIGhhY2tlciwgc29mdHdhcmUgbWFsaXNpb3Nv"],["cHJpbmNpcGlvcyBmdW5kYW1lbnRhbGVzIGRlIGxhIHNlZ3VyaWRhZCBpbmZvcm1hdGljYQ", "Q29uZmlkZW5jaWFsaWRhZCwgSW50ZWdyaWRhZCwgRGlzcG9uaWJpbGlkYWQ"],["Y3VhbCBlcyBsYSBpbXBvcnRhbmNpYSBkZSBsYSBzZWd1cmlkYWQgaW5mb3JtYXRpY2E", "cHJldmVuaXIgZWwgcm9ibyBvIG1pZGlmaWNhY2lvbiBkZSBpbmZvcm1hY2lvbiBwb3IgbWVkaW9zIG5vIGRlc2VhZG9z"],["Y29tbyBzZSBnYXJhbnRpemEgdW5hIGJ1ZW5hIHNlZ3VyaWRhZCBlbiBlbCBzaXN0ZW1h", "cG9yIG1lZGlvIGRlIG9iamV0aXZvcyB5IHByaW5jaXBpb3MsIGV2aXRhbmRvIHRvZG8gdGlwbyBkZSByaWVzZ28"],["Zm9ybWFzIGRlIHByZXZlbmlyIHJpZXNnb3MgZW4gbGEgc2VndXJpZGFkIGluZm9ybWF0aWNh", "YW50aXZpcnVzLCBjb250cmFzZfFhcywgbm8gdXRpbGl6YXIgb3JkZW5hZG9yZXMgcHVibGljb3M"]];
var c=[[53,33],[52,44],[50,69],[51,65],[54,56]];
var con1=["estos son algunos riesgos de la seguridad informatica","principios fundamentales de la seguridad informatica","formas de prevenir riesgos en la seguridad informatica","cual es la importancia de la seguridad informatica","como se garantiza una buena seguridad en el sistema"];
var con2=["antivirus, contraseñas, no utilizar ordenadores publicos","por medio de objetivos y principios, evitando todo tipo de riesgo","virus, hacker, software malisioso","prevenir el robo o midificacion de informacion por medios no deseados","Confidencialidad, Integridad, Disponibilidad"];
var sel1=""; join1=[]; join2=[];
