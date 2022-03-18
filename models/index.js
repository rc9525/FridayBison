const employee = require('./employee');
const department = require('./department');
const Role = require('./role')

department.hasMany(employee, {
  foreignKey: 'department_id',
  onDelete: 'CASCADE'
});

employee.belongsTo(department, {
  foreignKey: 'department_id'
});

Role.belongsTo(department, {
    foreignKey: 'department_id'
})

module.exports = { employee, department, Role };
