import React, { useState } from 'react';

const ClockSettings = ({ onSettingsChange }: { onSettingsChange: (time: number) => void }) => {
    const [workTime, setWorkTime] = useState(25);
    const [breakTime, setBreakTime] = useState(5);

    const handleSave = () => {
        onSettingsChange(workTime * 60);
    };

    return (
        <div>
            <h2>Settings</h2>
            <label>
                Work Time (minutes):
                <input
                    type="number"
                    value={workTime}
                    onChange={(e) => setWorkTime(Number(e.target.value))}
                />
            </label>
            <label>
                Break Time (minutes):
                <input
                    type="number"
                    value={breakTime}
                    onChange={(e) => setBreakTime(Number(e.target.value))}
                />
            </label>
            <button onClick={handleSave}>Save</button>
        </div>
    );
};

export default ClockSettings;