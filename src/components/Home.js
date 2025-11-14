import React from 'react';
import '../styles.css';

function Home() {
  return (
    <div className="home-container">
      <div className="overlay">
        <h1 className="home-title">Hi, I'm <span className="highlight">Sheena P</span></h1>
        <h2 className="home-subtitle">CSE (AI & ML) Student</h2>
        <p className="home-desc">
          Passionate about building impactful solutions using AI, ML, Web, and Cloud technologies.
          I enjoy exploring tech and love crafting beautiful web experiences.
        </p>
        <div className="home-links">
          <a href="https://github.com/SHEENA2024" target="_blank" rel="noopener noreferrer" className="home-btn"> 🌐 GitHub: SHEENA2024</a>
          <a href="mailto:p.sheena2020@gmail.com" className="home-btn">📧 Contact: p.sheena2020@gmail.com
          </a>
        </div>
        
  <section className="floating-tags">
  <marquee behavior="scroll" direction="left" scrollamount="5">
    #AI 🌐 #ML 🤖 #WebDev 💻 #Cloud ☁️ #ReactJS ⚛️ #WomenInTech 👩‍💻 #Hackathons 🚀
  </marquee>
</section>

        

      </div>
    </div>
  );
}

export default Home;
