const { app, BrowserWindow } = require('electron');

createWindow = () => {
    win = new BrowserWindow();
    win.loadFile('./renderer/index.html');
    win.on('closed', () => { win = null; app.quit(); });
};
app.on('ready', createWindow);
