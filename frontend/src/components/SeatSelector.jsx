import React, { useState } from 'react';

/*
  Simple seat selector:
  - rows x cols grid
  - reserved seats passed via props
  - returns selected seats to parent via onChange(selectedSeats)
*/

export default function SeatSelector({ rows=6, cols=8, reserved=[], onChange }) {
  const [selected, setSelected] = useState([]);

  const toggleSeat = (r,c) => {
    const id = `${r}-${c}`;
    if (reserved.includes(id)) return; // cannot select reserved
    const already = selected.includes(id);
    const next = already ? selected.filter(x=>x!==id) : [...selected, id];
    setSelected(next);
    // Notify parent component of the change
    onChange?.(next); 
  };

  const renderSeat = (r,c) => {
    const id = `${r}-${c}`;
    const isReserved = reserved.includes(id);
    const isSelected = selected.includes(id);
    const cls = isReserved ? 'seat reserved' : isSelected ? 'seat selected' : 'seat';
    
    // Seat label: e.g., A1, B5
    const label = `${String.fromCharCode(65+r)}${c+1}`;

    return (
      <div 
        key={id} 
        className={cls} 
        onClick={() => toggleSeat(r,c)}
        title={isReserved ? 'Reserved' : isSelected ? 'Selected' : 'Available'}
      >
        {label}
      </div>
    );
  };

  return (
    <div className="seat-selector-area">
        <div className="screen-indicator">SCREEN</div>

        <div className="seat-grid">
            {/* Render Seat Rows */}
            {Array.from({length: rows}).map((_,r) => (
                <div key={r} className="seat-row">
                    {Array.from({length: cols}).map((_,c) => renderSeat(r,c))}
                </div>
            ))}
        </div>

        {/* Legend for clarity */}
        <div className="legend">
            <div className="legend-item">
                <span className="legend-color available"></span>
                Available
            </div>
            <div className="legend-item">
                <span className="legend-color selected"></span>
                Selected
            </div>
            <div className="legend-item">
                <span className="legend-color reserved"></span>
                Reserved
            </div>
        </div>
    </div>
  );
}
