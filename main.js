const { app, BrowserWindow } = require('electron');
const { platform } = require('os');
const path = require('path')
// const isDev = process.env.NODE_ENV !== 'production'

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    title: 'brawlstars',
    width: 700,   
    height: 600,
  });

    /*Open devtools if in dev enviroment 
    if (isDev){
        mainWindow.webContents.openDevTools()
    }*/

  mainWindow.loadURL(`file://${path.join(__dirname, './renderer/index.html')}`);

  mainWindow.setResizable(false);


}

app.whenReady().then(() => {
    createMainWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
          createWindow()
        }
      })
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') { 
        app.quit()
      }
    })