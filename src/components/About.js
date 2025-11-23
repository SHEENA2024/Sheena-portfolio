import React from "react";

export default function About() {
  return (
    
    <div className="about-section">
  <h2>👩🏻‍💻 About Me</h2>
  <div className="about-content">
    <img src="/my photo.jpg" alt="Sheena P" className="about-image" />
    <p>
      Hey there! I'm Sheena, an AI & ML student passionate about creating tech with a purpose. I love mixing
      design, code, and innovation to bring ideas to life. I believe that technology should be accessible,
      inclusive, and impactful.
    </p>
  </div>
  <div className="about-video">
  <h2>🎥 Know Me in 3 Minutes</h2>
  <video src="/sheena video.mp4" controls className="intro-video" />
</div>

</div>


  );
}
