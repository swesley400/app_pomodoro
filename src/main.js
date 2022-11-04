const {app, BrowserWindow} = require('electron')

const createWindow = ()=>{
    
    const win = new BrowserWindow({
        width: 200,
        height: 200,
        x: 1000,
        y: 12
        
        
    })

    win.loadFile('../index.html')
}

app.whenReady().then(() =>{
    
    createWindow()
})