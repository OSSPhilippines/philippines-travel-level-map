import React, { useState }  from 'react';
import PhilippinesMapJSX from './PhilippinesMapJSX';
import "./App.css"

const PhilippinesMap = () => {
  const [provinceLevels, setProvinceLevels] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedProvinceLayer, setSelectedProvinceLayer] = useState(null);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [menuVisible, setMenuVisible] = useState(false);

 /* const handleProvinceClick = (provinceName, event) => {
    setSelectedProvince(provinceName);
    setSelectedProvinceLayer(event.target);
    setMenuPosition({ x: event.clientX, y: event.clientY });
    setMenuVisible(true);
  }*/

  const handleLevelClick = (selectedProvinceLayer, event) => {
    /*setProvinceLevels(prevLevels => {
        const updatedLevels = [...prevLevels];
        const provinceIndex = updatedLevels.findIndex(province => province.id === provinceName);
        if (provinceIndex !== -1) {
            updatedLevels[provinceIndex].level = newLevel;
        } else {
            updatedLevels.push({ id: provinceName, level: newLevel})
        }
        return updatedLevels
    })*/
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
    
    setMenuVisible(false);
  }



  return (
    <div>
      <PhilippinesMapJSX 
              setSelectedProvince={setSelectedProvince}
              setMenuPosition={setMenuPosition}
              setMenuVisible={setMenuVisible}
              setSelectedProvinceLayer={setSelectedProvinceLayer}/>
      {menuVisible && (
        <div className='level-menu' style={{  
            position: 'absolute',
            top: menuPosition.y,
            left: menuPosition.x}} >
          {/* Render menu options here */}
          <div>
            <div className='menu-header'>{selectedProvince}</div>
            <div level='5' className='level-5' onClick={(event) => handleLevelClick(selectedProvinceLayer, event)}>Lived there</div>
            <div level='4' className='level-4' onClick={(event) => handleLevelClick(selectedProvinceLayer, event)}>Stayed there</div>
            <div level='3' className='level-3' onClick={(event) => handleLevelClick(selectedProvinceLayer, event)}>Visited there</div>
            <div level='2' className='level-2' onClick={(event) => handleLevelClick(selectedProvinceLayer, event)}>Alighted there</div>
            <div level='1' className='level-1' onClick={(event) => handleLevelClick(selectedProvinceLayer, event)}>Passed there</div>
            <div level='0' className='level-0' onClick={(event) => handleLevelClick(selectedProvinceLayer, event)}>Never been there</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhilippinesMap;