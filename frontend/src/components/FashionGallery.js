import React from 'react';

const FashionGallery = () => {
  return (
    <>
      <style>{`
        * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: #000;
  color: #999;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
  line-height: 1.6;
  overflow-x: hidden;
}
.footer_footfash-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
}
.footer_footfash-header {
  font-size: clamp(10px, 2.5vw, 11px);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 40px;
  color: #666;
}
.footer_footfash-hero-text {
  font-size: clamp(24px, 5vw, 56px);
  line-height: 1.3;
  font-weight: 300;
  margin-bottom: 40px;
  color: #888;
  text-align: center;
}
.footer_footfash-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: clamp(16px, 4vw, 18px);
  color: #fff;
  text-decoration: none;
  transition: opacity 0.3s;
  margin-bottom: 100px;
  justify-content: center;
}
.footer_footfash-cta:hover {
  opacity: 0.7;
}
.footer_footfash-arrow {
  font-size: 20px;
}
.footer_footfash-gallery-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-top: 80px;
}
.footer_footfash-image-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}
.footer_footfash-image-card {
  position: relative;
  flex: 1 1 180px;
  width: 200px;
  height: 250px;
  background: #1a1a1a;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}
.footer_footfash-image-card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(255, 255, 255, 0.1);
}
.footer_footfash-image-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.footer_footfash-conference-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.footer_footfash-conf-title {
  font-size: clamp(12px, 3vw, 13px);
  color: #666;
  margin-bottom: 15px;
  letter-spacing: 1px;
  text-align: center;
}
.footer_footfash-conf-description {
  font-size: clamp(14px, 3.5vw, 15px);
  line-height: 1.8;
  color: #888;
  text-align: center;
}
@media (max-width: 1024px) {
  .footer_footfash-container {
    padding: 40px 16px;
  }
  .footer_footfash-gallery-section {
    gap: 30px;
    margin-top: 60px;
  }
  .footer_footfash-image-card {
    width: 180px;
    height: 220px;
  }
}
@media (max-width: 768px) {
  .footer_footfash-container {
    padding: 30px 16px;
  }
  .footer_footfash-header {
    margin-bottom: 30px;
  }
  .footer_footfash-hero-text {
    margin-bottom: 30px;
    text-align: left;
  }
  .footer_footfash-gallery-section {
    grid-template-columns: 1fr;
    gap: 50px;
    margin-top: 60px;
  }
  .footer_footfash-image-gallery {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
  }
  .footer_footfash-image-card {
    flex: 1 1 45%;
    min-width: 140px;
    height: 200px;
    width: auto;
  }
  .footer_footfash-conf-title,
  .footer_footfash-conf-description {
    text-align: left;
  }
}
@media (max-width: 480px) {
  .footer_footfash-container {
    padding: 20px 12px;
  }
  .footer_footfash-header {
    margin-bottom: 20px;
  }
  .footer_footfash-hero-text {
    margin-bottom: 25px;
    line-height: 1.4;
  }
  .footer_footfash-gallery-section {
    gap: 40px;
    margin-top: 40px;
  }
  .footer_footfash-image-gallery {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
  .footer_footfash-image-card {
    flex: 1 1 48%;
    width: auto;
    max-width: 140px;
    height: 180px;
  }
  .footer_footfash-conf-title {
    margin-bottom: 12px;
  }
  .footer_footfash-conf-description {
    line-height: 1.7;
  }
}
@media (max-width: 320px) {
  .footer_footfash-hero-text {
    font-size: 20px;
  }
  .footer_footfash-image-card {
    flex: 1 1 100%;
    max-width: none;
    height: 200px;
  }
}
      `}</style>
      <div className="footer_footfash-container">
        <div className="footer_footfash-header">FUTURE OF FASHION</div>
        <div className="footer_footfash-hero-text">
          Discover the future of fashion — powered by AI.<br />
          Our multi-agent system analyzes trends, styles,<br />
          and your preferences to help you choose<br />
          the perfect outfit for any occasion.
        </div>
        <div className="footer_footfash-gallery-section" id="gallery">
          <div className="footer_footfash-image-gallery">
            <div className="footer_footfash-image-card">
              <img 
                src="https://i.postimg.cc/CMkpBxW2/Deepika-Padukone-My-South-Indian-accent-was-frowned-upon-and-I-worried-about-being-written-off-bec.jpg"
                alt="Conference speaker"
              />
            </div>
            <div className="footer_footfash-image-card">
              <img 
                src="https://i.postimg.cc/PxD9wSFW/download-2.jpg" 
                alt="Conference audience"
              />
            </div>
            <div className="footer_footfash-image-card">
              <img 
                src="https://i.postimg.cc/J4xgZDKf/When-I-m-shootin-for-my-goal-ain-t-no-steppin-in-the-crease-Our-latest-drop-is-still-available.jpg"
                alt="Conference networking"
              />
            </div>
            <div className="footer_footfash-image-card">
              <img 
                src="https://i.postimg.cc/4dp2dmm9/Demet-zdemir.jpg" 
                alt="Conference workshop"
              />
            </div>
          </div>
          <div className="footer_footfash-conference-info">
            <div className="footer_footfash-conf-title">EAGLION creations</div>
            <div className="footer_footfash-conf-description">
              Our AI stylists have been trained on the latest<br />
              fashion trends and style data to deliver smarter,<br />
              more personalized outfit recommendations just for you.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FashionGallery;
