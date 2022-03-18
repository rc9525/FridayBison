const sequelize = require('../config/connections');
const { Employee, Department, Role } = require('../models');

const employeeData = require('./employeeData.json');
const departmentData = require('./departmentData.json');
//const roleData = require('./roleData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  //const employee = await Employee.bulkCreate(employeeData, {
    //individualHooks: true,
    //returning: true,
  //});

  //for (const employee of employeeData) {
    //await Employee.create({
      //...employee,
      //employee_id: users[Math.floor(Math.random() * employee.length)].id,
    //});
 // }

  //process.exit(0);
};

seedDatabase();