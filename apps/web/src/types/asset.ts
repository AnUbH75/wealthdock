/**
 * Unified data model for all wealthdock assets.
 */
export type AssetType = 'bank' | 'cash' | 'real_estate' | 'vehicle' | 'investment';

export interface Asset {
  id: string;
  name: string;
  type: AssetType;
  value: number;
  currency: string;
  lastUpdated: string;
  details?: {
    institution?: string;
    accountNumber?: string;
    location?: string;
    modelYear?: number;
    symbol?: string;
    shares?: number;
  };
}
