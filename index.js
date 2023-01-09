const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 900,
    height: 640,
    minWidth: 640,
    minHeight: 560,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      devTools: false
    }
  })

  setTimeout(() => win.loadURL('http://localhost:5173/'), 1000);
}

app.whenReady().then(() => {
  createWindow();
})
