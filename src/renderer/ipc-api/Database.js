import { ipcRenderer } from "electron";

export default class {
  static createDatabase(params) {
    return ipcRenderer.invoke("create-database", params);
  }

  static updateDatabase(params) {
    return ipcRenderer.invoke("update-database", params);
  }

  static getDatabaseCollation(params) {
    return ipcRenderer.invoke("get-database-collation", params);
  }

  static getStructure(params) {
    return ipcRenderer.invoke("get-structure", params);
  }

  static deleteDatabase(params) {
    return ipcRenderer.invoke("delete-database", params);
  }
}
