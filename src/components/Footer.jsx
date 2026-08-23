function Footer() {
  return (
    <footer style={{ background: "#0f172a", color: "white", padding: "30px 40px", marginTop: "50px", fontSize: "14px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "20px" }}>
        <div>
          <h3 style={{ color: "#38bdf8", marginBottom: "10px" }}>ADCET Ashta</h3>
          <p>Sant Dnyaneshwar Shikshan Sanstha's</p>
          <p>Annasaheb Dange College of Engineering and Technology</p>
          <p>Ashta, Sangli, Maharashtra - 416301</p>
        </div>
        <div>
          <h4 style={{ color: "#38bdf8", marginBottom: "10px" }}>Quick Links</h4>
          <p>Governance</p>
          <p>Examinations</p>
          <p>Research & Incubation</p>
          <p>Placement Cell</p>
        </div>
      </div>
      <div style={{ borderTop: "1px solid #334155", marginTop: "20px", paddingTop: "15px", textAlign: "center", color: "#94a3b8" }}>
        © 2026 Annasaheb Dange College of Engineering and Technology. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
