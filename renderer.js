// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const regedit = require('regedit')

window.go = function () {
    regedit.list('HKCU\\Software\\Microsoft\\Windows\\DWM', function(err, result) {
        console.log('AccentColor', AccentColor, toHex(AccentColor))
        console.log('AccentColor', ColorizationColor, toHex(ColorizationColor))
    
        document.getElementById('AccentColor').style.backgroundColor = toHex(AccentColor)
        document.getElementById('ColorizationColor').style.backgroundColor = toHex(ColorizationColor)
    })
}


function toHex(int) {
    hexString = int.toString(16);
    
    if (hexString.length % 2) {
        hexString = '0' + hexString;
    }
}