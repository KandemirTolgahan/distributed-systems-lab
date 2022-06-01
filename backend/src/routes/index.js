const express = require('express')
const router = express.Router()

router.use(require('./todo.route'))


module.exports = router;