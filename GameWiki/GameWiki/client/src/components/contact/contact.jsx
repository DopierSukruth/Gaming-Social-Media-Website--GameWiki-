import React from "react";
import { Link } from "react-router-dom";
import './contact.css';

function ContactUs() {
  const styles = {
    body: {
      backgroundColor: "#121212",
      color: "white",
      fontFamily: "Arial, sans-serif",
      padding: "50px",
      minHeight: "100vh",
      width : "100%",
    },
    container: {
      width: "100%",
      margin: "20px auto",
      padding: "20px",
      backgroundColor: "#1c1c1c",
      borderRadius: "10px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
    },
    header: {
      color: "#00d8ff",
      marginBottom: "20px",
    },
    section: {
      marginBottom: "30px",
    },
    contactList: {
      listStyleType: "none",
      padding: "0",
    },
    contactItem: {
      backgroundColor: "#333333",
      border: "1px solid #444444",
      borderRadius: "8px",
      marginBottom: "10px",
      padding: "15px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    twoColumns: {
      display: "flex",
      gap: "20px",
      marginTop: "20px",
    },
    column: {
      flex: 1,
      backgroundColor: "#1c1c1c",
      borderRadius: "10px",
      padding: "20px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
    },
    email: {
      marginBottom: "15px",
      fontSize: "1rem",
      backgroundColor: "#333333",
      padding: "10px",
      borderRadius: "8px",
      border: "1px solid #444444",
      color: "white",
    },
    socialLinks: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    socialButton: {
      padding: "10px",
      borderRadius: "8px",
      border: "none",
      color: "white",
      backgroundColor: "#00d8ff",
      fontWeight: "bold",
      textAlign: "center",
      textDecoration: "none",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    socialButtonHover: {
      backgroundColor: "#008cbf",
    },
  };

  return (
    <div style={styles.body}>
      <Link to="/home" className="home-button">
        Home
      </Link>
      <div style={styles.container}>
        <h1 style={styles.header}>Contact Us</h1>

        {/* Important Numbers Section */}
        <div style={styles.section}>
          <h2 style={styles.header}>Important Numbers</h2>
          <ul style={styles.contactList}>
            <li style={styles.contactItem}>
              <span>Customer Support</span>
              <span>+1 800-123-4567</span>
            </li>
            <li style={styles.contactItem}>
              <span>Technical Support</span>
              <span>+1 800-987-6543</span>
            </li>
            <li style={styles.contactItem}>
              <span>Emergency Hotline</span>
              <span>+1 911</span>
            </li>
            <li style={styles.contactItem}>
              <span>Sales Department</span>
              <span>+1 800-555-7890</span>
            </li>
          </ul>
        </div>

        {/* Emails and Socials Section */}
        <div style={styles.twoColumns}>
          {/* Email Section */}
          <div style={styles.column}>
            <h2 style={styles.header}>Our Email Accounts</h2>
            <div style={styles.email}>support@gamewiki.com</div>
            <div style={styles.email}>sales@gamewiki.com</div>
            <div style={styles.email}>info@gamewiki.com</div>
          </div>

          {/* Social Media Section */}
          <div style={styles.column}>
            <h2 style={styles.header}>Follow Us</h2>
            <div style={styles.socialLinks}>
              <a
                href="https://twitter.com/gamewiki"
                style={styles.socialButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                href="https://facebook.com/gamewiki"
                style={styles.socialButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com/gamewiki"
                style={styles.socialButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com/company/gamewiki"
                style={styles.socialButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;