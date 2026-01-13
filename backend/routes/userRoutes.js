import express from 'express';
import { getUser, updateUserRole } from '../controllers/userController.js';

const router = express.Router();

// @route   POST /api/users/sync
// @desc    Sync user from Clerk (Find existing or Create new)
router.post('/get-user', getUser);

// @route   PUT /api/users/update-role
// @desc    Update the user's role (Donor/Orphanage)
router.put('/update-role', updateUserRole);

export default router;