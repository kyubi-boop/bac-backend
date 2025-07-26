import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import routes from './routes.js';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

app.get('/health', (_req, res) => res.json({ status: 'ok' }));

app.use('/api', routes);

// handle 404s
app.use(notFoundHandler);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on :${PORT}`);
});