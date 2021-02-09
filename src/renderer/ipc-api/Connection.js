import { ipcRenderer } from "electron";

export default class {
  static async testConnection(params) {
    return ipcRenderer.invoke("test-connection", params);
  }
}
