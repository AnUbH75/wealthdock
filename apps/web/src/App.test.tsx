import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { App } from './App';

describe('App', () => {
  it('renders the wealthdock dashboard with totals and breakdown', () => {
    render(<App />);

    // Renders title
    expect(screen.getByRole('heading', { name: 'wealthdock' })).toBeInTheDocument();

    // Renders total net worth title
    expect(screen.getByText('Total Net Worth')).toBeInTheDocument();

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
});
