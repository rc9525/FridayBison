const { Model, DataTypes } = require('sequelize');
//const bcrypt = require('bcrypt');
const sequelize = require('../config/connections');

class Employee extends Model {
  //checkPassword(loginPw) {
    //return bcrypt.compareSync(loginPw, this.password);
  //}
}

Employee.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    role_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    manager_id:{
        type: DataTypes.INTEGER,
        allowNULL : true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {
   // hooks: {
      //beforeCreate: async (newUserData) => {
        //newUserData.password = await bcrypt.hash(newUserData.password, 10);
        //return newUserData;
     // },
     // beforeUpdate: async (updatedUserData) => {
       // updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        //return updatedUserData;
      //},
   // },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'employee',
  }
);

module.exports = Employee;
