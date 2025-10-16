import React, { useState } from 'react';
import axios from 'axios';
import '../cssfiles/RecommendationForm.css';

const API_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000';

const RecommendationForm = () => {
  const [formData, setFormData] = useState({
    gender: 'Female',
    occasion: 'Office wear',
    preferred_color: 'Blue',
    budget: 'Under $60',
    review: 'The previous dress was elegant but too warm for the season. I prefer lighter fabric this time.'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [results, setResults] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResults(null);

    try {
      const response = await axios.post(`${API_URL}/recommend`, formData);
      setResults(response.data);
    } catch (err) {
      setError(err.response?.data?.detail || 'An error occurred. Check if backend is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="recommendation-app">
      <div className="app-container">
        <header className="app-header">
          <h1 className="app-title">Fashion Recommendation Engine</h1>
          <p className="app-subtitle">AI-Powered Personalized Clothing Suggestions</p>
        </header>

        <div className="content-grid">
          <section className="form-section">
            <div className="form-container">
              <h2 className="section-title">Preference Configuration</h2>
              <form onSubmit={handleSubmit} className="recommendation-form">
                <div className="form-row">
                  <div className="form-field">
                    <label className="field-label">
                      <span className="label-text">Gender</span>
                      <select 
                        name="gender" 
                        value={formData.gender} 
                        onChange={handleChange}
                        className="field-input select-input"
                      >
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="Other">Other</option>
                      </select>
                    </label>
                  </div>

                  <div className="form-field">
                    <label className="field-label">
                      <span className="label-text">Budget Range</span>
                      <input
                        type="text"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="field-input"
                        placeholder="Under $60"
                      />
                    </label>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label className="field-label">
                      <span className="label-text">Occasion Type</span>
                      <input
                        type="text"
                        name="occasion"
                        value={formData.occasion}
                        onChange={handleChange}
                        className="field-input"
                        placeholder="Office wear"
                      />
                    </label>
                  </div>

                  <div className="form-field">
                    <label className="field-label">
                      <span className="label-text">Preferred Color</span>
                      <input
                        type="text"
                        name="preferred_color"
                        value={formData.preferred_color}
                        onChange={handleChange}
                        className="field-input"
                        placeholder="Blue"
                      />
                    </label>
                  </div>
                </div>

                <div className="form-field full-width">
                  <label className="field-label">
                    <span className="label-text">Style Feedback & Preferences</span>
                    <textarea
                      name="review"
                      value={formData.review}
                      onChange={handleChange}
                      rows="4"
                      className="field-input textarea-input"
                      placeholder="Share your thoughts on previous purchases and style preferences..."
                    />
                  </label>
                </div>

                <div className="form-actions">
                  <button 
                    type="submit" 
                    disabled={loading}
                    className={`submit-button ${loading ? 'loading' : ''}`}
                  >
                    <span className="button-text">
                      {loading ? 'Analyzing Preferences...' : 'Generate Recommendations'}
                    </span>
                    {loading && <div className="button-loader"></div>}
                  </button>
                </div>
              </form>
            </div>
          </section>

          {error && (
            <div className="error-container">
              <div className="error-alert">
                <span className="error-icon">⚠</span>
                <div className="error-content">
                  <h3 className="error-title">Request Failed</h3>
                  <p className="error-message">{error}</p>
                </div>
              </div>
            </div>
          )}

          {results && (
            <section className="results-section">
              <div className="results-header">
                <h2 className="section-title">Analysis Results</h2>
                <p className="results-subtitle">Personalized recommendations based on your preferences</p>
              </div>

              <div className="results-grid">
                <div className="analysis-card">
                  <div className="card-header">
                    <h3 className="card-title">Sentiment Analysis</h3>
                    <div className="card-metrics">
                      <div className="metric positive">
                        <span className="metric-value">{results.sentiment_analysis.positive}%</span>
                        <span className="metric-label">Positive</span>
                      </div>
                      <div className="metric negative">
                        <span className="metric-value">{results.sentiment_analysis.negative}%</span>
                        <span className="metric-label">Negative</span>
                      </div>
                    </div>
                  </div>
                  <div className="card-content">
                    <div className="insights-box">
                      <h4 className="insights-title">Key Insights</h4>
                      <p className="insights-text">{results.sentiment_analysis.insights}</p>
                    </div>
                  </div>
                </div>

                <div className="recommendations-card">
                  <div className="card-header">
                    <h3 className="card-title">Recommended Items</h3>
                    <span className="items-count">{results.recommended_clothing.length} suggestions</span>
                  </div>
                  <div className="card-content">
                    <ul className="recommendations-list">
                      {results.recommended_clothing.map((item, index) => (
                        <li key={index} className="recommendation-item">
                          <div className="item-index">{(index + 1).toString().padStart(2, '0')}</div>
                          <div className="item-text">{item}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="review-card full-width">
                  <div className="card-header">
                    <h3 className="card-title">Generated Review</h3>
                    <span className="review-badge">AI Generated</span>
                  </div>
                  <div className="card-content">
                    <div className="review-content">
                      <p className="review-text">{results.auto_generated_review_preview}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecommendationForm;