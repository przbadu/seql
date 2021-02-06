const { app, BrowserWindow, nativeImage } = require("electron");
const path = require("path");

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  // eslint-disable-line global-require
  app.quit();
}

const isDevelopment = process.env.NODE_ENV !== "production";
const gotTheLock = app.requestSingleInstanceLock();

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = "true";

// global reference to mainWindow (necessary to prevent window from being garbage collected)
let mainWindow;

const createWindow = async () => {
  // Create the browser window.
  const window = new BrowserWindow({
    width: 1024,
    height: 800,
    minHeight: 900,
    minWidth: 550,
    title: "SEQL Pro",
    autoHideMenuBar: true,
    icon: __dirname + "./../renderer/images/logo-102.png",
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
      enableRemoteModule: true,
      spellcheck: false,
    },
    backgroundColor: "#24292E",
  });

  // and load the index.html of the app.
  window.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  // Open the DevTools.
  window.webContents.openDevTools();

  window.on("closed", () => {
    mainWindow = null;
  });

  return window;
};

if (!gotTheLock) app.quit();
else {
  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  app.on("ready", createWindow);

  // Quit when all windows are closed, except on macOS. There, it's common
  // for applications and their menu bar to stay active until the user quits
  // explicitly with Cmd + Q.
  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
  });

  app.on("activate", () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0 || mainWindow === null) {
      createWindow();
    }
  });

  // In this file you can include the rest of your app's specific main process
  // code. You can also put them in separate files and import them here.
}
