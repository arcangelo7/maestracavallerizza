var success_msg = new Object();
success_msg['pid_5']="Modulo di contatto---ak---Grazie. Risponderemo prima possibile.";
success_msg['pid_6']="Feedback Form---ak---Grazie. Risponderemo prima possibile.";

function getRequestData(name){if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search)){return decodeURIComponent(name[1]);} }; var req_pid=getRequestData('pid'); if( typeof req_pid =='undefined' || req_pid =='') req_pid='0';else req_pid='pid_'+req_pid;
var form_title='';var form_msg='';
if(req_pid in success_msg){ var success_msg = success_msg[req_pid]; var start_index= success_msg.indexOf('---ak---');form_title = success_msg.substring(0,start_index);form_msg = success_msg.substring(start_index+8);}
var req_mail_staus=getRequestData('m');
if( typeof req_mail_staus !='undefined' && req_mail_staus=='0') form_msg='Please contact your Administrator for help';
$('#form_title' ).html( form_title); $( '#form_status' ).html( form_msg); $('#form_title').css('display', 'block') ;$('#form_status').css('display', 'block');
