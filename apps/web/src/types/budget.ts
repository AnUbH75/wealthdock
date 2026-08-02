export type ExpenseCategory =
  | 'housing'
  | 'utilities'
  | 'groceries'
  | 'transportation'
  | 'entertainment'
  | 'insurance'
  | 'miscellaneous';

export interface CategoryBudget {
  category: ExpenseCategory;
  limit: number;
}

export interface Transaction {
  id: string;
  date: string; // ISO date string (YYYY-MM-DD)
  amount: number; // positive value representing expense
  category: ExpenseCategory;
  description: string;
}
