// src/api/user.js

// Access the base URL (http://localhost:5000)
const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const updateUserRole = async (clerkId, role) => {
  try {
    // Construct the full URL: http://localhost:5000/api/users/update-role
    const data = {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify({ 
          clerkId, 
          role 
        }),
      };
  
      // 2. Pass 'data' as the second argument
      const response = await fetch(`${BASE_URL}/api/users/update-role`, data);

    if (!response.ok) {
      throw new Error('Failed to update role');
    }

    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};