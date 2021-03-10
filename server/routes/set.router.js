const router = require('express').Router();

const SetCtrl = require('../controllers/set.controller');
const { protect } = require('../middlewares/auth');

router.post('/create/:id', protect, SetCtrl.createSet);
router.get('/:id', protect, SetCtrl.displaySet);
router.put('/update/:id', protect, SetCtrl.updateSet);
router.delete('/delete/:id', protect, SetCtrl.deleteSet);

module.exports = router;