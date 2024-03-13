import React from "react";
import Logo from "./Logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/admin");
  };

  const handleLogoutClick = () => {
    localStorage.removeItem("token");
    navigate("/admin-login");
  };

  const handleToAdminClick = () => {
    navigate("/admin");
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  const isUserLoggedIn = localStorage.getItem("token");

  return (
    <div className="p-5 bg-primary flex justify-between items-center sm:h-[20vh]">
      <img
        alt=""
        src={Logo}
        className="logo"
        onClick={handleLogoClick}
        style={{ cursor: "pointer" }}
      />
      {isUserLoggedIn ? (
        <div>
          <button
            className="submit-button border-2 border-white text-white px-2 py-1 rounded margin-right:10px"
            type="logout"
            onClick={handleLogoutClick}
            style={{ marginRight: "10px" }}
          >
            Logout
          </button>
          <button
            className="submit-button border-2 border-white text-white px-2 py-1 rounded"
            type="admin"
            onClick={handleToAdminClick}
          >
            AdminPage
          </button>
        </div>
      ) : (
        <button
          className="submit-button border-2 border-white text-white px-2 py-1 rounded"
          type="login"
          onClick={handleLoginClick}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
