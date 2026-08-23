function Home() {
  const recruiters = [
    { name: "Infosys", offers: "160+ Offers" },
    { name: "Capgemini", offers: "130+ Offers" },
    { name: "KPIT", offers: "45+ Offers" },
    { name: "Tech Mahindra", offers: "35+ Offers" },
    { name: "Accenture", offers: "30+ Offers" },
    { name: "Persistent", offers: "30+ Offers" },
    { name: "Cognizant", offers: "22+ Offers" },
    { name: "TATA Power", offers: "15+ Offers" },
  ];

  return (
    <div className="container">
      {/* Hero Welcome Banner */}
      <div
        style={{
          background: "linear-gradient(135deg, #0284c7 0%, #0f172a 100%)",
          color: "white",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
        }}
      >
        <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
          Welcome to ADCET Autonomous Portal
        </h1>
        <p style={{ fontSize: "16px", color: "#e2e8f0", maxWidth: "700px" }}>
          Empowering future engineers through innovation, research, and industry-oriented education.
        </p>
        <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
          <button style={{ padding: "10px 20px", background: "#fde047", border: "none", borderRadius: "5px", fontWeight: "bold", cursor: "pointer" }}>
            Explore Admissions 2026
          </button>
          <button style={{ padding: "10px 20px", background: "transparent", border: "1px solid white", color: "white", borderRadius: "5px", fontWeight: "bold", cursor: "pointer" }}>
            Virtual Campus Tour
          </button>
        </div>
      </div>

      {/* Top Recruiters Section */}
      <div className="recruiters-section">
        <h2 style={{ color: "#1e3a8a", borderBottom: "2px solid #0284c7", paddingBottom: "8px", display: "inline-block" }}>
          Our Top Recruiters
        </h2>
        <div className="recruiter-grid">
          {recruiters.map((item, index) => (
            <div key={index} className="recruiter-card">
              <div style={{ fontSize: "18px", marginBottom: "5px" }}>🏢</div>
              {item.name}
              <span>{item.offers}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
