import React from "react";

const PhilippinesMapJSX = ({setSelectedProvince, setMenuPosition, setMenuVisible, setSelectedProvinceLayer}) => {
  const handleProvinceClick =  (event) => {
    const offsetY = event.target.getBoundingClientRect().y + 210 - window.innerHeight < 0 ? 0 : event.target.getBoundingClientRect().y + 210 - window.innerHeight;
    const offsetX = event.target.getBoundingClientRect().x + 200 - window.innerWidth < 0 ? 0 : event.target.getBoundingClientRect().x + 200 - window.innerWidth;
    setSelectedProvince(event.target.getAttribute("id"));
    setSelectedProvinceLayer(event.target);
    setMenuPosition({ x: event.target.getBoundingClientRect().x + window.pageXOffset - offsetX, y: event.target.getBoundingClientRect().y + window.pageYOffset - offsetY});
    setMenuVisible(true);

  };

  const handleOutsideClick = (event) => {
    setMenuVisible(false);
  }


  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="svg574"
      version="1.1"
      width="100vw"
      height="100vh"
      viewBox="0 0 840 1221"
      xmlSpace="preserve"
    >
      <g id="Background">
        <path
          id="rect11351"
          fill="#9dc3fb"
          fillOpacity="1"
          strokeWidth="0.75"
          d="M-1.031 1.031H841.288V1223.7849999999999H-1.031z"
          onClick={(event) => handleOutsideClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Aurora" transform="translate(427.5 375)">
        <path
          id="Aurora"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-37.5 45l60-60 15-30h-30v15l-45 45z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Bataan"  transform="translate(330 465)">
        <path
          id="Bataan"
          fill="#fff"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-15-15L0 0v15h15v-30z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Pampanga" fill="#fff" transform="translate(352.5 435)">
        <path
          id="Pampanga"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-7.5 15l30-30h-45v30z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Bulacan" fill="#fff" transform="translate(367.5 435)">
        <path
          id="Bulacan"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-22.5 15h45v-30h-15z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Rizal" fill="#fff" transform="translate(390 465)">
        <path
          id="Rizal"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-15 15h30V0L0-15h-15z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Laguna" fill="#fff" transform="translate(390 495)">
        <path
          id="Laguna"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-15 0H0v-15h15V0L0 15h-15z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Camarines_Norte" fill="#fff" transform="translate(487.5 495)">
        <path
          id="Camarines Norte"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-22.5 15V0l15-15h15l15 15v15h-15z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Camarines_Sur" fill="#fff" transform="translate(532.5 532.5)">
        <path
          id="Camarines Sur"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-22.5-22.5v15l30-2.262V-22.5l45 15-30 15-15 15h-15l-45-30 15-15z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Catanduanes" fill="#fff" transform="translate(600 525)">
        <path
          id="Catanduanes"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M0-15l-15 30h30v-30z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Albay" fill="#fff" transform="translate(555 562.5)">
        <path
          id="Albay"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-30-7.5l15 30h45v-30l-30-15-15 15z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Sorsogon" fill="#fff" transform="translate(570 600)">
        <path
          id="Sorsogon"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M15-15h15v30H15V0h-30l-15-15z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Occidental_Mindoro" fill="#fff" transform="translate(345 600)">
        <path
          id="Occidental Mindoro"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-30-45h45l15 30v60L0 15v-30z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Oriental_Mindoro" fill="#fff" transform="translate(382.5 600)">
        <path
          id="Oriental Mindoro"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-22.5-45h30l15 30v30l-15 30h-15v-60z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Iloilo" fill="#fff" transform="translate(480 741.63)">
        <path
          id="Iloilo"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-45 38.371l30-45v-15h45L45-38.37 30-6.63l-30 30z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Capiz" fill="#fff" transform="translate(487.5 712.5)">
        <path
          id="Capiz"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-22.5 7.5h-15l30-15h45l-15 15z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Aklan" fill="#fff" transform="translate(457.5 697.5)">
        <path
          id="Aklan"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M22.5 7.5l-45-30 15 45z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Antique" fill="#fff" transform="translate(450 727.5)">
        <path
          id="Antique"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-15-52.5v105l30-45v-15H0z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Northern_Samar" fill="#fff" transform="translate(652.5 630)">
        <path
          id="Northern Samar"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-37.5 15h60l15-15-15-15h-60z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Eastern_Samar" fill="#fff" transform="translate(697.5 682.5)">
        <path
          id="Eastern Samar"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-22.5-37.5v15l15 15v60h30l-15-15v-45l-15-45z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Samar" fill="#fff" transform="translate(652.5 690)">
        <path
          id="Samar"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-37.5-45l45 45-15 15 45 30v-60l-15-15v-15z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Negros_Occidental" fill="#fff" transform="translate(510 795)">
        <path
          id="Negros Occidental"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M30 0l15-30v-15L30-60 0-45v30l-15 30-15 15h-15v15l15 15z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Negros_Oriental" fill="#fff" transform="translate(510 840)">
        <path
          id="Negros Oriental"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-30 15l15 15L1.947 45H15l15-15-15-15 15-60z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Cebu" fill="#fff" transform="translate(570 795)">
        <path
          id="Cebu"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-30 30v45l15-45L15 0l15-75z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Bohol" fill="#fff" transform="translate(600 832.5)">
        <path
          id="Bohol"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-30-5.413V7.5l15 15h30l15-15v-30H0z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Misamis_Occidental" fill="#fff" transform="translate(570 937.5)">
        <path
          id="Misamis Occidental"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-15-22.5v45H0l15-15v-15l-15-15z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Zamboanga_Del_Norte" fill="#fff" transform="translate(495 967.5)">
        <path
          id="Zamboanga del Norte"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M60-52.5H30v30l-60 15-15 30-15 30 45-45h30l30-15v-15h15z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Lanao_Del_Norte" fill="#fff" transform="translate(600 967.5)">
        <path
          id="Lanao del Norte"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-30-7.5H0v-15h30v15l-45 30-15-15z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Lanao_Del_Sur" fill="#fff" transform="translate(615 982.5)">
        <path
          id="Lanao del Sur"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-30 7.5l15 15 30-15h15v-15l-15-15z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Bukidnon" fill="#fff" transform="translate(660 967.5)">
        <path
          id="Bukidnon"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-30-22.5l30-15h30v60l-15 15H0l-15-15v-15l-15-15z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Misamis_Oriental" fill="#fff" transform="translate(645 922.5)">
        <path
          id="Misamis Oriental"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-30 22.5v-15h15l15-15v-15h30v30H15l-30 15z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Agusan_Del_Norte" fill="#fff" transform="translate(697.5 885)">
        <path
          id="Agusan del Norte"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-22.5 15l30-15v-30h15v60h-45z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Agusan_Del_Sur" fill="#fff" transform="translate(720 915)">
        <path
          id="Agusan del Sur"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M0-45l30 75h15v15h-75V15h-15V0H0z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Surigao_del_Sur" fill="#fff" transform="translate(750 907.5)">
        <path
          id="Surigao del Sur"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-15-52.5l-15 15 30 75h15v15h15v-15l-15-15-15-15 15-15z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Davao_Oriental" fill="#fff" transform="translate(757.5 1020)">
        <path
          id="Davao Oriental"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-7.5-60l15 60-30 15 15 45 30-45v-45l-15-30z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Davao_De_Oro" fill="#fff" transform="translate(742.5 997.5)">
        <path
          id="Davao de Oro"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-22.5-37.5v30h15v45l30-15-15-60z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Davao_Del_Sur" fill="#fff" transform="translate(690 1035)">
        <path
          id="Davao del Sur"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M15-15L0 45h-15V15L0 0v-45h15z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer'
        id="Maguindanao_Del_Norte"
        fill="#fff"
        transform="translate(607.5 1020)"
      >
        <path
          id="Maguindanao del Norte"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-7.5-15l15 15-30 30 45-15v-45z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Maguindanao_Del_Sur" fill="#fff" transform="translate(622.5 1050)">
        <path
          id="Maguindanao del Sur"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M7.5-15h30v30h-15l-60-15z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Davao_Occidental" fill="#fff" transform="translate(705 1102.5)">
        <path
          id="Davao Occidental"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-10.239-37.5L15-7.5v15l-30 30 15-30-15-30z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Cotabato" fill="#fff" transform="translate(660 1027.5)">
        <path
          id="Cotabato"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M30 7.5v-45l-15 15H0l-15-15h-15v45H0v30l15-15z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Sarangani" fill="#fff" transform="translate(660 1110)">
        <path
          id="Sarangani"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M30-30L45 0 30 30 15 15l15-30-15-15zM-15 0h30v15L-45 0v-15h15z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Sulu" fill="#fff" transform="translate(382.5 1125)">
        <path
          id="Sulu"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-22.5-15V0l30 15 15-15-15-15z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Tawi-Tawi" fill="#fff" transform="translate(292.5 1170)">
        <path
          id="Tawi-Tawi"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M22.5-15l-45 30h45z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Basilan" fill="#fff" transform="translate(442.5 1080)">
        <path
          id="Basilan"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-7.5-15h30v30h-30l-15-30z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Southern_Leyte" fill="#fff" transform="translate(660 787.5)">
        <path
          id="Southern_Leyte"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-15 22.5l15-30 15-15v45L0 7.5v15z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Leyte" fill="#fff" transform="translate(645 757.5)">
        <path
          id="Leyte"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M0 52.5l15-30 15-15-15-15v-30h-30l-15-15v45h15l15 15z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Batanes" fill="#fff" transform="translate(435 37.5)">
        <path
          id="Batanes"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M0 7.5h15l-15 15zm-15-15l15-15v15z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Palawan" fill="#fff" transform="translate(195 795)">
        <path
          id="Palawan"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-120 150l15-30L30-15l15-75 30 75L0 30v15l-75 75zM75-150h15l30 15-30 30z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Dinagat_Islands" fill="#fff" transform="translate(712.5 802.5)">
        <path
          id="Dinagat Islands"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M7.5-22.5l-15 15v15l15 15z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Metro_Manila" fill="#fff" transform="translate(367.5 465)">
        <path
          id="Metro Manila"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-7.5-15h15v30z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Batangas" fill="#fff" transform="translate(375 517.5)">
        <path
          id="Batangas"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M30 7.5v15H0l-15-30-15 15v-30l30 15h15v15z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Cavite" fill="#fff" transform="translate(360 495)">
        <path
          id="Cavite"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-15 0l30-15v30z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Marinduque" fill="#fff" transform="translate(435 555)">
        <path
          id="Marinduque"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M0-15L15 0 0 15-15 0z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Zambales" fill="#fff" transform="translate(315 412.5)">
        <path
          id="Zambales"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-15-37.5v30l15 45h15v-30L0-7.5v-30z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Tarlac" fill="#fff" transform="translate(337.5 397.5)">
        <path
          id="Tarlac"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-22.5-7.5v15l15 15h30v-15l-15-30z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Pangasinan" fill="#fff" transform="translate(322.5 368.62)">
        <path
          id="Pangasinan"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M22.5 6.378h15v-30h-30v15h-15l-15-27.756-15 12.756 15 60v-30h15v15z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Nueva_Ecija" fill="#fff" transform="translate(367.5 390)">
        <path
          id="Nueva Ecija"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-7.5-30h30v60h-30V15l-15-30h15z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Quezon" fill="#fff" transform="translate(442.5 487.5)">
        <path
          id="Quezon"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-37.5-82.5l15 45 2.232 45 42.768 30v-15h30l-15 15 15 45h-15l-15-30-45-30v15h-30v-15l15-15v-30l-15-15v-30zm30 60v-30l45 30-30-15z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Ilocos_Norte" fill="#fff" transform="translate(352.5 210)">
        <path
          id="Ilocos Norte"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-22.5 15l15-45h30v45l-30 15z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Apayao" fill="#fff" transform="translate(390 217.5)">
        <path
          id="Apayao"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-15-37.5l30 30v30l-30 15z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Kalinga" fill="#fff" transform="translate(390 262.5)">
        <path
          id="Kalinga"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-15-7.5l30-15 15 15v15l-30 15h-30z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Cagayan" fill="#fff" transform="translate(420 187.5)">
        <path
          id="Cagayan"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M0-67.5v15h-15v-15zm30 30l-15 15v-15zm-75 30h15l45 30 15-15v-15l15 15v15l-15 15v30H0l-15-15v-30z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer'
        id="Isabela"
        fill="#fff"
        imageRendering="auto"
        transform="translate(442.73 292.49)"
      >
        <path
          id="Isabela"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-22.75-37.49l30.006.035 15.513 15.46 15 15L22.277 37.49l-44.921-.053L-37.77 22.62l14.975-30.067z"
          display="inline"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Mountain_Province" fill="#fff" transform="translate(390 292.5)">
        <path
          id="Mountain Province"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-30-7.5v30l15-15 45-15v-15L0-7.5z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Ifugao" fill="#fff" transform="translate(390 307.5)">
        <path
          id="Ifugao"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-30 7.5v15l30-15h15l15-30-45 15z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Benguet" fill="#fff" transform="translate(345 322.5)">
        <path
          id="Benguet"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M0 22.5l-15-15v-15l15-15h15v45z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="La_Union" fill="#fff" transform="translate(330 322.5)">
        <path
          id="La Union"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M0 22.5l-15-15v-30l15 15v15l15 15z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Biliran" fill="#fff" transform="translate(622.5 697.5)">
        <path
          id="Biliran"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M7.5 7.5v-15h-15z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Camiguin" fill="#fff" transform="translate(652.5 877.5)">
        <path
          id="Camiguin"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-7.5-7.5v15h15z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Davao_Del_Norte" fill="#fff" transform="translate(712.5 997.5)">
        <path
          id="Davao del Norte"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M7.5-7.5h15v15l-30 15v-30h-15v-30h30zm-15 45l15-15v15z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Guimaras" fill="#fff" transform="translate(487.5 772.5)">
        <path
          id="Guimaras"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-7.5 7.5l15-15v15z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Ilocos_Sur" fill="#fff" transform="translate(337.5 270)">
        <path
          id="Ilocos Sur"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M7.5-30l-15-15-15 30v45l15 15 15-15h15V15l-30-15z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Abra" fill="#fff" transform="translate(352.5 255)">
        <path
          id="Abra"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-7.5-15l-15 30 30 15 15-30v-30z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Masbate" fill="#fff" transform="translate(555 630)">
        <path
          id="Masbate"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-15 0l30-15 30 60v15L0 15l-30 30zm-30-45v-15l30 30z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Nueva_Vizcaya" fill="#fff" transform="translate(382.5 352.5)">
        <path
          id="Nueva Vizcaya"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M22.5-37.5l-15 15v15l15 30-15 15v-30h-30v-30l30-15z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Quirino" fill="#fff" transform="translate(412.5 345)">
        <path
          id="Quirino"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-7.5-30l-15 15V0l15 30 30-30v-15h-15z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Romblon" fill="#fff" transform="translate(465 637.5)">
        <path
          id="Romblon"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-15 22.5l-15-15v-15l15-15zm45-30v15H15L0-7.5z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Siquijor" fill="#fff" transform="translate(562.5 877.5)">
        <path
          id="Siquijor"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-7.5 7.5l15-15v15z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="South_Cotabato" fill="#fff" transform="translate(660 1102.5)">
        <path
          id="South Cotabato"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-30-22.5h45l15 15-15 30v-15h-30l-15-15z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Sultan_Kudarat" fill="#fff" transform="translate(630 1080)">
        <path
          id="Sultan Kudarat"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-45-30l30 60V15H0V0h45v-30L30-15H15z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer'
        id="Surigao_del_Norte"
        fill="#fff"
        transform="translate(716.25 840.25)"
      >
        <path
          id="Surigao del Norte"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M-26.25 14.75v-15h30l15 15-15 15v-15zm37.5-29.5l15-15v30z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Zamboanga_Sibugay" fill="#fff" transform="translate(495 997.5)">
        <path
          id="Zamboanga Sibugay"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M15 22.5v-30H0l-15 15-15-15 15-15h45v15z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g className='province-layer' id="Zamboanga_Del_Sur" fill="#fff" transform="translate(502.5 990)">
        <path
          id="Zamboanga del Sur"
          fill="#fff"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M37.5-30v-15h15v15h15v15h-15v45l-30-30v-15h-15zm-60 45l-30 30-15-15 30-30z"
          opacity="1"
          vectorEffect="non-scaling-stroke"
          onClick={(event) => handleProvinceClick(event)}
        ></path>
      </g>
      <g
        id="g1953"
        strokeDasharray="none"
        strokeDashoffset="0"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeOpacity="1"
        paintOrder="markers fill stroke"
        transform="matrix(1.63481 0 0 1.6089 -381.296 -140.998)"
      >
        <rect
          id="rect385"
          width="176.299"
          height="132.998"
          x="544.363"
          y="159.803"
          fill="#fff"
          stroke="#000"
          strokeWidth="1.5"
          display="inline"
          ry="6.754"
        ></rect>
        <rect
          id="rect1963"
          width="25.835"
          height="17.926"
          x="530.263"
          y="145.262"
          fill="#e84c3d"
          fillOpacity="1"
          stroke="#000"
          strokeWidth="0.525"
          ry="4.118"
          transform="matrix(.6117 0 0 .62154 230.623 86.575)"
        ></rect>
        <rect
          id="rect1963-1"
          width="25.835"
          height="17.926"
          x="530.263"
          y="175.262"
          fill="#d58337"
          fillOpacity="1"
          stroke="#000"
          strokeWidth="0.525"
          ry="4.118"
          transform="matrix(.6117 0 0 .62154 230.623 86.575)"
        ></rect>
        <rect
          id="rect1963-1-2"
          width="25.835"
          height="17.926"
          x="530.263"
          y="205.262"
          fill="#f3c218"
          fillOpacity="1"
          stroke="#000"
          strokeWidth="0.525"
          ry="4.118"
          transform="matrix(.6117 0 0 .62154 230.623 86.575)"
        ></rect>
        <rect
          id="rect1963-3"
          width="25.835"
          height="17.926"
          x="530.676"
          y="235.262"
          fill="#30cc70"
          fillOpacity="1"
          stroke="#000"
          strokeWidth="0.525"
          ry="4.118"
          transform="matrix(.6117 0 0 .62154 230.623 86.575)"
        ></rect>
        <rect
          id="rect1963-1-8"
          width="25.835"
          height="17.926"
          x="530.676"
          y="265.263"
          fill="#3598db"
          fillOpacity="1"
          stroke="#000"
          strokeWidth="0.525"
          ry="4.118"
          transform="matrix(.6117 0 0 .62154 230.623 86.575)"
        ></rect>
        <rect
          id="rect1963-1-2-1"
          width="25.835"
          height="17.926"
          x="530.676"
          y="295.263"
          fill="#fff"
          stroke="#000"
          strokeWidth="0.525"
          ry="4.118"
          transform="matrix(.6117 0 0 .62154 230.623 86.575)"
        ></rect>
        <text
          id="text2045-3-8"
          x="723.828"
          y="189.117"
          fill="#fff"
          stroke="#000"
          strokeWidth="0.525"
          fontSize="14"
          transform="matrix(.6117 0 0 .62154 230.623 86.575)"
          xmlSpace="preserve"
        >
          <tspan
            id="tspan2047-4-6"
            x="723.828"
            y="189.117"
            fill="#000"
            fillOpacity="1"
            stroke="none"
            strokeDasharray="none"
            strokeWidth="0.75"
            fontSize="14"
          >
            Level: 4
          </tspan>
        </text>
        <text
          id="text2045-3-8-4"
          x="723.828"
          y="159.117"
          fill="#fff"
          stroke="#000"
          strokeWidth="0.525"
          fontSize="14"
          transform="matrix(.6117 0 0 .62154 230.623 86.575)"
          xmlSpace="preserve"
        >
          <tspan
            id="tspan2047-4-6-1"
            x="723.828"
            y="159.117"
            fill="#000"
            fillOpacity="1"
            stroke="none"
            strokeDasharray="none"
            strokeWidth="0.75"
            fontSize="14"
          >
            Level: 5
          </tspan>
        </text>
        <text
          id="text2045-3-7"
          x="723.828"
          y="219.117"
          fill="#fff"
          stroke="#000"
          strokeWidth="0.525"
          fontSize="14"
          transform="matrix(.6117 0 0 .62154 230.623 86.575)"
          xmlSpace="preserve"
        >
          <tspan
            id="tspan2047-4-1"
            x="723.828"
            y="219.117"
            fill="#000"
            fillOpacity="1"
            stroke="none"
            strokeDasharray="none"
            strokeWidth="0.75"
            fontSize="14"
          >
            Level: 3
          </tspan>
        </text>
        <text
          id="text2045-3-84"
          x="723.828"
          y="249.117"
          fill="#fff"
          stroke="#000"
          strokeWidth="0.525"
          fontSize="14"
          transform="matrix(.6117 0 0 .62154 230.623 86.575)"
          xmlSpace="preserve"
        >
          <tspan
            id="tspan2047-4-9"
            x="723.828"
            y="249.117"
            fill="#000"
            fillOpacity="1"
            stroke="none"
            strokeDasharray="none"
            strokeWidth="0.75"
            fontSize="14"
          >
            Level: 2
          </tspan>
        </text>
        <text
          id="text2045-3-73"
          x="723.828"
          y="279.117"
          fill="#fff"
          stroke="#000"
          strokeWidth="0.525"
          fontSize="14"
          transform="matrix(.6117 0 0 .62154 230.623 86.575)"
          xmlSpace="preserve"
        >
          <tspan
            id="tspan2047-4-10"
            x="723.828"
            y="279.117"
            fill="#000"
            fillOpacity="1"
            stroke="none"
            strokeDasharray="none"
            strokeWidth="0.75"
            fontSize="14"
          >
            Level: 1
          </tspan>
        </text>
        <text
          id="text2045-3-2"
          x="723.828"
          y="309.117"
          fill="#fff"
          stroke="#000"
          strokeWidth="0.525"
          fontSize="14"
          transform="matrix(.6117 0 0 .62154 230.623 86.575)"
          xmlSpace="preserve"
        >
          <tspan
            id="tspan2047-4-3"
            x="723.828"
            y="309.117"
            fill="#000"
            fillOpacity="1"
            stroke="none"
            strokeDasharray="none"
            strokeWidth="0.75"
            fontSize="14"
          >
            Level: 0
          </tspan>
        </text>
        <text
          id="text2045-5"
          x="569.215"
          y="189.117"
          fill="#fff"
          stroke="#000"
          strokeWidth="0.525"
          fontSize="14"
          transform="matrix(.6117 0 0 .62154 230.623 86.575)"
          xmlSpace="preserve"
        >
          <tspan
            id="tspan2047-8"
            x="569.215"
            y="189.117"
            fill="#000"
            fillOpacity="1"
            stroke="none"
            strokeDasharray="none"
            strokeWidth="0.75"
            fontSize="14"
          >
            Stayed there
          </tspan>
        </text>
        <text
          id="text2045-5-9"
          x="569.215"
          y="159.117"
          fill="#fff"
          stroke="#000"
          strokeWidth="0.525"
          fontSize="14"
          transform="matrix(.6117 0 0 .62154 230.623 86.575)"
          xmlSpace="preserve"
        >
          <tspan
            id="tspan2047-8-2"
            x="569.215"
            y="159.117"
            fill="#000"
            fillOpacity="1"
            stroke="none"
            strokeDasharray="none"
            strokeWidth="0.75"
            fontSize="14"
          >
            Visited there
          </tspan>
        </text>
        <text
          id="text2045-2"
          x="569.848"
          y="219.117"
          fill="#fff"
          stroke="#000"
          strokeWidth="0.525"
          fontSize="14"
          transform="matrix(.6117 0 0 .62154 230.623 86.575)"
          xmlSpace="preserve"
        >
          <tspan
            id="tspan2047-9"
            x="569.848"
            y="219.117"
            fill="#000"
            fillOpacity="1"
            stroke="none"
            strokeDasharray="none"
            strokeWidth="0.75"
            fontSize="14"
          >
            Visited there
          </tspan>
        </text>
        <text
          id="text2045-8"
          x="569.848"
          y="249.117"
          fill="#fff"
          stroke="#000"
          strokeWidth="0.525"
          fontSize="14"
          transform="matrix(.6117 0 0 .62154 230.623 86.575)"
          xmlSpace="preserve"
        >
          <tspan
            id="tspan2047-2"
            x="569.848"
            y="249.117"
            fill="#000"
            fillOpacity="1"
            stroke="none"
            strokeDasharray="none"
            strokeWidth="0.75"
            fontSize="14"
          >
            Alighted there
          </tspan>
        </text>
        <text
          id="text2045-0"
          x="568.828"
          y="279.117"
          fill="#fff"
          stroke="#000"
          strokeWidth="0.525"
          fontSize="14"
          transform="matrix(.6117 0 0 .62154 230.623 86.575)"
          xmlSpace="preserve"
        >
          <tspan
            id="tspan2047-7"
            x="568.828"
            y="279.117"
            fill="#000"
            fillOpacity="1"
            stroke="none"
            strokeDasharray="none"
            strokeWidth="0.75"
            fontSize="14"
          >
            Passed there
          </tspan>
        </text>
        <text
          id="text2045-4"
          x="568.828"
          y="309.117"
          fill="#fff"
          stroke="#000"
          strokeWidth="0.525"
          fontSize="14"
          transform="matrix(.6117 0 0 .62154 230.623 86.575)"
          xmlSpace="preserve"
        >
          <tspan
            id="tspan2047-85"
            x="568.828"
            y="309.117"
            fill="#000"
            fillOpacity="1"
            stroke="none"
            strokeDasharray="none"
            strokeWidth="0.75"
            fontSize="14"
          >
            Never been there
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{ WebkitTextAlign: "center", textAlign: "center" }}
          id="text3282"
          x="637.208"
          y="147.041"
          fill="#000"
          fillOpacity="1"
          stroke="none"
          strokeWidth="0.462"
          fontSize="15"
          textAnchor="middle"
          transform="scale(.99204 1.00802)"
        >
          <tspan
            id="tspan3280"
            style={{ WebkitTextAlign: "center", textAlign: "center" }}
            x="637.208"
            y="147.041"
            strokeWidth="0.462"
            textAnchor="middle"
          >
            Philippines Level {0}
          </tspan>
        </text>
      </g>
    </svg>
  );
};

export default PhilippinesMapJSX;
