const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url  = require('url');

let mainWindow;

app.on('ready', onAppReady);
app.on('window-all-closed', onAppAllWindowsClosed);

function onAppAllWindowsClosed()
{
    app.quit();
}

function onAppReady()
{
    createMainWindow();
    console.log("Main window created");
}

function createMainWindow(){
    let indexHtmlPath = path.join(__dirname, 'index.html');
    console.log('indexHtmlPath: '+indexHtmlPath);
    let indexHtmlUrl = url.format({
        pathname: indexHtmlPath,
        protocol: 'file:',
        slashes:true
    });
    console.log('indexHtmlUrl: '+indexHtmlUrl);

    mainWindow = new BrowserWindow({width:800, height:400});
    mainWindow.loadURL(indexHtmlUrl);

    mainWindow.on('closed', onWindowClosed);
}

function onWindowClosed()
{
    mainWindow = null;
}