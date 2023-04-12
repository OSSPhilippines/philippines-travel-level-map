import { Link } from "react-router-dom";
import ".././App.css"
import denz from ".././denz.jpg"

const Home = () => {
    return (
      <section className="about">
    
    <h2>My Philippines Travel Level</h2>

    This simple web app helps you visualize how well-travelled you are in the Philippines. 

    <br></br>
    <br></br>

    This project was inspired by the  <div className="link" onClick={() => window.open('https://zhung.com.tw/japanex/')}>Japan↗</div> version and was built using ReactJS. 
    You can view the source code <div className="link" onClick={() => window.open('https://github.com/denzdelvillar/philippine-map-app')}>here↗</div>.

    <h2>How To Use</h2>
    The map is divided into the 83* Philippine provinces. All you have to do is to click on a province and choose the appropriate level of travel. 
    Your total score will be updated accordingly. You can then save the image and share on your social media.
    
    <br></br>
    <br></br>

    Click <Link className="link" to={"/map"}>here</Link> to view the map. Enjoy!

    <br></br>
    <br></br>
    <section className="asterisk">*Technically, there are only 82 provinces. Metro Manila is an administrative region.</section>

    <h2>About Me</h2>

    <img className="dp" src={denz} alt="me" />

    Hello there! My name is Denz and I am a Filipino software engineer currently based in Singapore. Embarrassingly, my Philippines travel level is only 62.
    <br></br>
    <br></br>
    
    This is my first time dabbling with ReactJS, and I used chatGPT heavily to help me with this project. If you have any comments or if you want to contribute to this project, please do reach out! 
    
    <br></br>
    <br></br>

    Check out my socials: 
    <br></br>
    <div className="link" onClick={() => window.open('https://www.instagram.com/denzdelvillar')}>Instagram↗</div>
    <br></br>
    <div className="link" onClick={() => window.open('https://www.twitter.com/denzvryan')}>Twitter↗</div>
    <br></br>
    <div className="link" onClick={() => window.open('https://www.linkedin.com/in/denzdelvillar')}>LinkedIn↗</div>.
    
    <br></br>
    <br></br>

    <div className="flag-counter">
    <a  href="https://info.flagcounter.com/s6dX"><img src="https://s11.flagcounter.com/count2/s6dX/bg_FFFFFF/txt_000000/border_CCCCCC/columns_4/maxflags_12/viewers_3/labels_0/pageviews_0/flags_0/percent_0/" alt="Flag Counter" border="0"/></a>
    </div>
    </section>
    );
  };
  
  export default Home;
  