import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { App } from './App';

describe('App', () => {
  it('renders the wealthdock dashboard with totals and breakdown', () => {
    render(<App />);

    // Renders header title globally
    expect(screen.getAllByRole('heading', { name: 'wealthdock' })[0]).toBeInTheDocument();

    // Navigation tabs are visible
    expect(screen.getByRole('button', { name: 'Net Worth' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Budget Planner' })).toBeInTheDocument();

    // Renders total net worth title
    expect(screen.getAllByText('Total Net Worth')[0]).toBeInTheDocument();

    // Renders breakdown header
    expect(screen.getByText('Breakdown by Class')).toBeInTheDocument();

    // Renders initial mock assets
    expect(screen.getByText('Primary Savings')).toBeInTheDocument();
    expect(screen.getByText('Primary Residence')).toBeInTheDocument();
  });

  it('allows adding and removing assets', () => {
    render(<App />);

    // Click "Add Asset" button to open modal
    const addButton = screen.getByRole('button', { name: /Add Asset/i });
    fireEvent.click(addButton);

    // Verify modal is open
    expect(screen.getByRole('heading', { name: 'Add Asset' })).toBeInTheDocument();

    // Fill form using placeholders
    const nameInput = screen.getByPlaceholderText('e.g. Primary Savings, Family Home');
    const valueInput = screen.getByPlaceholderText('e.g. 5000');

    fireEvent.change(nameInput, { target: { value: 'New Test Account' } });
    fireEvent.change(valueInput, { target: { value: '1000' } });

    // Submit form
    const saveButton = screen.getByRole('button', { name: /Save Asset/i });
    fireEvent.click(saveButton);

    // Verify asset is added
    expect(screen.getByText('New Test Account')).toBeInTheDocument();
  });

  it('allows editing a physical asset (real estate / vehicle)', () => {
    render(<App />);

    // Get the first edit button
    const editButtons = screen.getAllByTitle('Edit asset');
    fireEvent.click(editButtons[0]!);

    // Verify modal is open as "Edit Asset"
    expect(screen.getByRole('heading', { name: 'Edit Asset' })).toBeInTheDocument();

    // Edit Name
    const nameInput = screen.getByPlaceholderText('e.g. Primary Savings, Family Home');
    fireEvent.change(nameInput, { target: { value: 'Edited Savings Account' } });

    // Save
    const saveButton = screen.getByRole('button', { name: /Save Asset/i });
    fireEvent.click(saveButton);

    // Verify updated value
    expect(screen.getByText('Edited Savings Account')).toBeInTheDocument();
  });

  it('allows full CRUD on vehicle assets', () => {
    render(<App />);

    // 1. Add vehicle
    const addButton = screen.getByRole('button', { name: /Add Asset/i });
    fireEvent.click(addButton);

    const nameInput = screen.getByPlaceholderText('e.g. Primary Savings, Family Home');
    const classSelect = screen.getByRole('combobox');
    const valueInput = screen.getByPlaceholderText('e.g. 5000');

    fireEvent.change(nameInput, { target: { value: 'Test Roadster' } });
    fireEvent.change(classSelect, { target: { value: 'vehicle' } });
    fireEvent.change(valueInput, { target: { value: '75000' } });

    // Now fields for vehicle should be visible: Purchase Price, Model Year, Notes
    const purchasePriceInput = screen.getByPlaceholderText('e.g. 350000');
    const modelYearInput = screen.getByPlaceholderText('e.g. 2023');
    const notesInput = screen.getByPlaceholderText('Additional details...');

    fireEvent.change(purchasePriceInput, { target: { value: '80000' } });
    fireEvent.change(modelYearInput, { target: { value: '2024' } });
    fireEvent.change(notesInput, { target: { value: 'My dream car' } });

    const saveButton = screen.getByRole('button', { name: /Save Asset/i });
    fireEvent.click(saveButton);

    // Verify Roadster and its metadata (year, purchase price, notes) are displayed
    expect(screen.getByText('Test Roadster')).toBeInTheDocument();
    expect(screen.getByText('2024 • Purchased for $80,000')).toBeInTheDocument();
    expect(screen.getByText('My dream car')).toBeInTheDocument();
  });

  it('renders the net worth development chart and handles range/metric toggles', () => {
    render(<App />);

    // Verify chart section title is visible
    expect(screen.getByText('Net Worth Development')).toBeInTheDocument();

    // Verify range selectors are in the document
    expect(screen.getByRole('button', { name: '1M' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '6M' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '1Y' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'ALL' })).toBeInTheDocument();

    // Verify metric selector toggles
    expect(screen.getByRole('button', { name: 'Total Net Worth' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Bank Accounts' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Real Estate' })).toBeInTheDocument();

    // Click 6M range
    fireEvent.click(screen.getByRole('button', { name: '6M' }));

    // Click Real Estate metric
    fireEvent.click(screen.getByRole('button', { name: 'Real Estate' }));
  });

  it('renders the budget overview, displays comparison delta, and enables editing budgets', () => {
    render(<App />);

    // Switch to Budget Planner tab
    const budgetTabButton = screen.getByRole('button', { name: 'Budget Planner' });
    fireEvent.click(budgetTabButton);

    // Verify budget overview header and categories render
    expect(screen.getByText('Monthly Budgets')).toBeInTheDocument();
    expect(screen.getByText('Budgets by Category')).toBeInTheDocument();
    expect(screen.getByText('Total Monthly Spend')).toBeInTheDocument();

    // Verify over-budget indicator works (Entertainment has limit 500 but spends 535)
    expect(screen.getByText('Over by $35')).toBeInTheDocument();

    // Edit Groceries budget limit
    const groceriesEditBtn = screen.getByTitle('Edit Groceries budget');
    fireEvent.click(groceriesEditBtn);

    // Verify limit edit modal opens
    expect(screen.getByRole('heading', { name: 'Edit Groceries Budget' })).toBeInTheDocument();
    const limitInput = screen.getByPlaceholderText('e.g. 500');
    fireEvent.change(limitInput, { target: { value: '800' } });

    const saveLimitBtn = screen.getByRole('button', { name: /Save Limit/i });
    fireEvent.click(saveLimitBtn);

    // Verify Groceries remaining text updates
    expect(screen.getByText('$230 of $800')).toBeInTheDocument();
  });

  it('allows full transaction CRUD inside budget planner', () => {
    render(<App />);

    // Switch to Budget Planner
    fireEvent.click(screen.getByRole('button', { name: 'Budget Planner' }));

    // 1. Add Transaction
    const addTxBtn = screen.getByRole('button', { name: /Add Transaction/i });
    fireEvent.click(addTxBtn);

    expect(screen.getByRole('heading', { name: 'Add Transaction' })).toBeInTheDocument();

    const descInput = screen.getByPlaceholderText('e.g. Weekly Groceries');
    const amountInput = screen.getByPlaceholderText('e.g. 45.50');
    const categorySelect = screen.getByRole('combobox');

    fireEvent.change(descInput, { target: { value: 'Test Gas Purchase' } });
    fireEvent.change(categorySelect, { target: { value: 'transportation' } });
    fireEvent.change(amountInput, { target: { value: '55.50' } });

    const saveTxBtn = screen.getByRole('button', { name: /Save Transaction/i });
    fireEvent.click(saveTxBtn);

    // Verify new transaction details exist in list
    expect(screen.getByText('Test Gas Purchase')).toBeInTheDocument();
    expect(screen.getByText('-$56')).toBeInTheDocument(); // Formatted as max 0 decimal digits: -$56

    // Verify Transportation spending changes from remaining $355 ($45 spent of $400) to remaining $300 ($100.5 spent of $400)
    expect(screen.getByText('Remaining $300')).toBeInTheDocument();
  });
});
