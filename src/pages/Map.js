import React, { useState }  from 'react';
import PhilippinesMapJSX from '../PhilippinesMapJSX';
import ".././App.css"

const PhilippinesMap = () => {
  const [provinceLevels] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedProvinceLayer, setSelectedProvinceLayer] = useState(null);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [menuVisible, setMenuVisible] = useState(false);
  const [totalLevel, setTotalLevel] = useState(0);

  const searchUrl = 'http://www.google.com/search?q="' + selectedProvince + ', Philippines"'

  const handleLevelClick = (selectedProvince, selectedProvinceLayer, event) => {
    const newLevel = parseInt(event.target.getAttribute("level"));

    const provinceIndex = provinceLevels.findIndex(province => province.id === selectedProvince);
        if (provinceIndex !== -1) {
            provinceLevels[provinceIndex].level = newLevel;
        } else {
            provinceLevels.push({ id: selectedProvince, level: newLevel})
        }

    if (event.target.getAttribute("level") === '5' ) {
        selectedProvinceLayer.style.fill = "#e84c3d";
    } else if (event.target.getAttribute("level") === '4' ) {
        selectedProvinceLayer.style.fill = "#d58337";
    } else if (event.target.getAttribute("level") === '3' ) {
        selectedProvinceLayer.style.fill = "#f3c218";
    }else if (event.target.getAttribute("level") === '2' ) { 
        selectedProvinceLayer.style.fill = "#30cc70";
    }else if (event.target.getAttribute("level") === '1' ) {
        selectedProvinceLayer.style.fill = "#3598db";
    } else {
        selectedProvinceLayer.style.fill = "white";

    }
    
    setTotalLevel(provinceLevels.reduce((a, v) => a = a + v.level, 0));
    
    setMenuVisible(false);
  }



  return (
    <div>
      <PhilippinesMapJSX
              setSelectedProvince={setSelectedProvince}
              setMenuPosition={setMenuPosition}
              setMenuVisible={setMenuVisible}
              setSelectedProvinceLayer={setSelectedProvinceLayer}
              totalLevel={totalLevel}/>
      {menuVisible && (
        <div className='level-menu' style={{  
            position: 'absolute',
            top: menuPosition.y,
            left: menuPosition.x}} >
          {/* Render menu options here */}
          <div>
            <div className='menu-header' onClick={() => window.open(searchUrl)}>{selectedProvince} ↗ </div>
            <div level='5' className='level-5' onClick={(event) => handleLevelClick(selectedProvince, selectedProvinceLayer, event)}>Lived there</div>
            <div level='4' className='level-4' onClick={(event) => handleLevelClick(selectedProvince, selectedProvinceLayer, event)}>Stayed there</div>
            <div level='3' className='level-3' onClick={(event) => handleLevelClick(selectedProvince, selectedProvinceLayer, event)}>Visited there</div>
            <div level='2' className='level-2' onClick={(event) => handleLevelClick(selectedProvince, selectedProvinceLayer, event)}>Alighted there</div>
            <div level='1' className='level-1' onClick={(event) => handleLevelClick(selectedProvince, selectedProvinceLayer, event)}>Passed there</div>
            <div level='0' className='level-0' onClick={(event) => handleLevelClick(selectedProvince, selectedProvinceLayer, event)}>Never been there</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhilippinesMap;