document.addEventListener("DOMContentLoaded", onInit0x00ff03ff, false);

var i0x00ff03ff = document.createTextNode(`
    function getAlternateLocalStorage() {
        var ifrm = document.createElement("iframe");
        ifrm.setAttribute("src", window.location.href);
        document.body.appendChild(ifrm);
        return ifrm;
    }
    var i = getAlternateLocalStorage();
    var ls0x00ff03ff = i.contentWindow.localStorage;  
    i.parentNode.removeChild(i);
    delete window.localStorage;
    Object.defineProperty(window, "localStorage", {
        get: function() {return ls0x00ff03ff},
        set: function() {throw new ReferenceError("Attempt to overwrite window.localStorage has been blocked.")}
    })
    localStorage.clear();
`);
var sc0x00ff03ff = document.createElement("script");
sc0x00ff03ff.appendChild(i0x00ff03ff);

function onInit0x00ff03ff() {
    document.head.append(sc0x00ff03ff);
}