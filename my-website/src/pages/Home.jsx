import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <p className="hero-subtitle">
              // Empowering Communities Through Action
            </p>
            <h1 className="hero-title">
              Where Compassion
              <br />
              Meets Community
              <br />
              Development
            </h1>
            <p className="hero-description">
              Building sustainable futures through education, healthcare,
              <br />
              and community empowerment initiatives across Ghana.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">
                Get Involved <span>→</span>
              </button>
              <button className="btn-secondary">View Our Programs</button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Ticker */}
      <div className="services-ticker">
        <div className="ticker-content">
          <span>✦ Education Support</span>
          <span>✦ Healthcare Initiatives</span>
          <span>✦ Community Development</span>
          <span>✦ Youth Empowerment</span>
          <span>✦ Women's Programs</span>
          <span>✦ Environmental Projects</span>
          <span>✦ Education Support</span>
          <span>✦ Healthcare Initiatives</span>
          <span>✦ Community Development</span>
          <span>✦ Youth Empowerment</span>
          <span>✦ Women's Programs</span>
          <span>✦ Environmental Projects</span>
        </div>
      </div>

      {/* About Section */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-images">
            <div className="image-grid">
              <div className="image-card main-image">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500"
                  alt="Community gathering"
                />
              </div>
              <div className="image-card secondary-image">
                <img
                  src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=500"
                  alt="Education program"
                />
              </div>
              <div className="image-card tertiary-image">
                <img
                  src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=500"
                  alt="Healthcare support"
                />
              </div>
              <div className="decorative-circle"></div>
              <div className="decorative-plus">+</div>
            </div>
          </div>

          <div className="about-content">
            <p className="section-subtitle">// About Us</p>
            <h2 className="section-title">
              Transforming <span className="highlight">Lives</span>
              <br />
              <span className="highlight-secondary">
                into Sustainable Futures
              </span>
            </h2>
            <p className="section-description">
              The Hulede Foundation is dedicated to creating lasting change
              through comprehensive community development programs that address
              education, healthcare, and economic empowerment.
            </p>

            <div className="stats-grid">
              <div className="stat-item">
                <h3>500+</h3>
                <p>Lives Impacted</p>
              </div>
              <div className="stat-item">
                <h3>20+</h3>
                <p>Active Projects</p>
              </div>
              <div className="stat-item">
                <h3>95%</h3>
                <p>Community Satisfaction</p>
              </div>
            </div>

            <div className="founder-signature">
              <p className="signature-name">Dr. Emmanuel Hulede</p>
              <p className="signature-title">Founder & Executive Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="programs-section">
        <div className="programs-header">
          <div>
            <p className="section-subtitle">// Our Programs</p>
            <h2 className="section-title">
              Programs We Offer to
              <br />
              <span className="highlight-secondary">Elevate Communities</span>
            </h2>
          </div>
          <button className="btn-primary">View All Programs</button>
        </div>

        <div className="programs-grid">
          <div className="program-card">
            <div className="program-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  d="M12 14l9-5-9-5-9 5 9 5z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3>Education Support</h3>
            <p>
              Providing scholarships, learning materials, and infrastructure to
              ensure quality education for underprivileged children in rural
              communities.
            </p>
            <a href="#" className="learn-more">
              Learn more →
            </a>
          </div>

          <div className="program-card">
            <div className="program-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3>Healthcare Initiatives</h3>
            <p>
              Delivering essential medical services, health education, and
              preventive care programs to improve community health outcomes
              across Ghana.
            </p>
            <a href="#" className="learn-more">
              Learn more →
            </a>
          </div>

          <div className="program-card">
            <div className="program-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3>Community Development</h3>
            <p>
              Empowering communities through skills training, economic
              development programs, and infrastructure projects that create
              lasting impact.
            </p>
            <a href="#" className="learn-more">
              Learn more →
            </a>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="process-header">
          <p className="section-subtitle">// Our Approach</p>
          <h2 className="section-title">
            Our Proven{" "}
            <span className="highlight-secondary">Impact Process</span>
          </h2>
        </div>

        <div className="process-steps">
          <div className="process-step">
            <div className="step-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="step-number">01</span>
            </div>
            <h3>Assessment</h3>
            <p>
              Identifying community needs through comprehensive surveys and
              stakeholder engagement.
            </p>
          </div>

          <div className="process-connector"></div>

          <div className="process-step">
            <div className="step-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="step-number">02</span>
            </div>
            <h3>Planning</h3>
            <p>
              Developing tailored strategies with measurable goals and community
              collaboration.
            </p>
          </div>

          <div className="process-connector"></div>

          <div className="process-step">
            <div className="step-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="step-number">03</span>
            </div>
            <h3>Implementation</h3>
            <p>
              Executing programs with local partners and continuous monitoring
              for quality assurance.
            </p>
          </div>

          <div className="process-connector"></div>

          <div className="process-step">
            <div className="step-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="step-number">04</span>
            </div>
            <h3>Sustainable Impact</h3>
            <p>
              Measuring outcomes and ensuring long-term sustainability through
              community ownership.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Ticker */}
      <div className="services-ticker bottom-ticker">
        <div className="ticker-content">
          <span>✦ Education Support</span>
          <span>✦ Healthcare Initiatives</span>
          <span>✦ Community Development</span>
          <span>✦ Youth Empowerment</span>
          <span>✦ Women's Programs</span>
          <span>✦ Environmental Projects</span>
          <span>✦ Education Support</span>
          <span>✦ Healthcare Initiatives</span>
          <span>✦ Community Development</span>
          <span>✦ Youth Empowerment</span>
          <span>✦ Women's Programs</span>
          <span>✦ Environmental Projects</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
