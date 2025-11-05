import React from "react";


const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-hero">
        {/* use public/ path directly */}
        <img src="/Farmfreshlogo.png" alt="Farm Soul Logo" className="about-logo" />
        <h1>Farm Soul 🌱</h1>
        <p>"Naturally Grown and Honesty Served"</p>
      </div>

      <div className="about-content">
        <section className="about-card">
          <h2>🌍 Our Mission</h2>
          <p>
            Our mission is to empower farmers by giving them fair prices while
            delivering fresh, organic, and chemical-free produce directly to
            your doorstep.
          </p>
        </section>

        <section className="about-card">
          <h2>🤝 Why Choose Us?</h2>
          <ul>
            <li>Direct connection between farmers and consumers</li>
            <li>Fresh, organic, and naturally grown produce</li>
            <li>Fair trade and transparent pricing</li>
            <li>Support for sustainable farming practices</li>
          </ul>
        </section>

        <section className="about-card">
          <h2>🚜 Our Farmers</h2>
          <p>
            Farm Soul proudly works with passionate farmers across Maharashtra
            and India, who believe in cultivating with care, responsibility, and
            respect for nature.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;

