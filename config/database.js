import { Sequelize } from "sequelize";
 
const db = new Sequelize('apinodereact', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;