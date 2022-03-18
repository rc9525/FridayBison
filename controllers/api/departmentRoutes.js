const router = require('express').Router();
const { Department } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newDepartment = await Department.create({
      ...req.body,
      employee_id: req.session.employee_id,
    });

    res.status(200).json(newDepartment);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const departmentData = await Department.destroy({
      where: {
        id: req.params.id,
        employee_id: req.session.employee_id,
      },
    });

    if (!departmentData) {
      res.status(404).json({ message: 'No department found with this id!' });
      return;
    }

    res.status(200).json(departmentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;