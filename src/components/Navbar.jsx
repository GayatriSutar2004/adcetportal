import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      {/* Top Utility Links Bar */}
      <div className="top-utility-bar">
        <span>DTE Code: 06283</span>
        <div>
          <a href="#videos">Videos</a>
          <a href="#grievance">Online Grievance</a>
          <a href="#achievements">Achievements</a>
          <a href="#press">Press Media</a>
          <a href="#incubation">Incubation</a>
        </div>
      </div>

      {/* Main Branding Header */}
      <div className="brand-header">
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <div style={{ fontSize: "36px", color: "#1e3a8a" }}>🏛️</div>
          <div className="brand-info">
            <h3>Sant Dnyaneshwar Shikshan Sanstha's</h3>
            <h1>Annasaheb Dange College of Engineering and Technology (ADCET), Ashta</h1>
            <p>An Empowered Autonomous Institute | Affiliated to Shivaji University | NAAC 'A++' Grade</p>
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <h2 style={{ color: "#0284c7", fontWeight: "900" }}>ADCET</h2>
        </div>
      </div>

      {/* Main Navigation Menu */}
      <nav className="main-navbar">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT US</Link>
        <Link to="/admissions">ADMISSION</Link>
        <Link to="/courses">DEPARTMENTS</Link>
        <Link to="/faculty">FACULTY</Link>
        <Link to="/notices">NOTICES</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contact">CONTACT</Link>
      </nav>

      {/* Secondary Quick Links Bar */}
      <div className="sub-nav">
        <a href="#news">All News</a> |
        <a href="#approval">AICTE Approvals</a> |
        <a href="#nirf">NIRF</a> |
        <a href="#status">Accreditation Status</a> |
        <a href="#rti">RTI</a> |
        <a href="#alumni">Alumni</a> |
        <a href="#erp" style={{ color: "#fde047", fontWeight: "bold" }}>ERP Login</a>
      </div>

      {/* Live News Ticker */}
      <div className="news-ticker">
        <div className="news-badge">LATEST NEWS 📢</div>
        <div className="ticker-text">
          ADCET Hackathon 2026 – Season 3 (Sustainable Development Goals) | Admissions Open for Academic Year 2026-27 | Scholarship Forms Available
        </div>
      </div>
    </header>
  );
}

export default Navbar;
