import {
  mockUsageSummary,
  mockUsageData,
  mockUsageInsights,
  mockSensorData
} from '../data/mock.js';

export async function getUsageSummary() {
  return mockUsageSummary;
}

export async function getUsageData() {
  return mockUsageData;
}

export async function getUsageInsights() {
  return mockUsageInsights;
}

export async function getSensorData() {
  return mockSensorData;
}

export async function sendCommand(command, value) {
  return { command, value, timestamp: new Date().toISOString() };
}