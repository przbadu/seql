import mysql from "mysql";

export class MySQLClient {
  constructor(args) {
    this._params = args.params;
    this._connection = null;
    this._error = null;
  }

  connection() {
    return this._connection;
  }

  /**
   * Connect with mysql database
   * @memberOf MySQLClient
   */
  async connect() {
    if (!this._poolSize)
      this._connection = mysql.createConnection(this._params);
    else
      this._connection = mysql.createPool({
        ...this._params,
        connectionLimit: this._poolSize,
      });
  }

  /**
   * Disconnect mysql database connection
   * @memberOf MySQLClient
   */
  async disconnect() {
    this._connection.end();
  }

  async raw(sql) {
    await new Promise((resolve, reject) => {
      try {
        this._connection.query(sql, (error, result, _) => {
          if (error) reject(error);
          resolve(result);
        });
      } catch (e) {
        reject(e);
      }
    });
  }
}
