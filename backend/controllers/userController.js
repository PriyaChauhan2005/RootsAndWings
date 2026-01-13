import User from "../models/user.js";
import { createClerkClient } from '@clerk/clerk-sdk-node';
import dotenv from 'dotenv';

dotenv.config();

const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });

export const getUser = async (req, res) => {
    const { clerkId, email, name, imageUrl } = req.body

    try {
        let user = await User.findOne({ clerkId });

        if (user) {
            // User exists - return them (so frontend knows their role)
            return res.status(200).json(user);
        }

        // 2. User doesn't exist - Create new one
        user = new User({
            clerkId,
            email,
            name,
            imageUrl,
            role: null // Role is null until they select it
        });

        await user.save();
        res.status(201).json(user);
    } catch (error) {
        console.error('Error syncing user:', error);
        res.status(500).json({ message: 'Server Error' });
    }
}

export const updateUserRole = async (req, res) => {
    const { clerkId, role } = req.body;
  
    try {
      const user = await User.findOneAndUpdate(
        { clerkId }, 
        { role }, 
        { new: true } // Returns the updated document
      );
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      await clerkClient.users.updateUserMetadata(clerkId, {
        publicMetadata: {
            role: role
        }
      });
  
      res.json(user);
    } catch (error) {
      console.error('Error updating role:', error);
      res.status(500).json({ message: 'Server Error' });
    }
  };