import { message } from "antd";
import axios from "axios";
import React from "react";
import { useSpring, animated } from "react-spring";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

function Login() {
  const [user, setUser] = React.useState({
    username: "",
    password: "",
  });

  const login = async () => {
    try {
      const response = await axios.post("/api/portfolio/admin-login", user);
      if (response.data.success) {
        message.success(response.data.message);
        localStorage.setItem("token", JSON.stringify(response.data));
        window.location.href = "/admin";
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  // Add a fade-in animation
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });

  return (
    <animated.div
      style={fadeIn}
      className="flex justify-center items-center h-screen bg-gradient-to-r from-primary to-secondary"
    >
      <div className="w-96 p-8 bg-white shadow-md rounded-md">
        <h1 className="text-3xl font-bold mb-6 text-primary text-center">
          Portfolio - Admin Login
        </h1>
        <hr className="border-t border-gray-300 mb-6" />
        <div className="mb-4 relative">
          <input
            type="text"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder="Username"
            className="input-field pl-10"
          />
          <UserOutlined className="absolute left-3 top-2 text-gray-500" />
        </div>
        <div className="mb-6 relative">
          <input
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Password"
            className="input-field pl-10"
          />
          <LockOutlined className="absolute left-3 top-2 text-gray-500" />
        </div>
        <button
          className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-all duration-300"
          onClick={login}
        >
          Login
        </button>
      </div>
    </animated.div>
  );
}

export default Login;
