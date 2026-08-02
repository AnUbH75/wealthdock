import { Asset } from '../types/asset';

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
    },
  },
  {
    id: '5',
    name: 'Model Y',
    type: 'vehicle',
    value: 42000.0,
    currency: 'USD',
    lastUpdated: '2026-08-01T08:00:00Z',
    details: {
      modelYear: 2023,
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
