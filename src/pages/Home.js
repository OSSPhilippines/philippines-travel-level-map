import { Link } from "react-router-dom";
import ".././App.css"
import denz from ".././denz.jpg"

const Home = () => {
  return (
    <section className="about">

      <section className="header">
        <h1>My Philippines Travel Level</h1>
        <p> This simple web app helps you visualize how well-travelled you are in the Philippines. This project was inspired by the <a className="link" href="https://zhung.com.tw/japanex/">JapanEx</a>.</p>

        <svg className="github" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 26" onClick={() => window.open('https://github.com/denzdelvillar/philippine-map-app')}>
          <path d="M12 .3C5.7.3.3 5.7.3 12c0 5.3 3.4 9.8 8.1 11.4.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.7 1.2 3.4.9.1-.7.4-1.2.8-1.5-3-.3-6.2-1.5-6.2-6.7 0-1.5.5-2.8 1.2-3.8-.1-.3-.5-1.8.1-3.8 0 0 1.2-.4 3.9 1.5 1.1-.3 2.3-.5 3.5-.5s2.4.2 3.5.5c2.7-1.9 3.9-1.5 3.9-1.5.6 2 .2 3.5.1 3.8.7 1 1.2 2.3 1.2 3.8 0 5.2-3.2 6.4-6.2 6.7.5.4.9 1.2.9 2.5v3.7c0 .3.2.7.8.6 4.7-1.6 8.1-6.1 8.1-11.4C23.7 5.7 18.3.3 12 .3z" />
        </svg>

        <Link className="viewMap" to={"/map"}>View Map ↗</Link>
      </section>

      <section className="guide">
        <h2>How To Use</h2>
        <p>The map is divided into the 83* Philippine provinces. All you have to do is to click on a province and choose the appropriate level of travel.</p>

        <p className="italicized">Here's what each level represents:</p>
        <br></br>
        <ul>
          <li className="bullet"><b>Lived there</b> - you spent a significant portion of your life in that area.</li>
          <li className="bullet"><b>Stayed there</b> - you slept at least a night in that area.</li>
          <li className="bullet"><b>Visited there</b> - you spent some hours exploring the area.</li>
          <li className="bullet"><b>Alighted there</b> - you just dropped off for a short stopover, layover, or transfer.</li>
          <li className="bullet"><b>Passed there</b> - you passed by that area but did not set foot.</li>
          <li className="bullet"><b>Never been there</b> - you need to travel there soon.</li>
        </ul>
        <br></br>
        <p>Your total score will be updated accordingly. You can then save the image and share on your social media.</p>
        <p className="trivia">*Technically, there are only 82 provinces. Metro Manila is an administrative region.</p>
      </section>

      <div className="aboutMe">
        <h2>About Me</h2>

        <div className="details">
          <img className="dp" src={denz} alt="me" />

          <div className="text-details">
            <p>
              Hello there! My name is Denz and I am a Filipino software engineer currently based in Singapore. Embarrassingly, my Philippines travel level is only 62.
              <br></br>
              <br></br>
              This is my first time dabbling with ReactJS, and I used chatGPT heavily to help me with this project. If you have any comments or if you want to contribute to this project, please do reach out!
            </p>

            <p className="reminder">Check out my socials:
            </p>
            <div className="socials">
              <a className="link" href="https://www.linkedin.com/in/denzdelvillar" >

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
              <a className="link" href="https://www.twitter.com/denzvryan">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
              </a>
              <a className="link" href="https://www.instagram.com/denzdelvillar">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flag-counter">
        <a href="https://info.flagcounter.com/s6dX"><img src="https://s11.flagcounter.com/count2/s6dX/bg_FFFFFF/txt_000000/border_CCCCCC/columns_4/maxflags_16/viewers_3/labels_0/pageviews_1/flags_0/percent_0/" alt="Flag Counter" border="0" /></a>
      </div>
    </section>
  );
};

export default Home;
