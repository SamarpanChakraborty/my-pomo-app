import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ThemeChanger from '../components/ThemeChanger';

test('toggles theme', () => {
    render(<ThemeChanger />);
    const button = screen.getByText(/Switch to Dark Theme/i);
    fireEvent.click(button);
    expect(screen.getByText(/Switch to Light Theme/i)).toBeInTheDocument();
});