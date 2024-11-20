import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import video1 from "./videos/video1.mp4";

const App = () => {
  const heroVideo = {
    title: "Featured Game of the Month",
    src: video1, // Example video
  };

  const videos = [
    {
      id: 1,
      title: "Epic Gaming Moments",
      description: "Relive the best moments from epic battles and gameplay.",
      thumbnail: "https://via.placeholder.com/300x200",
      videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example YouTube video
    },
    {
      id: 2,
      title: "Top RPG Games 2024",
      description: "Explore the best RPGs to play this year.",
      thumbnail: "https://imgs.search.brave.com/LRgQ-_HyIvtWMuIWKSMtPN65tdFHhHQ30G-a8AGw0as/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z2FtZWRlc2lnbmlu/Zy5vcmcvd3AtY29u/dGVudC91cGxvYWRz/LzIwMTkvMTAvVGhl/LTMwLUJlc3QtUlBH/LVJvbGUtcGxheWlu/Zy1nYW1lcy0xLmpw/Zw",
      videoSrc: "https://www.youtube.com/embed/b8kjRBkwOCQ", // Example YouTube video
    },
    {
      id: 3,
      title: "GTA VI",
      description: "Check out the popular GTA 6 Trailer.",
      thumbnail: "https://via.placeholder.com/300x200",
      videoSrc: "https://www.youtube.com/embed/QdBZY2fkU-0", // Example YouTube video
    },
  ];

  return (
    <div className="app">
      {/* Navigation Button */}
      <Link to="/home" className="home-button">
        Home
      </Link>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-video-wrapper">
          <video
            className="hero-video"
            src={heroVideo.src}
            controls
            autoPlay
            loop
            muted
          />
          <div className="hero-overlay">
            <h1 className="hero-title">{heroVideo.title}</h1>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="videos-section">
        <h2 className="section-title">Latest Videos</h2>
        <div className="videos-grid">
          {videos.map((video) => (
            <div className="video-card" key={video.id}>
              {/* YouTube iframe */}
              <div className="video-frame-container">
                <iframe
                  src={video.videoSrc}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <h3 className="video-title">{video.title}</h3>
              <p className="video-description">{video.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default App;

