const router = require('express').Router();
const { Department, Employee, Role } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
      // Get all employees and JOIN with department data
      const employeeData = await Employee.findAll({
        include: [
          {
            model: Department,
            attributes: ['name'],
          },
        ],
      });

      // Serialize data so the template can read it
    const employees = employeeData.map((employee) => employee.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      employees, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/employee/:id', async (req, res) => {
  try {
    const employeeData = await Employee.findByPk(req.params.id, {
      include: [
        {
          model: Department,
          attributes: ['name'],
        },
      ],
    });

    const employee = employeeData.get({ plain: true });

    res.render('employee', {
      ...employee,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/employee', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const employeeData = await Employee.findByPk(req.session.employee_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Department }],
      });
  
      const employee = employeeData.get({ plain: true });
  
      res.render('profile', {
        ...employee,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
  
    res.render('login');
  });
  
  module.exports = router;
  