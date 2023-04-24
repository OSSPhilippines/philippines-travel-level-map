const PROVINCE_LEVEL_FILLS = [
  'white',
  '#3598db',
  '#30cc70',
  '#f3c218',
  '#d58337',
  '#e84c3d',
];

const MENU_OPTIONS = [
  { label: 'Lived there', level: 5, fill: '#e84c3d' },
  { label: 'Stayed there', level: 4, fill: '#d58337' },
  { label: 'Visited there', level: 3, fill: '#f3c218' },
  { label: 'Alighted there', level: 2, fill: '#30cc70' },
  { label: 'Passed there', level: 1, fill: '#3598db' },
  { label: 'Never been there', level: 0, fill: 'white' },
];

// The order of this array is strictly important as it's used in encoding/decoding URL
const PROVINCES = [
  {
    id: 'Aurora',
    transform: 'translate(427.5 375)',
    drawPath: 'M-37.5 45l60-60 15-30h-30v15l-45 45z',
  },
  {
    id: 'Bataan',
    transform: 'translate(330 465)',
    drawPath: 'M-15-15L0 0v15h15v-30z',
  },

  {
    id: 'Pampanga',
    transform: 'translate(352.5 435)',
    drawPath: 'M-7.5 15l30-30h-45v30z',
  },

  {
    id: 'Bulacan',
    transform: 'translate(367.5 435)',
    drawPath: 'M-22.5 15h45v-30h-15z',
  },

  {
    id: 'Rizal',
    transform: 'translate(390 465)',
    drawPath: 'M-15 15h30V0L0-15h-15z',
  },

  {
    id: 'Laguna',
    transform: 'translate(390 495)',
    drawPath: 'M-15 0H0v-15h15V0L0 15h-15z',
  },

  {
    id: 'Camarines Norte',
    transform: 'translate(487.5 495)',
    drawPath: 'M-22.5 15V0l15-15h15l15 15v15h-15z',
  },

  {
    id: 'Camarines Sur',
    transform: 'translate(532.5 532.5)',
    drawPath:
      'M-22.5-22.5v15l30-2.262V-22.5l45 15-30 15-15 15h-15l-45-30 15-15z',
  },

  {
    id: 'Catanduanes',
    transform: 'translate(600 525)',
    drawPath: 'M0-15l-15 30h30v-30z',
  },

  {
    id: 'Albay',
    transform: 'translate(555 562.5)',
    drawPath: 'M-30-7.5l15 30h45v-30l-30-15-15 15z',
  },

  {
    id: 'Sorsogon',
    transform: 'translate(570 600)',
    drawPath: 'M15-15h15v30H15V0h-30l-15-15z',
  },

  {
    id: 'Occidental Mindoro',
    transform: 'translate(345 600)',
    drawPath: 'M-30-45h45l15 30v60L0 15v-30z',
  },

  {
    id: 'Oriental Mindoro',
    transform: 'translate(382.5 600)',
    drawPath: 'M-22.5-45h30l15 30v30l-15 30h-15v-60z',
  },

  {
    id: 'Iloilo',
    transform: 'translate(480 741.63)',
    drawPath: 'M-45 38.371l30-45v-15h45L45-38.37 30-6.63l-30 30z',
  },

  {
    id: 'Capiz',
    transform: 'translate(487.5 712.5)',
    drawPath: 'M-22.5 7.5h-15l30-15h45l-15 15z',
  },

  {
    id: 'Aklan',
    transform: 'translate(457.5 697.5)',
    drawPath: 'M22.5 7.5l-45-30 15 45z',
  },

  {
    id: 'Antique',
    transform: 'translate(450 727.5)',
    drawPath: 'M-15-52.5v105l30-45v-15H0z',
  },

  {
    id: 'Northern Samar',
    transform: 'translate(652.5 630)',
    drawPath: 'M-37.5 15h60l15-15-15-15h-60z',
  },

  {
    id: 'Eastern Samar',
    transform: 'translate(697.5 682.5)',
    drawPath: 'M-22.5-37.5v15l15 15v60h30l-15-15v-45l-15-45z',
  },

  {
    id: 'Samar',
    transform: 'translate(652.5 690)',
    drawPath: 'M-37.5-45l45 45-15 15 45 30v-60l-15-15v-15z',
  },

  {
    id: 'Negros Occidental',
    transform: 'translate(510 795)',
    drawPath: 'M30 0l15-30v-15L30-60 0-45v30l-15 30-15 15h-15v15l15 15z',
  },

  {
    id: 'Negros Oriental',
    transform: 'translate(510 840)',
    drawPath: 'M-30 15l15 15L1.947 45H15l15-15-15-15 15-60z',
  },

  {
    id: 'Cebu',
    transform: 'translate(570 795)',
    drawPath: 'M-30 30v45l15-45L15 0l15-75z',
  },

  {
    id: 'Bohol',
    transform: 'translate(600 832.5)',
    drawPath: 'M-30-5.413V7.5l15 15h30l15-15v-30H0z',
  },

  {
    id: 'Misamis Occidental',
    transform: 'translate(570 937.5)',
    drawPath: 'M-15-22.5v45H0l15-15v-15l-15-15z',
  },

  {
    id: 'Zamboanga del Norte',
    transform: 'translate(495 967.5)',
    drawPath: 'M60-52.5H30v30l-60 15-15 30-15 30 45-45h30l30-15v-15h15z',
  },

  {
    id: 'Lanao del Norte',
    transform: 'translate(600 967.5)',
    drawPath: 'M-30-7.5H0v-15h30v15l-45 30-15-15z',
  },

  {
    id: 'Lanao del Sur',
    transform: 'translate(615 982.5)',
    drawPath: 'M-30 7.5l15 15 30-15h15v-15l-15-15z',
  },

  {
    id: 'Bukidnon',
    transform: 'translate(660 967.5)',
    drawPath: 'M-30-22.5l30-15h30v60l-15 15H0l-15-15v-15l-15-15z',
  },

  {
    id: 'Misamis Oriental',
    transform: 'translate(645 922.5)',
    drawPath: 'M-30 22.5v-15h15l15-15v-15h30v30H15l-30 15z',
  },

  {
    id: 'Agusan del Norte',
    transform: 'translate(697.5 885)',
    drawPath: 'M-22.5 15l30-15v-30h15v60h-45z',
  },

  {
    id: 'Agusan del Sur',
    transform: 'translate(720 915)',
    drawPath: 'M0-45l30 75h15v15h-75V15h-15V0H0z',
  },

  {
    id: 'Surigao del Sur',
    transform: 'translate(750 907.5)',
    drawPath: 'M-15-52.5l-15 15 30 75h15v15h15v-15l-15-15-15-15 15-15z',
  },

  {
    id: 'Davao Oriental',
    transform: 'translate(757.5 1020)',
    drawPath: 'M-7.5-60l15 60-30 15 15 45 30-45v-45l-15-30z',
  },

  {
    id: 'Davao de Oro',
    transform: 'translate(742.5 997.5)',
    drawPath: 'M-22.5-37.5v30h15v45l30-15-15-60z',
  },

  {
    id: 'Davao del Sur',
    transform: 'translate(690 1035)',
    drawPath: 'M15-15L0 45h-15V15L0 0v-45h15z',
  },

  {
    id: 'Maguindanao del Norte',
    transform: 'translate(607.5 1020)',
    drawPath: 'M-7.5-15l15 15-30 30 45-15v-45z',
  },

  {
    id: 'Maguindanao del Sur',
    transform: 'translate(622.5 1050)',
    drawPath: 'M7.5-15h30v30h-15l-60-15z',
  },

  {
    id: 'Davao Occidental',
    transform: 'translate(705 1102.5)',
    drawPath: 'M-10.239-37.5L15-7.5v15l-30 30 15-30-15-30z',
  },

  {
    id: 'Cotabato',
    transform: 'translate(660 1027.5)',
    drawPath: 'M30 7.5v-45l-15 15H0l-15-15h-15v45H0v30l15-15z',
  },

  {
    id: 'Sarangani',
    transform: 'translate(660 1110)',
    drawPath: 'M30-30L45 0 30 30 15 15l15-30-15-15zM-15 0h30v15L-45 0v-15h15z',
  },

  {
    id: 'Sulu',
    transform: 'translate(382.5 1125)',
    drawPath: 'M-22.5-15V0l30 15 15-15-15-15z',
  },

  {
    id: 'Tawi-Tawi',
    transform: 'translate(292.5 1170)',
    drawPath: 'M22.5-15l-45 30h45z',
  },

  {
    id: 'Basilan',
    transform: 'translate(442.5 1080)',
    drawPath: 'M-7.5-15h30v30h-30l-15-30z',
  },

  {
    id: 'Southern_Leyte',
    transform: 'translate(660 787.5)',
    drawPath: 'M-15 22.5l15-30 15-15v45L0 7.5v15z',
  },

  {
    id: 'Leyte',
    transform: 'translate(645 757.5)',
    drawPath: 'M0 52.5l15-30 15-15-15-15v-30h-30l-15-15v45h15l15 15z',
  },

  {
    id: 'Batanes',
    transform: 'translate(435 37.5)',
    drawPath: 'M0 7.5h15l-15 15zm-15-15l15-15v15z',
  },

  {
    id: 'Palawan',
    transform: 'translate(195 795)',
    drawPath:
      'M-120 150l15-30L30-15l15-75 30 75L0 30v15l-75 75zM75-150h15l30 15-30 30z',
  },

  {
    id: 'Dinagat Islands',
    transform: 'translate(712.5 802.5)',
    drawPath: 'M7.5-22.5l-15 15v15l15 15z',
  },

  {
    id: 'Metro Manila',
    transform: 'translate(367.5 465)',
    drawPath: 'M-7.5-15h15v30z',
  },

  {
    id: 'Batangas',
    transform: 'translate(375 517.5)',
    drawPath: 'M30 7.5v15H0l-15-30-15 15v-30l30 15h15v15z',
  },

  {
    id: 'Cavite',
    transform: 'translate(360 495)',
    drawPath: 'M-15 0l30-15v30z',
  },

  {
    id: 'Marinduque',
    transform: 'translate(435 555)',
    drawPath: 'M0-15L15 0 0 15-15 0z',
  },

  {
    id: 'Zambales',
    transform: 'translate(315 412.5)',
    drawPath: 'M-15-37.5v30l15 45h15v-30L0-7.5v-30z',
  },

  {
    id: 'Tarlac',
    transform: 'translate(337.5 397.5)',
    drawPath: 'M-22.5-7.5v15l15 15h30v-15l-15-30z',
  },

  {
    id: 'Pangasinan',
    transform: 'translate(322.5 368.62)',
    drawPath:
      'M22.5 6.378h15v-30h-30v15h-15l-15-27.756-15 12.756 15 60v-30h15v15z',
  },

  {
    id: 'Nueva Ecija',
    transform: 'translate(367.5 390)',
    drawPath: 'M-7.5-30h30v60h-30V15l-15-30h15z',
  },

  {
    id: 'Quezon',
    transform: 'translate(442.5 487.5)',
    drawPath:
      'M-37.5-82.5l15 45 2.232 45 42.768 30v-15h30l-15 15 15 45h-15l-15-30-45-30v15h-30v-15l15-15v-30l-15-15v-30zm30 60v-30l45 30-30-15z',
  },

  {
    id: 'Ilocos Norte',
    transform: 'translate(352.5 210)',
    drawPath: 'M-22.5 15l15-45h30v45l-30 15z',
  },

  {
    id: 'Apayao',
    transform: 'translate(390 217.5)',
    drawPath: 'M-15-37.5l30 30v30l-30 15z',
  },

  {
    id: 'Kalinga',
    transform: 'translate(390 262.5)',
    drawPath: 'M-15-7.5l30-15 15 15v15l-30 15h-30z',
  },

  {
    id: 'Cagayan',
    transform: 'translate(420 187.5)',
    drawPath:
      'M0-67.5v15h-15v-15zm30 30l-15 15v-15zm-75 30h15l45 30 15-15v-15l15 15v15l-15 15v30H0l-15-15v-30z',
  },
  {
    id: 'Isabela',
    transform: 'translate(442.73 292.49)',
    drawPath:
      'M-22.75-37.49l30.006.035 15.513 15.46 15 15L22.277 37.49l-44.921-.053L-37.77 22.62l14.975-30.067z',
  },
  {
    id: 'Mountain Province',
    transform: 'translate(390 292.5)',
    drawPath: 'M-30-7.5v30l15-15 45-15v-15L0-7.5z',
  },

  {
    id: 'Ifugao',
    transform: 'translate(390 307.5)',
    drawPath: 'M-30 7.5v15l30-15h15l15-30-45 15z',
  },

  {
    id: 'Benguet',
    transform: 'translate(345 322.5)',
    drawPath: 'M0 22.5l-15-15v-15l15-15h15v45z',
  },

  {
    id: 'La Union',
    transform: 'translate(330 322.5)',
    drawPath: 'M0 22.5l-15-15v-30l15 15v15l15 15z',
  },

  {
    id: 'Biliran',
    transform: 'translate(622.5 697.5)',
    drawPath: 'M7.5 7.5v-15h-15z',
  },

  {
    id: 'Camiguin',
    transform: 'translate(652.5 877.5)',
    drawPath: 'M-7.5-7.5v15h15z',
  },

  {
    id: 'Davao del Norte',
    transform: 'translate(712.5 997.5)',
    drawPath: 'M7.5-7.5h15v15l-30 15v-30h-15v-30h30zm-15 45l15-15v15z',
  },

  {
    id: 'Guimaras',
    transform: 'translate(487.5 772.5)',
    drawPath: 'M-7.5 7.5l15-15v15z',
  },

  {
    id: 'Ilocos Sur',
    transform: 'translate(337.5 270)',
    drawPath: 'M7.5-30l-15-15-15 30v45l15 15 15-15h15V15l-30-15z',
  },

  {
    id: 'Abra',
    transform: 'translate(352.5 255)',
    drawPath: 'M-7.5-15l-15 30 30 15 15-30v-30z',
  },

  {
    id: 'Masbate',
    transform: 'translate(555 630)',
    drawPath: 'M-15 0l30-15 30 60v15L0 15l-30 30zm-30-45v-15l30 30z',
  },

  {
    id: 'Nueva Vizcaya',
    transform: 'translate(382.5 352.5)',
    drawPath: 'M22.5-37.5l-15 15v15l15 30-15 15v-30h-30v-30l30-15z',
  },

  {
    id: 'Quirino',
    transform: 'translate(412.5 345)',
    drawPath: 'M-7.5-30l-15 15V0l15 30 30-30v-15h-15z',
  },

  {
    id: 'Romblon',
    transform: 'translate(465 637.5)',
    drawPath: 'M-15 22.5l-15-15v-15l15-15zm45-30v15H15L0-7.5z',
  },

  {
    id: 'Siquijor',
    transform: 'translate(562.5 877.5)',
    drawPath: 'M-7.5 7.5l15-15v15z',
  },

  {
    id: 'South Cotabato',
    transform: 'translate(660 1102.5)',
    drawPath: 'M-30-22.5h45l15 15-15 30v-15h-30l-15-15z',
  },

  {
    id: 'Sultan Kudarat',
    transform: 'translate(630 1080)',
    drawPath: 'M-45-30l30 60V15H0V0h45v-30L30-15H15z',
  },

  {
    id: 'Surigao del Norte',
    transform: 'translate(716.25 840.25)',
    drawPath: 'M-26.25 14.75v-15h30l15 15-15 15v-15zm37.5-29.5l15-15v30z',
  },

  {
    id: 'Zamboanga Sibugay',
    transform: 'translate(495 997.5)',
    drawPath: 'M15 22.5v-30H0l-15 15-15-15 15-15h45v15z',
  },

  {
    id: 'Zamboanga del Sur',
    transform: 'translate(502.5 990)',
    drawPath:
      'M37.5-30v-15h15v15h15v15h-15v45l-30-30v-15h-15zm-60 45l-30 30-15-15 30-30z',
  },
];

const PROVINCES_LENGTH = PROVINCES.length;

const FB_SHARE_URL = 'https://www.facebook.com/sharer/sharer.php?u=';

export { PROVINCES, PROVINCE_LEVEL_FILLS, PROVINCES_LENGTH, MENU_OPTIONS, FB_SHARE_URL };
