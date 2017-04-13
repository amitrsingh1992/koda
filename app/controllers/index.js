var express = require('express'),
    app = express(),
    router = express.Router();


// router.use('/admin', require('./adminregister'));
// router.use('/admin', require('./signin'));
router.use('/koda', require('./general'));
// router.use('/pinup', require('./action'));
// // router.use('/admin', require('./sendInvite'));
// router.use('/user', require('./userregister'));
// router.use('/user', require('./userlogin'));
// router.use(require('./recent'));



module.exports = router;
