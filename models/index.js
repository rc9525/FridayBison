const Employee = require('./employee');
const Department = require('./department');
const Role = require('./role')

Department.hasMany(Employee);

Employee.belongsTo(Department);

Role.belongsTo(Department, {
    foreignKey: 'department_id'
})

module.exports = { Employee, Department, Role };
