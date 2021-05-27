const {app, BrowserWindow} = require('electron')
const path = require('path')
function createWindows() {
    const win = new BrowserWindow({
        width:1200,
        height:600,
        backgroundColor: "white",
        webPreferences:{
            nodeIntegration: false,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true
        }
    })

    win.loadFile('index.html');
}

require('electron-reload')(__dirname,{
    electron: path.join(__dirname,'node_modules','.bin','electron')
})

app.whenReady().then(createWindows)