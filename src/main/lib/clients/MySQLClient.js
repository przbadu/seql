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

  async getStructure() {
    const databases = await this.raw("SHOW DATABASES");
    const functions = await this.raw("SHOW FUNCTION STATUS");
    const procedures = await this.raw("SHOW PROCEDURE STATUS");
    const schemas = await this.raw(
      "SELECT *, EVENT_SCHEMA AS `Db`, EVENT_NAME AS `Name` FROM information_schema.`EVENTS`"
    );

    return {
      databases,
      functions,
      procedures,
      schemas,
    };
  }

  /**
   * Disconnect mysql database connection
   * @memberOf MySQLClient
   */
  async disconnect() {
    this._connection.end();
  }

  async raw(sql) {
    return new Promise((resolve, reject) => {
      try {
        return this._connection.query(sql, (error, result, rows) => {
          if (error) reject(error);
          return resolve({ result, rows });
        });
      } catch (e) {
        reject(e);
      }
    });
  }
}
