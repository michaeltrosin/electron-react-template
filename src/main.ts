import {app, BrowserWindow} from 'electron';
import isDev from 'electron-is-dev'; // New Import

const createWindow = (): void => {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        }
    });
    win.loadURL(
        isDev
            ? 'http://localhost:9000'
            : `file://${__dirname}/index.html`,
    );
}

app.on('ready', createWindow);
