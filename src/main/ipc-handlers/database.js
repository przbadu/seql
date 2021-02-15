import { ipcMain } from "electron";

export default (connections) => {
  ipcMain.handle("create-database", async (event, params) => {
    try {
      const query = `CREATE DATABASE \`${params.name}\` COLLATE ${params.collation}`;
      await connections[params.uid].raw(query);

      return { status: "success" };
    } catch (err) {
      return { status: "error", response: err.toString() };
    }
  });

  ipcMain.handle("get-structure", async (event, params) => {
    try {
      console.log(connections);
      const structure = await connections[params.uid].getStructure(params);

      return { status: "success", response: structure };
    } catch (err) {
      return { status: "error", response: err.toString() };
    }
  });
};
