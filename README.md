# RootsAndWings 🌿🕊️

> **Bridging the gap between environmental sustainability and social welfare through technology.**

RootsAndWings is a full-stack "Smart Adoption" platform that connects donors with orphanages. It allows individuals to adopt trees planted at orphanages and track their growth via a "Digital Twin," fostering a deeper connection between the donor, the environment, and the children they support.

## 🚀 Key Features

### For Donors (The "Roots" of Support)
- **Smart Adoption System**: Browse a gallery of real trees available for adoption at partner orphanages.
- **Digital Twin Technology**: Watch your adopted tree grow virtually! Our system creates a digital counterpart that mirrors the real tree's life cycle (Sprout → Sapling → Tree → Mature).
- **Interactive Garden Dashboard**: Track the health, growth level, and history of all your adopted plants in one place.
- **Real-Time Updates**: Receive photo updates and care logs (Watering, Pruning, Fertilizing) directly from the orphanage staff.
- **Gamified Experience**: Earn "Levels" for your tree as it grows in the real world.

### For Orphanages (The "Wings" of Care)
- **Inventory Management**: Easily add new saplings to the system with details like species, price, and initial photos.
- **Care Logging**: Staff can log daily care activities (Watering, Sunshine, Pruning) with a single click.
- **Growth Tracking**: Update the growth stage of trees, which automatically syncs with the donor's digital twin.
- **Direct Communication**: Send personalized messages and photo updates to donors, building long-term engagement.

## 🛠️ Tech Stack

### Frontend
- **Framework**: [React](https://react.dev/) (Vite)
- **Styling**: [TailwindCSS](https://tailwindcss.com/) for a modern, responsive design.
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for fluid, organic interactions.
- **Icons**: [Lucide React](https://lucide.dev/) for clean visual assets.
- **State Management**: React Hooks & Context API.

### Backend
- **Runtime**: [Node.js](https://nodejs.org/) & [Express.js](https://expressjs.com/).
- **Database**: [MongoDB](https://www.mongodb.com/) (Mongoose ODM) for flexible schema modeling.
- **Authentication**: [Clerk](https://clerk.com/) for secure, seamless user management.
- **API**: RESTful architecture.

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/roots-and-wings.git
   cd roots-and-wings
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   # Create a .env file with your MongoDB URI and Clerk keys
   npm start
   ```

3. **Setup Frontend**
   ```bash
   cd frontend
   npm install
   # Create a .env.local file with your Clerk Publishable Key
   npm run dev
   ```

## 🌟 Why This Project?

This project demonstrates a complex **many-to-many relationship** management (Users ↔ Plants ↔ Orphanages) wrapped in a user-friendly interface. It tackles real-world synchronization challenges between physical assets (real trees) and digital states (app dashboard), solving for transparency in charitable donations.
