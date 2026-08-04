import { Asset, NetWorthSnapshot } from '../types/asset';

export const INITIAL_MOCK_ASSETS: Asset[] = [
  {
    id: '1',
    name: 'Primary Savings',
    type: 'bank',
    value: 12450.0,
    currency: 'USD',
    lastUpdated: '2026-08-01T12:00:00Z',
    details: {
      institution: 'Chase Bank',
      accountNumber: '•••• 4829',
    },
  },
  {
    id: '2',
    name: 'Daily Checking',
    type: 'bank',
    value: 3200.0,
    currency: 'USD',
    lastUpdated: '2026-08-02T09:15:00Z',
    details: {
      institution: 'Chase Bank',
      accountNumber: '•••• 1982',
    },
  },
  {
    id: '3',
    name: 'Cash Wallet',
    type: 'cash',
    value: 350.0,
    currency: 'USD',
    lastUpdated: '2026-08-02T10:00:00Z',
  },
  {
    id: '4',
    name: 'Primary Residence',
    type: 'real_estate',
    value: 450000.0,
    currency: 'USD',
    lastUpdated: '2026-07-28T16:00:00Z',
    details: {
      location: 'Austin, TX',
      purchasePrice: 380000.0,
      notes: 'Purchased in 2021 with 20% down payment.',
    },
  },
  {
    id: '5',
    name: 'Model Y',
    type: 'vehicle',
    value: 42000.0,
    currency: 'USD',
    lastUpdated: '2026-08-01T08:00:05Z',
    details: {
      modelYear: 2023,
      purchasePrice: 52000.0,
      notes: 'Standard Range AWD electric SUV.',
    },
  },
  {
    id: '6',
    name: 'S&P 500 Index Fund',
    type: 'investment',
    value: 85600.0,
    currency: 'USD',
    lastUpdated: '2026-08-01T20:30:00Z',
    details: {
      symbol: 'VOO',
      shares: 175.4,
    },
  },
];

export const MOCK_HISTORY: NetWorthSnapshot[] = [
  {
    date: '2025-08-01',
    total: 512000,
    breakdown: {
      bank: 8000,
      cash: 200,
      real_estate: 450000,
      vehicle: 48000,
      investment: 5800,
    },
  },
  {
    date: '2025-09-01',
    total: 523000,
    breakdown: {
      bank: 9500,
      cash: 300,
      real_estate: 450000,
      vehicle: 47500,
      investment: 15700,
    },
  },
  {
    date: '2025-10-01',
    total: 531000,
    breakdown: {
      bank: 11000,
      cash: 400,
      real_estate: 450000,
      vehicle: 47000,
      investment: 22600,
    },
  },
  {
    date: '2025-11-01',
    total: 539000,
    breakdown: {
      bank: 10500,
      cash: 150,
      real_estate: 450000,
      vehicle: 46500,
      investment: 31850,
    },
  },
  {
    date: '2025-12-01',
    total: 546000,
    breakdown: {
      bank: 12000,
      cash: 250,
      real_estate: 450000,
      vehicle: 46000,
      investment: 37750,
    },
  },
  {
    date: '2026-01-01',
    total: 554000,
    breakdown: {
      bank: 13000,
      cash: 350,
      real_estate: 450000,
      vehicle: 45500,
      investment: 45150,
    },
  },
  {
    date: '2026-02-01',
    total: 559000,
    breakdown: {
      bank: 12200,
      cash: 180,
      real_estate: 450000,
      vehicle: 45000,
      investment: 51620,
    },
  },
  {
    date: '2026-03-01',
    total: 566000,
    breakdown: {
      bank: 13500,
      cash: 220,
      real_estate: 450000,
      vehicle: 44500,
      investment: 57780,
    },
  },
  {
    date: '2026-04-01',
    total: 575000,
    breakdown: {
      bank: 14000,
      cash: 400,
      real_estate: 450000,
      vehicle: 44000,
      investment: 66600,
    },
  },
  {
    date: '2026-05-01',
    total: 580000,
    breakdown: {
      bank: 14200,
      cash: 300,
      real_estate: 450000,
      vehicle: 43500,
      investment: 72000,
    },
  },
  {
    date: '2026-06-01',
    total: 585000,
    breakdown: {
      bank: 15000,
      cash: 250,
      real_estate: 450000,
      vehicle: 43000,
      investment: 76750,
    },
  },
  {
    date: '2026-07-01',
    total: 593000,
    breakdown: {
      bank: 15300,
      cash: 300,
      real_estate: 450000,
      vehicle: 42500,
      investment: 84900,
    },
  },
  {
    date: '2026-08-01',
    total: 596600,
    breakdown: {
      bank: 15650,
      cash: 350,
      real_estate: 450000,
      vehicle: 42000,
      investment: 85600,
    },
  },
];
