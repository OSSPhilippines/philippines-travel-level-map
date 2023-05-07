import React, { useState, useCallback, useRef, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { toJpeg } from 'html-to-image';

import Map from './Map';
import FacebookLogo from '../components/FacebookLogo';
import { FB_SHARE_URL } from '../utils/constants';
import '.././App.css';

import AppContext from '../context/app.context';

function MapPage () {
	const divRef = useRef(null);
	const location = useLocation();

	const [isResetMapToastVisible, setIsResetMapToastVisible] = useState(false);

	const { provinceLevels, setProvinceLevels } = useContext(AppContext);
  
	const noProvinceSelected = provinceLevels.every(level => level === 0);

	const fileName = 'phMap.jpg';
  
	const downloadJpg = useCallback(() => {
		if (divRef.current === null) {
			return;
		}
		toJpeg(divRef.current, { cacheBust: true })
			.then((dataUrl) => {
				const link = document.createElement('a');
				link.download = `${fileName}`;
				link.href = dataUrl;
				link.click();
			})
			.catch((err) => {
				console.log(err);
			});
	}, [divRef]);

	const handleFacebookShare = useCallback(() => {
		const navUrl = FB_SHARE_URL + window.location.href;
		window.open(navUrl, 'mywindow', 'width=350,height=250');
	}, [location.search]);
    
	const handleReset = () => {
		if (noProvinceSelected) {return;}

		setProvinceLevels(provinceLevels => provinceLevels.map(() => 0));
		setIsResetMapToastVisible(true);
		setTimeout(() => setIsResetMapToastVisible(false), 2500);
	};

	return (
		<section>
			<div id='ezoic-pub-ad-placeholder-105'> </div>
			<section className='Map-container'>
				<section className='Map-padding' ref={divRef}>
					<Map/>
				</section>

				<section className='Map-cta'>
					<section className='Map-cta-button-container'>
						<button className='save-image-button' onClick={downloadJpg}>Save Image</button>
						<button className='reset-button' onClick={handleReset} disabled={noProvinceSelected}>Reset</button>
					</section>

					<button className='share-fb-button' onClick={handleFacebookShare}>
						<FacebookLogo />
                    Share
					</button>
				</section>
			</section>

			<section className='donate'>
    If you liked this project and want it to be accessible in the future, please consider donating below. Thank you!

				<br></br>
				<br></br>

				<div className='donate-button'>
					<form action='https://www.paypal.com/donate' method='post' target='_top'>
						<input type='hidden' name='hosted_button_id' value='RP4T6EPM6GJ9A' />
						<input type='image' src='https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif' border='0' name='submit' title='PayPal - The safer, easier way to pay online!' alt='Donate with PayPal button' />
						<img alt='' border='0' src='https://www.paypal.com/en_PH/i/scr/pixel.gif' width='1' height='1' />
					</form>
				</div>

				<br></br>
				<br></br>

			</section>
			<div id='ezoic-pub-ad-placeholder-103'> </div>
			{/*<AdsComponent dataAdSlot='8658257981' /> */}
			<div className='flag-counter'>
				<a  href='https://info.flagcounter.com/s6dX'>
					<img src='https://s11.flagcounter.com/count2/s6dX/bg_FFFFFF/txt_000000/border_CCCCCC/columns_4/maxflags_16/viewers_3/labels_0/pageviews_1/flags_0/percent_0/' alt='Flag Counter' border='0'/>
				</a>
			</div>

			{isResetMapToastVisible && <div className='Map-cta-toast'>Map has been reset</div>}
		</section>
	);
}

export default MapPage;