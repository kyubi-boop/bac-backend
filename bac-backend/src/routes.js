import { Router } from 'express';
import {
  getUsageSummary,
  getUsageData,
  getUsageInsights,
  getSensorData,
  sendCommand
} from './services/usageService.js';

const router = Router();

router.get('/usage/summary', async (req, res, next) => {
  try {
    const data = await getUsageSummary();
    res.json(data);
  } catch (e) {
    next(e);
  }
});

router.get('/usage/data', async (req, res, next) => {
  try {
    const data = await getUsageData();
    res.json(data);
  } catch (e) {
    next(e);
  }
});

router.get('/usage/insights', async (req, res, next) => {
  try {
    const data = await getUsageInsights();
    res.json(data);
  } catch (e) {
    next(e);
  }
});

router.get('/sensor-data', async (req, res, next) => {
  try {
    const data = await getSensorData();
    res.json(data);
  } catch (e) {
    next(e);
  }
});

router.post('/command', async (req, res, next) => {
  try {
    const { command, value } = req.body;
    const result = await sendCommand(command, value);
    res.json({ success: true, result });
  } catch (e) {
    next(e);
  }
});

router.get('/data', async (_req, res) => {
  res.json({ message: 'Example data endpoint' });
});

export default router;