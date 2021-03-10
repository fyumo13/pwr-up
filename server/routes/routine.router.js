const router = require('express').Router();

const RoutineCtrl = require('../controllers/routine.controller');
const { protect } = require('../middlewares/auth');

router.post('/create', protect, RoutineCtrl.createRoutine);
router.get('/', protect, RoutineCtrl.displayRoutines);
router.get('/:id', protect, RoutineCtrl.displayRoutine);
router.put('/update/:id', protect, RoutineCtrl.updateRoutine);
router.delete('/delete/:id', protect, RoutineCtrl.deleteRoutine);

module.exports = router;