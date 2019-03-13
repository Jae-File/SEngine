var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

var x = document.getElementById("windowInfo");
x.innerHTML = "<b>inner window width: </b>" + w + "<br><b>inner window height: </b>" + h;

document.getElementById("screenInfo").innerHTML = "<b>screen width: </b>" + screen.width + "<br><b>screen height: </b>" + screen.height + "<br><b>available screen width: </b>" + screen.availWidth + "<br><b>available screen height: </b>" + screen.availHeight + "<br><b>screen color depth: <b>" + screen.colorDepth + "<br><b>screen pixel depth: <b>" + screen.pixelDepth;

document.getElementById("locationInfo").innerHTML = "<b>page location: </b>" + window.location.href + "<br><b>page hostname: </b>" + window.location.hostname + "<br><b>page path: </b>" + window.location.pathname + "<br><b>page protocol: </b>" + window.location.protocol + "<br><b>port number: <b>" + window.location.port;

document.getElementById("navigatorInfo").innerHTML = "<b>cookie enabled: </b>" + navigator.cookieEnabled + "<br><b>application name: </b>" + navigator.appName + "<br><b>application code name: </b>" + navigator.appCodeName + "<br><b>browser engine: </b>" + navigator.product + "<br><b>browser version: <b>" + navigator.appVersion + "<br><b>browser agent: <b>" + navigator.userAgent;

