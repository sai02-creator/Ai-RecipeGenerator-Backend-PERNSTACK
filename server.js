import dotenv from 'dotenv';


dotenv.config();

import express from 'express';
import cors from 'cors';

// Import routes
import authroutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import pantryRoutes from './routes/pantry.js';
import recipeRoutes from './routes/recipes.js';
import mealPlanRoutes from './routes/mealPlans.js';
import shoppingListRoutes from './routes/shoppingList.js';


const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Test route
app.get('/', (req, res) => {
    res.json({message: 'AI Recipe Generator API'});
});

// API routes
app.use('/api/auth', authroutes);
app.use('/api/users', userRoutes);


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});