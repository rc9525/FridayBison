const sequelize = require('../config/connection');
const { User, Project } = require('../models');

const employeeData = require('./employeeData.json');
const departmentData = require('./departmetData.json');
const roleData = require('./roleData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(employeeData, {
    individualHooks: true,
    returning: true,
  });

  for (const employee of employeeData) {
    await employee.create({
      ...employee,
      employee_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();