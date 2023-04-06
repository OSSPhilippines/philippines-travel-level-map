import React, { useState }  from 'react';
import PhilippinesMapJSX from './PhilippinesMapJSX';
import "./App.css"

const PhilippinesMap = () => {
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [menuVisible, setMenuVisible] = useState(false);

  const handleProvinceClick = (provinceName, event) => {
    setSelectedProvince(provinceName);
    setMenuPosition({ x: event.clientX, y: event.clientY });
    setMenuVisible(true);
  }



  return (
    <div>
      <PhilippinesMapJSX 
              setSelectedProvince={setSelectedProvince}
              setMenuPosition={setMenuPosition}
              setMenuVisible={setMenuVisible}/>
      {menuVisible && (
        <div className='level-menu' style={{  
            position: 'absolute',
            top: menuPosition.y,
            left: menuPosition.x}} >
          {/* Render menu options here */}
          <div>
            <div className='menu-header'>{selectedProvince}</div>
            <div className='level-5'>Lived there</div>
            <div className='level-4'>Stayed there</div>
            <div className='level-3'>Visited there</div>
            <div className='level-2'>Alighted there</div>
            <div className='level-1'>Passed there</div>
            <div className='level-0'>Never been there</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhilippinesMap;