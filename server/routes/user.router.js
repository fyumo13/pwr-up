const router = require('express').Router();

const UserCtrl = require('../controllers/user.controller');
const { protect } = require('../middlewares/auth');

router.post('/register', UserCtrl.register);
router.post('/login', UserCtrl.login);
router.get('/', protect, UserCtrl.displayUsers);
router.get('/current', protect, UserCtrl.displayUser);
router.put('/update', protect, UserCtrl.updateUser);
router.delete('/delete', protect, UserCtrl.deleteUser);

module.exports = router;