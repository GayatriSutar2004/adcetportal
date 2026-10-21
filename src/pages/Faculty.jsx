import React from "react";
import "../App.css";

function Faculty() {
  const departments = [
    {
      name: "Computer Science & Engineering",
      faculty: [
        {
          name: "Dr. Suhani S. Sayyad",
          designation: "Professor & Head of Department",
          qualification: "B.E., M.Tech. (CSE), Ph.D.",
          expertise: "Information Security, High Performance Computing",
          experience: "16.5 Years",
        },
        {
          name: "Dr. Sandeep G. Sutar",
          designation: "Professor & Associate Dean Academics",
          qualification: "Post Doc (CSE), Ph.D. (CSE), M.E., B.E.",
          expertise: "Cloud Computing, Grid Computing, Big Data, IoT, ML",
          experience: "21 Years",
        },
        {
          name: "Dr. Sachin P. Patil",
          designation: "Professor & Dean E-Governance",
          qualification: "B.E., M.E., Ph.D.",
          expertise: "Cloud Computing, Computer Networks",
          experience: "21 Years",
        },
        {
          name: "Mrs. Ashwini A. Todkar",
          designation: "Assistant Professor",
          qualification: "M.E. (CSE)",
          expertise: "Cloud Computing, Network",
          experience: "12.5 Years",
        },
        {
          name: "Mr. Nasim H. Sayyad",
          designation: "Assistant Professor",
          qualification: "M.E. (CSE)",
          expertise: "Big Data Analytics with R Programming",
          experience: "11 Years",
        },
        {
          name: "Miss Nikita Vikram Shewale",
          designation: "Assistant Professor",
          qualification: "M.Tech (Data Science)",
          expertise: "Data Science, Machine Learning",
          experience: "2.5 Years",
        },
      ],
    },

    {
      name: "Artificial Intelligence & Data Science",
      faculty: [
        {
          name: "Dr. Asma A. Shaikh",
          designation: "Professor & Head of Department",
          qualification: "Post Doc (CSE), Ph.D. (CSE), MCA, M.E., AMIE",
          expertise: "Artificial Intelligence, Data Science, Image Processing",
          experience: "18 Years",
        },
        {
          name: "Dr. Krishna Kumar L.",
          designation: "Professor",
          qualification: "Ph.D. (AI & IoT)",
          expertise: "Data Science and Data Warehousing",
          experience: "16 Years",
        },
        {
          name: "Miss. Sonali Satish Malame",
          designation: "Assistant Professor",
          qualification: "M.Tech (CSE)",
          expertise: "Web Development, Machine Learning, AI",
          experience: "7.9 Years",
        },
        {
          name: "Mrs. Prajakta Satyavijay Dabade",
          designation: "Assistant Professor",
          qualification: "M.Tech (CSE)",
          expertise: "Machine Learning, Artificial Intelligence",
          experience: "4 Years",
        },
      ],
    },

    {
      name: "CSE (IoT & Cyber Security Including Blockchain)",
      faculty: [
        {
          name: "Dr. Tahseen A. Mulla",
          designation: "Associate Professor & Head of Department",
          qualification: "M.Tech, Ph.D. (CSE)",
          expertise: "Data Science, Java & Web Technologies, Cloud Computing",
          experience: "14 Years",
        },
        {
          name: "Dr. Shabanam Khalid Shikalgar",
          designation: "Professor",
          qualification: "Ph.D.",
          expertise: "Image Processing, AI",
          experience: "20 Years",
        },
        {
          name: "Mrs. Amruta Rakesh Patil",
          designation: "Assistant Professor",
          qualification: "M.E. (CSE)",
          expertise: "Java Programming, Cloud Computing",
          experience: "6 Years",
        },
        {
          name: "Mrs. Prachi Shardul Pathak",
          designation: "Assistant Professor",
          qualification: "M.Tech (CSE)",
          expertise: "Computer Network, Cyber Security, Data Structures, NLP",
          experience: "6 Years",
        },
        {
          name: "Mrs. Madhuri J. Siddharapu",
          designation: "Assistant Professor",
          qualification: "M.Tech",
          expertise: "Internet of Things, Computer Networks, Operating Systems",
          experience: "4 Years",
        },
      ],
    },

    {
      name: "Robotics & Artificial Intelligence",
      faculty: [
        {
          name: "Dr. Sunita Sunil Shinde",
          designation: "Professor & Head of Department",
          qualification: "B.E., M.E., Ph.D.",
          expertise: "Wireless Communication and IoT",
          experience: "25 Years",
        },
        {
          name: "Prof. Makarand Madhav Kolekar",
          designation: "Assistant Professor",
          qualification: "M.Tech",
          expertise: "Manufacturing Engineering, AI & Data Science",
          experience: "13 Years",
        },
        {
          name: "Mr. Yogesh V. Koli",
          designation: "Assistant Professor",
          qualification: "M.E. (Electronics)",
          expertise: "Industrial Robotics & Automation, Embedded Systems",
          experience: "12 Years",
        },
        {
          name: "Mrs. Shital D. Kolekar",
          designation: "Assistant Professor",
          qualification: "M.E. (CSE), Ph.D. (Pursuing)",
          expertise: "Cloud Computing, IoT",
          experience: "7.5 Years",
        },
        {
          name: "Mrs. Rutuja Suraj Pawar",
          designation: "Assistant Professor",
          qualification: "B.E. (Electrical), M.Tech (Electrical Power System)",
          expertise: "Electric Power System",
          experience: "6 Years",
        },
      ],
    },

    {
      name: "Mechanical Engineering",
      faculty: [
        {
          name: "Dr. L. Y. Waghmode",
          designation: "Professor & Head of Department",
          qualification: "B.E., M.E., Ph.D. (Mechanical Engineering)",
          expertise: "Design Engineering, Tribology, Mechanical System Design",
          experience: "23 Years",
        },
        {
          name: "Dr. A. A. Patil",
          designation: "Professor",
          qualification: "M.E., Ph.D. (Mechanical)",
          expertise: "Thermal Engineering, Heat Transfer, Energy Audit",
          experience: "20 Years",
        },
        {
          name: "Prof. S. R. Patil",
          designation: "Assistant Professor",
          qualification: "M.Tech (Mechanical)",
          expertise: "CAD/CAM, Manufacturing Processes, Fluid Power Systems",
          experience: "12 Years",
        },
        {
          name: "Prof. P. V. Desai",
          designation: "Assistant Professor",
          qualification: "M.E. (Mechanical Design)",
          expertise: "Finite Element Analysis, Machine Design",
          experience: "9.5 Years",
        },
      ],
    },

    {
      name: "Civil Engineering",
      faculty: [
        {
          name: "Dr. S. S. Mohite",
          designation: "Associate Professor & Head of Department",
          qualification: "M.E. (Civil), Ph.D. (Structural Engineering)",
          expertise: "Structural Dynamics, Concrete Technology, GIS",
          experience: "19 Years",
        },
        {
          name: "Dr. V. M. Jamadar",
          designation: "Associate Professor",
          qualification: "M.Tech, Ph.D. (Environmental Engineering)",
          expertise: "Water & Wastewater Treatment, Fluid Mechanics",
          experience: "16 Years",
        },
        {
          name: "Prof. D. N. Mane",
          designation: "Assistant Professor",
          qualification: "M.Tech (Structures)",
          expertise: "Design of Steel Structures, Geotechnical Engineering",
          experience: "10 Years",
        },
        {
          name: "Prof. S. A. Kadam",
          designation: "Assistant Professor",
          qualification: "M.E. (Construction Management)",
          expertise: "Surveying, Construction Project Management",
          experience: "8 Years",
        },
      ],
    },

    {
      name: "Food Technology",
      faculty: [
        {
          name: "Dr. P. A. Jadhav",
          designation: "Associate Professor & Head of Department",
          qualification: "M.Tech (Food Tech), Ph.D. (Food Processing)",
          expertise: "Food Quality & Safety, Post-Harvest Processing",
          experience: "15 Years",
        },
        {
          name: "Prof. R. S. Kulkarni",
          designation: "Assistant Professor",
          qualification: "M.Tech (Food Engineering)",
          expertise: "Food Preservation, Bakery & Confectionery Technology",
          experience: "7 Years",
        },
        {
          name: "Prof. M. B. More",
          designation: "Assistant Professor",
          qualification: "M.Sc. (Food Science & Nutrition)",
          expertise: "Food Chemistry, Fermentation Technology",
          experience: "5.5 Years",
        },
      ],
    },

    {
      name: "Electrical Engineering",
      faculty: [
        {
          name: "Dr. R. A. Thorat",
          designation: "Professor & Head of Department",
          qualification: "B.E., M.E., Ph.D. (Electrical Engineering)",
          expertise: "Power Electronics, Renewable Energy Systems, Smart Grids",
          experience: "22 Years",
        },
        {
          name: "Dr. B. S. Chavan",
          designation: "Associate Professor",
          qualification: "M.Tech (Power System), Ph.D.",
          expertise: "High Voltage Engineering, Power System Protection",
          experience: "17 Years",
        },
        {
          name: "Prof. S. S. Shinde",
          designation: "Assistant Professor",
          qualification: "M.E. (Electrical Power System)",
          expertise: "Control Systems, Electrical Machines & Drives",
          experience: "11 Years",
        },
        {
          name: "Prof. A. R. Bhosale",
          designation: "Assistant Professor",
          qualification: "M.Tech (Power Quality)",
          expertise: "Industrial Automation, Microgrid Control",
          experience: "6.5 Years",
        },
      ],
    },

    {
      name: "Electronics & Telecommunication Engineering",
      faculty: [
        {
          name: "Dr. N. B. Kamble",
          designation: "Professor & Head of Department",
          qualification: "B.E., M.E., Ph.D. (E&TC)",
          expertise: "Signal & Image Processing, Very Large Scale Integration (VLSI)",
          experience: "24 Years",
        },
        {
          name: "Dr. V. S. Mane",
          designation: "Associate Professor",
          qualification: "M.E., Ph.D. (Electronics)",
          expertise: "Embedded Systems, Antenna & Wave Propagation",
          experience: "18 Years",
        },
        {
          name: "Prof. G. D. Salunkhe",
          designation: "Assistant Professor",
          qualification: "M.Tech (VLSI & Embedded Systems)",
          expertise: "Microcontrollers, Digital System Design, IoT",
          experience: "10 Years",
        },
        {
          name: "Prof. P. P. Gaikwad",
          designation: "Assistant Professor",
          qualification: "M.E. (Communication Systems)",
          expertise: "Optical Fiber Communication, Wireless Sensor Networks",
          experience: "8.5 Years",
        },
      ],
    },

    {
      name: "Basic Sciences & Humanities",
      faculty: [
        {
          name: "Dr. Santosh Shivaji Desai",
          designation: "Associate Professor & Head of Department",
          qualification: "M.Sc. (Mathematics), Ph.D.",
          expertise: "Mathematics, Fuzzy Choice Theory",
          experience: "16 Years",
        },
        {
          name: "Dr. Shekhar Balkrishna Mali",
          designation: "Assistant Professor",
          qualification: "M.A. (English), Ph.D., SET",
          expertise: "Communication Skills, English Language & Literature",
          experience: "11 Years",
        },
        {
          name: "Dr. Ruturaj Ramchandra Kuldeep",
          designation: "Assistant Professor",
          qualification: "M.A. (English), Ph.D., SET, NET",
          expertise: "Professional Communication, British Literature",
          experience: "6 Years",
        },
        {
          name: "Dr. Pradnya Gulabrao Raje",
          designation: "Assistant Professor",
          qualification: "M.Sc., Ph.D.",
          expertise: "Material Science",
          experience: "8 Years",
        },
        {
          name: "Dr. Aniket Sarjerao Todkar",
          designation: "Assistant Professor",
          qualification: "M.Sc. (Maths), NET(JRF)-CSIR, Ph.D.",
          expertise: "Multi-objective Optimization, Evolutionary Algorithms",
          experience: "10 Years",
        },
      ],
    },

    {
      name: "Aeronautical Engineering",
      faculty: [
        {
          name: "Mr. Basithrahman A.",
          designation: "Assistant Professor & Head In-charge",
          qualification: "M.E. (Aeronautical Engineering)",
          expertise: "Composite Materials, Aircraft Structures, FEM",
          experience: "7 Years",
        },
        {
          name: "Mr. Karthik Pullela",
          designation: "Assistant Professor",
          qualification: "M.Tech",
          expertise: "Aerospace Propulsion, CFD, Aircraft Design",
          experience: "1 Year",
        },
        {
          name: "Prof. Mohammed Hashim Y.",
          designation: "Assistant Professor",
          qualification: "M.E.",
          expertise: "UAV and Flight Dynamics",
          experience: "11 Years",
        },
        {
          name: "Prof. Arun Nema",
          designation: "Assistant Professor",
          qualification: "M.Tech",
          expertise: "Aerodynamics, Computational Fluid Dynamics, Fluid Mechanics",
          experience: "14 Years",
        },
      ],
    },

    {
      name: "Bachelor of Computer Application (BCA)",
      faculty: [
        {
          name: "Mr. Prakash Phanchu Wadkar",
          designation: "Head of Department",
          qualification: "MCA",
          expertise: "Machine Learning, Python Programming",
          experience: "24 Years",
        },
        {
          name: "Mrs. Ketaki Rajeshkumar Ghorpade",
          designation: "Assistant Professor",
          qualification: "MCA",
          expertise: "Android Programming",
          experience: "3 Years",
        },
        {
          name: "Miss Nilam Nivrutti Patil",
          designation: "Assistant Professor",
          qualification: "MCA",
          expertise: "Web Development",
          experience: "1 Year",
        },
        {
          name: "Prof. Piusha Uttam Magdum",
          designation: "Assistant Professor",
          qualification: "MCA",
          expertise: "Computer Applications",
          experience: "2 Years",
        },
        {
          name: "Prof. Akash Vikas Rakate",
          designation: "Assistant Professor",
          qualification: "MCA",
          expertise: "Web Development",
          experience: "1.7 Years",
        },
      ],
    },

    {
      name: "Bachelor of Business Administration (BBA)",
      faculty: [
        {
          name: "Mr. Rohit Ganpat Khade",
          designation: "Assistant Professor & Coordinator",
          qualification: "MBA (Marketing)",
          expertise: "Marketing Management",
          experience: "8 Years",
        },
        {
          name: "Prof. Aman Shakil Sayyad",
          designation: "Assistant Professor",
          qualification: "MBA, NET, SET",
          expertise: "HRM and Operations",
          experience: "3 Years",
        },
      ],
    },
  ];

  return (
    <main className="faculty-page">
      {/* Header */}
      <header className="faculty-header">
        <h1>Faculty Directory</h1>
        <p>
          Annasaheb Dange College of Engineering and Technology (ADCET), Ashta
          has a team of experienced and qualified faculty members and Heads of
          Departments across diverse technical and management disciplines.
        </p>
      </header>

      {/* Faculty Departments */}
      <section className="faculty-content">
        {departments.map((department, departmentIndex) => (
          <section
            className="faculty-department"
            key={departmentIndex}
          >
            <div className="department-heading">
              <h2>{department.name}</h2>
              <span>{department.faculty.length} Faculty Members Listed</span>
            </div>

            <div className="faculty-grid">
              {department.faculty.map((member, index) => (
                <article className="faculty-card" key={index}>
                  <div className="faculty-avatar">
                    {member.name
                      .replace("Dr. ", "")
                      .replace("Mrs. ", "")
                      .replace("Mr. ", "")
                      .replace("Miss. ", "")
                      .replace("Miss ", "")
                      .replace("Prof. ", "")
                      .charAt(0)}
                  </div>

                  <div className="faculty-info">
                    <h3>{member.name}</h3>

                    <p className="faculty-designation">
                      {member.designation}
                    </p>

                    <div className="faculty-details">
                      <p>
                        <strong>Qualification:</strong>{" "}
                        {member.qualification}
                      </p>

                      <p>
                        <strong>Area of Expertise:</strong>{" "}
                        {member.expertise}
                      </p>

                      <p>
                        <strong>Experience:</strong>{" "}
                        {member.experience}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </section>

      {/* Faculty Note */}
      <section className="faculty-note">
        <h2>Academic Leadership & Teaching Excellence</h2>
        <p>
          ADCET is supported by dedicated HODs, Professors, and Assistant
          Professors who lead teaching, academic research, innovation, and industry
          collaboration across undergraduate and postgraduate programs.
        </p>
      </section>
    </main>
  );
}

export default Faculty;
