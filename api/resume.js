import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import resumeRoutes from '../server/backend/routes/resumeRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Use resume routes
app.use('/', resumeRoutes);

export default app;
