import React, { act } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PomodoroClock from '../components/PomodoroClock';

test('renders Pomodoro Clock', () => {
    render(<PomodoroClock />);
    const linkElement = screen.getByText(/Pomodoro Clock/i);
    expect(linkElement).toBeInTheDocument();
});

test('starts and pauses the clock', () => {
    render(<PomodoroClock />);
    const startButton = screen.getByText(/Start/i);
    act(() => {
        fireEvent.click(startButton);
    });
    expect(screen.getByText(/Pause/i)).toBeInTheDocument();
    act(() => {
        fireEvent.click(screen.getByText(/Pause/i));
    });
    expect(screen.getByText(/Start/i)).toBeInTheDocument();
});

test('resets the clock', () => {
    render(<PomodoroClock />);
    act(() => {
        fireEvent.click(screen.getByText(/Start/i));
    });
    act(() => {
        fireEvent.click(screen.getByText(/Reset/i));
    });
    expect(screen.getByText(/25:00/i)).toBeInTheDocument();
});