import React from 'react';
import { Link } from 'react-router-dom';
import '.././App.css';
import denz from '.././denz.jpg';

const Home = () => {
	return (
		<section className="about">
			<article className='about-container'>
				<div className='article-content'>
					<h2>My Philippines Travel Level</h2>

					<p>This simple web app helps you visualize how well-travelled you are in the Philippines. </p>


    This project was inspired by the  <div className="link" onClick={() => window.open('https://zhung.com.tw/japanex/')}>Japan↗</div> version and was built using ReactJS. 
    You can view the source code <div className="link" onClick={() => window.open('https://github.com/OSSPhilippines/philippines-travel-level-map')}>here↗</div>.

	This project is now maintained by <div className="link" onClick={() => window.open('https://ossph.org')}>Open Source Software Philippines↗</div>.
				
					<div className='cta'>
						 <Link className="link" to={'/map'}>Click Here to view the map. Enjoy!</Link> 
					</div>
					
					<p>If you want to save your progress, simply save the URL.</p>
    				<section className="asterisk">*Technically, there are only 82 provinces. Metro Manila is an administrative region.</section>
				</div>
				<div className='about-content'>
					<h2>How To Use</h2>
					<p>The map is divided into the 83* Philippine provinces. All you have to do is to click on a province and choose the appropriate level of travel. </p>
					<p>Here&apos;s what each level represents:</p>
					<ul className='legend'>
						<li> 🏠 <b>Lived there</b> - you spent a significant portion of your life in that area.</li> 
						<li> 🛏️ <b>Stayed there</b> - you slept at least a night in that area.</li> 
						<li> 📸 <b>Visited there</b> - you spent some hours exploring the area.</li> 
						<li> 🚏 <b>Alighted there</b> - you just dropped off for a short stopover, layover, or transfer.</li> 
						<li> 🛣️ <b>Passed there</b> - you passed by that area but did not set foot.</li> 
						<li> 🚫 <b>Never been there</b> - you need to travel there soon.</li> 
					</ul>


    Your total score will be updated accordingly. You can then save the image and share on your social media.
				</div>
			</article>

			<article className='about-container'>
				<div className='article-content'>
					<h2>About Me</h2>
					<div className='author-info'>
						<img className="dp" src={denz} alt="me" />
						<p>Hello there! My name is Denz and I am a Filipino software engineer currently based in Singapore. Embarrassingly, my Philippines travel level is only 62.</p>
						<p>This is my first time dabbling with ReactJS, and I used ChatGPT heavily to help me with this project. If you have any comments or if you want to contribute to this project, please do reach out! </p>  
						<div>
							<h4>Check out my socials:</h4>
							<ul className='socials'>
								<li className="link" onClick={() => window.open('https://www.instagram.com/denzdelvillar')}>Instagram↗</li>
								<li className="link" onClick={() => window.open('https://www.twitter.com/denzvryan')}>Twitter↗</li>
								<li className="link" onClick={() => window.open('https://www.linkedin.com/in/denzdelvillar')}>LinkedIn↗</li>
							</ul>
						</div>
					</div>
				</div>
				<div className='article-content'>
					<h2>About OSSPH</h2>
					<div className="link" onClick={() => window.open('https://ossph.org')}>Open Source Software Philippines (OSSPH)↗</div> is a developer-led initiative to grow the community of developers building open source software across the Philippines. Our goal is to help open source maintainers to get proper support for their projects.
					<div className="flag-counter">
						<a  href="https://info.flagcounter.com/s6dX"><img src="https://s11.flagcounter.com/count2/s6dX/bg_FFFFFF/txt_000000/border_CCCCCC/columns_4/maxflags_16/viewers_3/labels_0/pageviews_1/flags_0/percent_0/" alt="Flag Counter" border="0"/></a>
					</div>
				</div>
			</article>

		</section>
	);
};
  
export default Home;
  