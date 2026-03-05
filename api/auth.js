import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import authRoutes from '../server/backend/routes/authRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.json());

// Use auth routes
app.use('/', authRoutes);

export default app;
