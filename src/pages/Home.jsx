import React from "react";
import "../style/HomePage.css";
import { getAuth } from "firebase/auth";

const HomePage = () => {
  const handleLogout = async () => {
    try {
      // Get the Firebase authentication instance (assuming you've initialized it)
      const auth = getAuth();

      // Sign out the user
      await auth.signOut();

      console.log("Logged out successfully!");

      // Optionally, redirect to a login page or clear any local storage data
      window.location.href = "/"; // Redirect to login page
      localStorage.removeItem("userAuthToken"); // Clear local storage token (if applicable)
    } catch (error) {
      console.error("Error logging out:", error);
      // Handle errors appropriately, e.g., display an error message to the user
    }
  };

  return (
    <div className="homepage">
      <header className="header">
        <h1>GreenTech Innovations</h1>
        <p>Innovating for a Greener Tomorrow</p>
      </header>

      <section className="welcome">
        <h2>Welcome to GreenTech Innovations</h2>
        <p>
          At GreenTech Innovations, we are dedicated to creating sustainable and
          eco-friendly technology solutions that help reduce the environmental
          footprint and promote a healthier planet. Join us in our mission to
          innovate for a greener tomorrow.
        </p>
      </section>

      <section className="solutions">
        <h2>Our Solutions</h2>
        <div className="solution">
          <h3>Renewable Energy Systems</h3>
          <p>
            Harness the power of the sun and wind with our cutting-edge solar
            panels and wind turbines. Our renewable energy solutions are
            designed to provide efficient and reliable power for homes,
            businesses, and communities.
          </p>
        </div>
        <div className="solution">
          <h3>Eco-Friendly Transportation</h3>
          <p>
            Discover our range of electric vehicles and public transportation
            options. We are committed to reducing carbon emissions and providing
            sustainable transportation solutions for a cleaner environment.
          </p>
        </div>
        <div className="solution">
          <h3>Smart Home Technology</h3>
          <p>
            Transform your home into an energy-efficient haven with our smart
            home products. From intelligent thermostats to energy-saving
            lighting systems, our technology helps you reduce energy consumption
            and save on utility bills.
          </p>
        </div>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>
            <strong>Innovation:</strong> We are at the forefront of sustainable
            technology, constantly innovating to bring you the latest and most
            effective solutions.
          </li>
          <li>
            <strong>Sustainability:</strong> Our commitment to the environment
            drives everything we do. We prioritize eco-friendly practices and
            products in all aspects of our business.
          </li>
          <li>
            <strong>Community:</strong> We believe in the power of community and
            work closely with local organizations to promote sustainability and
            environmental awareness.
          </li>
        </ul>
      </section>

      <section className="latest-news">
        <h2>Latest News</h2>
        <div className="news-item">
          <h3>GreenTech Innovations Wins Sustainability Award</h3>
          <p>
            We are proud to announce that GreenTech Innovations has been
            recognized for our contributions to sustainable technology with the
            prestigious Green Planet Award.
          </p>
        </div>
        <div className="news-item">
          <h3>New Electric Vehicle Model Launched</h3>
          <p>
            Our latest electric vehicle model, the GT EcoDrive, offers superior
            performance and an extended range, making it easier than ever to go
            green on the road.
          </p>
        </div>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>
          Have questions or want to learn more about our products and services?
          Get in touch with us today!
        </p>
        <p>
          <strong>Email:</strong> info@greentechinnovations.com
        </p>
        <p>
          <strong>Phone:</strong> 1-800-555-1234
        </p>
        <p>
          <strong>Address:</strong> 123 GreenTech Lane, Eco City, GA 30301
        </p>
      </section>

      <footer className="footer">
        <h2>Follow Us</h2>
        <div className="social-media">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <button onClick={handleLogout}>Logout</button>
        <p>
          © 2024 GreenTech Innovations. All rights reserved. |{" "}
          <a href="/privacy-policy">Privacy Policy</a> |{" "}
          <a href="/terms-of-service">Terms of Service</a>
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
