import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders ThemeChanger component', () => {
    render(<App />);
    const themeChangerElement = screen.getByText(/Switch to Dark Theme/i);
    expect(themeChangerElement).toBeInTheDocument();
});

test('renders PomodoroClock component', () => {
    render(<App />);
    const pomodoroClockElement = screen.getByText(/Pomodoro Clock/i);
    expect(pomodoroClockElement).toBeInTheDocument();
});

test('renders ClockSettings component', () => {
    render(<App />);
    const clockSettingsElement = screen.getByText(/Settings/i);
    expect(clockSettingsElement).toBeInTheDocument();
});