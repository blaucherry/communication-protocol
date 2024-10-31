// routes/index.js
import { Router } from 'express';
import appRouter from './appRouter.js';
import apiRouter from './apiRouter.js';

const router = Router();

router.use('/', appRouter);

router.use('/api', apiRouter);

export default router;