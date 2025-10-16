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
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 40px;
          color: #666;
        }
        .footer_footfash-hero-text {
          font-size: clamp(32px, 5vw, 56px);
          line-height: 1.2;
          font-weight: 300;
          margin-bottom: 40px;
          color: #888;
        }
        .footer_footfash-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 18px;
          color: #fff;
          text-decoration: none;
          transition: opacity 0.3s;
          margin-bottom: 100px;
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
          font-size: 13px;
          color: #666;
          margin-bottom: 15px;
          letter-spacing: 1px;
        }
        .footer_footfash-conf-description {
          font-size: 15px;
          line-height: 1.8;
          color: #888;
        }
        @media (max-width: 768px) {
          .footer_footfash-gallery-section {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .footer_footfash-image-gallery {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
          }
          .footer_footfash-image-card {
            flex: 1 1 45%;
            min-width: 150px;
            height: 200px;
          }
        }
        @media (max-width: 480px) {
          .footer_footfash-image-gallery {
            flex-direction: column;
            align-items: center;
          }
          .footer_footfash-image-card {
            flex: 1 1 100%;
            width: 100%;
            max-width: 300px;
            height: 300px;
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