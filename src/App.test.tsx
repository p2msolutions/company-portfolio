import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the application without crashing', () => {
    render(<App />);
    expect(screen.getByRole('button', { name: /toggle theme/i })).toBeInTheDocument();
  });

  it('renders main content sections', () => {
    render(<App />);
    expect(screen.getByText('View Our Work')).toBeInTheDocument();
    expect(screen.getByText('Software,')).toBeInTheDocument();
  });

  it('has proper navigation structure', () => {
    render(<App />);
    const navLinks = screen.getAllByRole('link');
    expect(navLinks.length).toBeGreaterThan(0);
  });
});
