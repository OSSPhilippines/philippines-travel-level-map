import React, { useState, useCallback, useRef, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { toJpeg } from 'html-to-image';

import Map from './Map';
import FacebookLogo from '../components/FacebookLogo';
import GithubIcon from '../components/GithubIcon';
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

	const handleGithubOpen = useCallback(() => {
		window.open('https://github.com/OSSPhilippines/philippines-travel-level-map', '_blank');
	}, []);
    
	const handleReset = () => {
		if (noProvinceSelected) {return;}

		setProvinceLevels(provinceLevels => provinceLevels.map(() => 0));
		setIsResetMapToastVisible(true);
		setTimeout(() => setIsResetMapToastVisible(false), 2500);
	};

	return (
		<section>
			<section className='Map-container'>
				<section className='Map-padding' ref={divRef}>
					<Map/>
				</section>

				<section className='Map-cta'>
					<section className='Map-cta-button-container'>
						<button className='save-image-button' onClick={downloadJpg}>Save Image</button>
						<button className='reset-button' onClick={handleReset} disabled={noProvinceSelected}>Reset</button>
					</section>

					<section><i><small>To save your progress, simply save the URL.</small></i></section>
				</section>
			</section>

			<section className='share-buttons'>
				<button className='share-fb-button' onClick={handleFacebookShare}>
					<FacebookLogo />
					Share
				</button>
				<button className='share-gh-button' onClick={handleGithubOpen}>
					<GithubIcon />
					Star on GitHub
				</button>
			</section>

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
