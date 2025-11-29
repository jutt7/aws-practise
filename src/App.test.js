import { render, screen } from '@testing-library/react';
import App from './App';

describe('Login page visibility', () => {
  test('shows the welcome message', () => {
    render(<App />);
    expect(
      screen.getByText(/welcome back, let's build something vivid\./i),
    ).toBeInTheDocument();
  });

  test('renders the login form fields', () => {
    render(<App />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  test('shows primary and secondary actions', () => {
    render(<App />);
    expect(screen.getByRole('button', { name: /sign in securely/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /continue with sso/i })).toBeInTheDocument();
    expect(screen.getByText(/forgot password\?/i)).toBeInTheDocument();
  });
});