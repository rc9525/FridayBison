const router = require('express').Router();
const { Employee, Department, Role } = require('../../models');

router.get('/', (req, res) => {
    // find all tags
    // be sure to include its associated Product data
    Employee.findAll(
      {
        include: {
          model: Department
        }
      }
    )
      .then(employeeData => res.json(employeeData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.post('/', async (req, res) => {

    try {
        const employeeData = await Employee.create(req.body);
    
        req.session.save(() => {
          req.session.employee_id = employeeData.id;
          req.session.logged_in = true;
    
          res.status(200).json(employeeData);
        });
      } catch (err) {
        res.status(400).json(err);
      }

 
});

router.post('/login', async (req, res) => {
  try {
    const employeeData = await Employee.findOne({ where: { email: req.body.email } });

    if (!employeeData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await employeeData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.employee_id = employeeData.id;
      req.session.logged_in = true;
      
      res.json({ employee: employeeData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
