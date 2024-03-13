import React, { useState, useEffect } from "react";
import SectionTitle from "../../components/SectionTitle";
import emailjs from "emailjs-com"; // Import emailjs library

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const user = {
    name: "Anand Gautam",
    email: "anandgautam062003@gmail.com",
    mobile: "6200961600",
    country: "India",
  };
  useEffect(() => {
    emailjs.init("uMzSXvYsZJPNQVlRg");
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      to_name: "Anand Gautam",
      from_email: formData.email,
      to_email: "anandgautam062003@gmail.com",
      message: formData.message,
    };

    emailjs
      .send("service_dy88ep7", "template_m1rn0xj", templateParams)
      .then(() => {
        alert("Thank You, I will get back to you soon");
      })
      .catch((err) => {
        console.error("Email error:", err);
        alert("Something went wrong! Please try again.");
      });

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <SectionTitle title="Say Hello" />
      <div className="flex sm:flex-col items-center justify-between">
        {/* Display user information */}
        <div className="flex flex-col gap-1 ">
          <p className="text-tertiary text-sm">{"{"}</p>
          {Object.keys(user).map((key, index) => (
            <p key={index} className="ml-5 text-sm">
              <span className="text-tertiary">{key} : </span>
              <span className="text-tertiary">{user[key]}</span>
            </p>
          ))}
          <p className="text-tertiary text-sm">{"}"}</p>
        </div>
        {/* Contact Form */}
        <div className="mt-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-4 text-tertiary">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="text-black"
              />
            </div>

            <div className="mb-4 text-tertiary">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="text-black"
              />
            </div>

            <div className="mb-4 text-tertiary">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="text-black "
              ></textarea>
            </div>

            <button
              type="submit"
              className="submit-button border-2 border-tertiary text-tertiary px-10 py-3 rounded"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Display Lottie animation */}
        <div className="h-[400px] px-2">
          <dotlottie-player
            src="https://lottie.host/4474fa2d-6428-4421-8ea4-8c68aee6f2b4/FquaJ1qDbU.json"
            background="transparent"
            speed="1"
            autoplay
            loop
          ></dotlottie-player>
        </div>
      </div>
    </div>
  );
}
