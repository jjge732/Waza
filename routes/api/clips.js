const router = require('express').Router();
const clipsController = require('../../controller/clipsController');

router.route('/')
    .get(clipsController.findAll)

module.exports = router;