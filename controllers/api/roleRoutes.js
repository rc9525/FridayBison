const router = require('express').Router();
const { Role } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newRole = await Role.create({
      ...req.body,
      employee_id: req.session.employee_id,
    });

    res.status(200).json(newRole);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const roletData = await Role.destroy({
      where: {
        id: req.params.id,
        employee_id: req.session.employee_id,
      },
    });

    if (!roleData) {
      res.status(404).json({ message: 'No Role found with this id!' });
      return;
    }

    res.status(200).json(roleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;