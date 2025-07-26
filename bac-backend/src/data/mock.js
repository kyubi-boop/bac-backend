export const mockUsageSummary = {
  total_kwh: 123.45,
  total_cost: 78.9,
  period: '2025-07-01 to 2025-07-26'
};

export const mockUsageData = [
  { timestamp: '2025-07-25T00:00:00Z', kwh: 1.2 },
  { timestamp: '2025-07-25T01:00:00Z', kwh: 1.4 },
  { timestamp: '2025-07-25T02:00:00Z', kwh: 0.9 }
];

export const mockUsageInsights = {
  peak_hour: 18,
  peak_kwh: 4.2,
  avg_daily_kwh: 12.7,
  recommendations: [
    'Shift heavy loads to off-peak hours',
    'Investigate unusually high consumption between 6–8 PM'
  ]
};

export const mockSensorData = [
  { timestamp: '2025-07-25T00:00:00Z', voltage: 228, current: 3.4, power: 776 },
  { timestamp: '2025-07-25T00:05:00Z', voltage: 229, current: 3.1, power: 710 }
];