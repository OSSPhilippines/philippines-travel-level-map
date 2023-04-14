import React, { useState } from 'react';
import PhilippinesMapJSX from '../PhilippinesMapJSX';
import ".././App.css";

const PhilippinesMap = () => {
  const [provinceLevels] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedProvinceLayer, setSelectedProvinceLayer] = useState(null);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [menuVisible, setMenuVisible] = useState(false);
  const [totalLevel, setTotalLevel] = useState(0);

  const searchUrl = 'http://www.google.com/search?q="' + selectedProvince + ', Philippines"';

  const menuOptions = [
    { label: 'Lived there', level: 5, fill: '#e84c3d' },
    { label: 'Stayed there', level: 4, fill: '#d58337' },
    { label: 'Visited there', level: 3, fill: '#f3c218' },
    { label: 'Alighted there', level: 2, fill: '#30cc70' },
    { label: 'Passed there', level: 1, fill: '#3598db' },
    { label: 'Never been there', level: 0, fill: 'white' },
  ];

  const handleLevelClick = (selectedProvince, selectedProvinceLayer, event) => {
    const newLevel = parseInt(event.target.getAttribute('level'));
    const provinceIndex = provinceLevels
      .findIndex((province) => province.id === selectedProvince);
    if (provinceIndex !== -1) {
      provinceLevels[provinceIndex].level = newLevel;
    } else {
      provinceLevels.push({ id: selectedProvince, level: newLevel });
    }

    const fill = menuOptions.find((option) => option.level === newLevel)?.fill || 'white';
    selectedProvinceLayer.style.fill = fill;

    setTotalLevel(provinceLevels.reduce((a, v) => a + v.level, 0));
    setMenuVisible(false);
  };

  return (
    <div>
      <PhilippinesMapJSX
        setSelectedProvince={setSelectedProvince}
        setMenuPosition={setMenuPosition}
        setMenuVisible={setMenuVisible}
        setSelectedProvinceLayer={setSelectedProvinceLayer}
        totalLevel={totalLevel}
      />
      {menuVisible && (
        <div
          className='level-menu'
          style={{
            position: 'absolute',
            top: menuPosition.y,
            left: menuPosition.x,
          }} >
          <div>
            <div className='menu-header' onClick={() => window.open(searchUrl)}>{selectedProvince} ↗ </div>
            {menuOptions.map(({ label, level }) => (
              <div key={level}
                level={level}
                className={`level-${level}`}
                onClick={(event) => handleLevelClick(selectedProvince, selectedProvinceLayer, event)}>
                {label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PhilippinesMap;