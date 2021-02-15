import { app, BrowserWindow, nativeTheme } from "electron";
// import crypto from "crypto";
// import keytar from "keytar";
import Store from "electron-store";

import ipcHandlers from "./ipc-handlers";

Store.initRenderer();

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  // eslint-disable-line global-require
  app.quit();
}

const gotTheLock = app.requestSingleInstanceLock();

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = "true";

// global reference to mainWindow (necessary to prevent window from being garbage collected)
let mainWindow;

const createWindow = async () => {
  // Create the browser window.
  const window = new BrowserWindow({
    width: 900,
    height: 900,
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
  });

  nativeTheme.themeSource = "light";

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
  // Initialize Handler
  ipcHandlers();

  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  app.on("ready", async () => {
    // TODO: Fix bug (keytar with node-loader)
    // let key = await keytar.getPassword("seql-pro", "user");

    // if (!key) {
    //   key = crypto.randomBytes(16).toString("hex");
    //   keytar.setPassword("seql-pro", "user", key);
    // }

    mainWindow = createWindow();
  });

  app.on("activate", () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0 || mainWindow === null) {
      mainWindow = createWindow();
    }
  });

  // Quit when all windows are closed, except on macOS. There, it's common
  // for applications and their menu bar to stay active until the user quits
  // explicitly with Cmd + Q.
  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
  });
}
