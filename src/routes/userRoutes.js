const express = require('express');
const { registerUser, loginUser, getUserDetails, updateUser, deleteUser, verifyAadhaar } = require('../controllers/userController');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/:id', getUserDetails);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.post('/verify-aadhaar', verifyAadhaar);

module.exports = router;
