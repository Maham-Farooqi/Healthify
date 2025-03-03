import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa"; 
import { useAuth } from "./AuthContext"; 

const AdminHeader = ({ isLoggedIn }) => {
  const [showPopup, setShowPopup] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate(); 

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const handleLogout = () => {
    logout(); 
    navigate("/login"); 
  };

  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <img
          src="../Asset/logo.png"
          alt="Healthify Logo"
          style={styles.logo}
        />
        <h1 style={styles.title}>Healthify</h1>
      </div>

      <nav style={styles.nav}>
        <Link to="/a" style={styles.link}>Home</Link>
        <Link to="/manage-users" style={styles.link}>Manage Users</Link>
        <Link to="/manage-stock" style={styles.link}>Update Stock</Link>
        <div style={styles.profileIconContainer} onClick={togglePopup}>
          <FaUserCircle size={24} style={styles.icon} />
          {showPopup && (
            <div style={styles.popup}>
              <Link to="/admin-profile" style={styles.popupItem}>
                View Profile
              </Link>
              <div style={styles.popupItem} onClick={handleLogout}>
                Logout
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#5B8B35",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    fontFamily: "'Roboto', sans-serif",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    width: "50px",
    height: "40px",
    marginRight: "10px",
  },
  title: {
    fontSize: "35px",
    fontWeight: "700",
    margin: 0,
    fontFamily: "'Roboto', sans-serif",
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "400",
    fontFamily: "'Roboto', sans-serif",
  },
  icon: {
    verticalAlign: "middle",
    cursor: "pointer",
  },
  profileIconContainer: {
    position: "relative",
  },
  popup: {
    position: "absolute",
    top: "30px",
    right: "0",
    backgroundColor: "white",
    color: "#333",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
    overflow: "hidden",
    zIndex: 1000,
    width: "120px",
  },
  popupItem: {
    display: "block",
    padding: "10px 15px",
    textDecoration: "none",
    color: "#5B8B35",
    fontSize: "14px",
    borderBottom: "1px solid #ddd",
    fontFamily: "'Roboto', sans-serif",
    cursor: "pointer",
  },
};

export default AdminHeader;
