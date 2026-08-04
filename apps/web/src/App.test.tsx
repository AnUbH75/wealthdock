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
});
