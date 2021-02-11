import fs from "fs";
import { ipcMain } from "electron";
import { ClientsFactory } from "../lib/ClientsFactory";

export default () => {
  ipcMain.handle("test-connection", async (event, conn) => {
    const params = {
      host: conn.host,
      port: +conn.port,
      user: conn.user,
      password: conn.password,
    };

    if (conn.ssl) {
      params.ssl = {
        key: conn.key ? fs.readFileSync(conn.key) : null,
        cert: conn.cert ? fs.readFileSync(conn.cert) : null,
        ca: conn.ca ? fs.readFileSync(conn.ca) : null,
        ciphers: conn.ciphers,
      };
    }

    const connection = ClientsFactory.getConnection({
      client: conn.client,
      params,
    });

    await connection.connect();

    try {
      await connection.raw("select 1+1");

      return { status: "success" };
    } catch (e) {
      return { message: e, status: "error" };
    } finally {
      connection.disconnect();
    }
  });
};
