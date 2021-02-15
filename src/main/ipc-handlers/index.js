import application from "./application";
import connection from "./connection";
import database from "./database";

const connections = {};
export default () => {
  application();
  connection(connections);
  database(connections);
};
