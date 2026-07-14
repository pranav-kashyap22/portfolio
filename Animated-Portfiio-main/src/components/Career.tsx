import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Secondary Schooling (Class X)</h4>
                <h5>CBSE Board</h5>
              </div>
              <h3>CBSE · 84.4%</h3>
            </div>
            <p>
              Completed secondary education with a strong academic performance, scoring 84.4% and establishing a foundation in science and mathematics.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Secondary (Class XII)</h4>
                <h5>BBOSE Board</h5>
              </div>
              <h3>BBOSE · 79.4%</h3>
            </div>
            <p>
              Completed high school education with science and mathematics specialization, achieving 79.4%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science & Engineering</h4>
                <h5>Preparing to Pursue CSE</h5>
              </div>
              <h3>Planned · 2026 →</h3>
            </div>
            <p>
              Focusing on self-paced preparation for B.Tech CSE, building a strong core in programming logic, algorithms, and system concepts.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cybersecurity & Tech Credentials</h4>
                <h5>Cisco, Deloitte, Tata, Meta</h5>
              </div>
              <h3>2025 - 2026</h3>
            </div>
            <p>
              Completed job simulations and courses including Cisco Introduction to Cybersecurity, Deloitte Cyber & Data Analytics Simulations, Tata/Forage Cybersecurity (IAM), and Meta Advertising Fundamentals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
