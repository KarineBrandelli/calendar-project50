const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 400,
    height: 400,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
    }
  })

  win.loadURL('http://localhost:5173/');
}

app.whenReady().then(() => {
  createWindow();
})