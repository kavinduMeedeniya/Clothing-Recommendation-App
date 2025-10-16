import React from 'react';

const FashionCRM = () => {
  const styles = {
    container: {
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
      background: '#f5f5f5',
      padding: '60px 20px',
      color: '#333',
    },
    innerContainer: {
      maxWidth: '1100px',
      margin: '0 auto',
    },
    badge: {
      display: 'inline-block',
      padding: '6px 16px',
      background: 'white',
      border: '1px solid #e0e0e0',
      borderRadius: '20px',
      fontSize: '0.85rem',
      color: '#666',
      marginBottom: '30px',
    },
    hero: {
      textAlign: 'center',
      marginBottom: '60px',
    },
    title: {
      fontSize: '3rem',
      fontWeight: '700',
      color: '#1a1a1a',
      lineHeight: '1.2',
      marginBottom: '20px',
    },
    subtitle: {
      fontSize: '1rem',
      color: '#666',
      lineHeight: '1.6',
    },
    caseStudies: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '20px',
      marginBottom: '10px',
    },
    caseStudy: {
      background: '#c5c5c5',
      borderRadius: '10px',
      overflow: 'hidden',
      position: 'relative',
    },
    caseStudyLarge: {
      gridRow: 'span 2',
    },
    caseStudyImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
    },
    '@media (max-width: 768px)': {
      title: {
        fontSize: '2rem',
      },
      caseStudies: {
        gridTemplateColumns: '1fr',
      },
      caseStudyLarge: {
        gridRow: 'span 1',
      },
    },
  };

  // Helper function to handle responsive styles
  const getResponsiveStyle = (baseStyle, responsiveStyle) => {
    return window.innerWidth <= 768 ? { ...baseStyle, ...responsiveStyle } : baseStyle;
  };

  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>
        <div style={styles.hero}>
          <div style={styles.badge}>EAGLION</div>
          <h1 style={styles.title}>The fashion statement<br />trusted by thousands.</h1>
          <p style={styles.subtitle}>
            Discover how leading fashion labels leverage our tools<br />
            to bring their creative visions to life, connect with their audience, and stay ahead in a constantly evolving industry.
          </p>
        </div>

        <div style={styles.caseStudies}>
          <div style={{ ...styles.caseStudy, ...styles.caseStudyLarge }}>
            <img 
              src="https://i.postimg.cc/nzd39Sys/download-1.jpg" 
              alt="Pallet case study" 
              style={styles.caseStudyImage}
            />
          </div>

          <div style={styles.caseStudy}>
            <img 
              src="https://i.postimg.cc/kXmjwkcH/HRITHIK-5mr25.jpg" 
              alt="Deel case study" 
              style={styles.caseStudyImage}
            />
          </div>

          <div style={styles.caseStudy}>
            <img 
              src="https://i.postimg.cc/FHDJdnG6/download-15.jpg" 
              alt="Qb case study" 
              style={styles.caseStudyImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FashionCRM;