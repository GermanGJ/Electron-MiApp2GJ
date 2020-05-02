const { app, BrowserWindow, Menu } = require('electron')
const menu = require('./js/menu')



function createWindow () {
  // Crea la ventana del navegador.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // y carga el  index.html de la aplicación.
  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

Menu.setApplicationMenu(menu)