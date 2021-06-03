const Sequelize = require('sequelize');
// import Config from "./../config";

const sequelize = new Sequelize(Config.db.dbName, Config.db.user, Config.db.password, {
  dialect: 'mysql',
  host: "localhost",
  port: 3306,
})

sequelize.sync({ force: true }).then(() => {
  console.log('连接成功');
})

export default sequelize