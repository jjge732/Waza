const router = require('express').Router();
const usersController = require('../../controller/usersController');

router.route('/')
    .get(usersController.findAll)

module.exports = router;