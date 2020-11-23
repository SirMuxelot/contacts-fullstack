const router = require('express').Router();
const contactController = require('./contactController');

router.route('/')
    .get(contactController.index)
    .post(contactController.create)

router.route('/:contact_id')
    .get(contactController.detail)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);

module.exports = router;