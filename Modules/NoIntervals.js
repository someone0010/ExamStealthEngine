document.addEventListener("DOMContentLoaded", onInit0x00ff02ff, false);
var i0x00ff02ff = document.createTextNode(`
    for (var i = 0; i < 99999; i++) {
        clearInterval(i);
    }
    const setInterv = setInterval;
    setInterval = function setInterval(a,b) {void("[native code]"); return Math.floor(Math.random() * 65535);};
    setInterv(function () {
        window.onblur = null;
        window.onfocus = null;
    },100);
`);
var sc0x00ff02ff = document.createElement("script");
sc0x00ff02ff.appendChild(i0x00ff02ff);

function onInit0x00ff02ff() {
    document.body.appendChild(sc0x00ff02ff);
}