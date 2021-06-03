const { Model, DataTypes } = require("sequelize");
const sequelize = require("../util/db");

class UserModel extends Model {

}

UserModel.init({
  username: DataTypes.STRING
}, {
  sequelize,
  tableName: 'Users'
})

module.exports = UserModel