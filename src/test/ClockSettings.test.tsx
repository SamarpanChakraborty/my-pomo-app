import React, { act } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ClockSettings from '../components/ClockSettings';

test('renders Clock Settings', () => {
    render(<ClockSettings onSettingsChange={() => { }} />);
    const linkElement = screen.getByText(/Settings/i);
    expect(linkElement).toBeInTheDocument();
});

test('changes work time', () => {
    const handleSettingsChange = jest.fn();
    render(<ClockSettings onSettingsChange={handleSettingsChange} />);
    const input = screen.getByLabelText(/Work Time/i);
    act(() => {
        fireEvent.change(input, { target: { value: 30 } });
    });
    act(() => {
        fireEvent.click(screen.getByText(/Save/i));
    });
    expect(handleSettingsChange).toHaveBeenCalledWith(30 * 60);
});

test('changes break time', () => {
    render(<ClockSettings onSettingsChange={() => { }} />);
    const input = screen.getByLabelText(/Break Time/i);
    act(() => {
        fireEvent.change(input, { target: { value: 10 } });
    });
    expect(input.value).toBe('10');
});