import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the application without crashing', () => {
    const { getByRole } = render(<App />);
    expect(getByRole('button', { name: /toggle theme/i })).toBeInTheDocument();
  });

  it('renders main content sections', () => {
    const { getByText } = render(<App />);
    expect(getByText('View Our Work')).toBeInTheDocument();
    expect(getByText('Software,')).toBeInTheDocument();
  });

  it('has proper navigation structure', () => {
    const { getAllByRole } = render(<App />);
    const navLinks = getAllByRole('link');
    expect(navLinks.length).toBeGreaterThan(0);
  });
});
