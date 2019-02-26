const router = require('express').Router();
const userRoutes = require('./users');
const clipRoutes = require('./clips');

router.use('/users', userRoutes);
router.use('/clips', clipRoutes);

module.exports = router;