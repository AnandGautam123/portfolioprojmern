import React from "react";
import { Form, Input, message } from "antd";
import { useSelector } from "react-redux";
import axios from "axios";

function AdminAbout() {
  const { portfolioData } = useSelector((state) => state.root);
  const onFinish = async (values) => {
    try {
      const tempSkills = values.skills.split(",");
      values.skills = tempSkills;
      const response = await axios.post("/api/portfolio/update-about", {
        ...values,
        _id: portfolioData.about._id,
      });
      console.log("Server Response:", response.data);
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      console.error("Error:", error.message);
      message.error(error.message);
    }
  };
  return (
    <div>
      <Form
        onFinish={onFinish}
        layout="vertical"
        initialValues={{
          ...portfolioData.about,
          skills: portfolioData.about.skills.join(","),
        }}
      >
        <Form.Item name="lottieURL" label="Lottie URL">
          <Input placeholder="Lottie URL" />
        </Form.Item>
        <Form.Item name="description1" label="Description1">
          <textarea placeholder="description1" />
        </Form.Item>
        <Form.Item name="description2" label="Description2">
          <textarea placeholder="description2" />
        </Form.Item>
        <Form.Item name="skills" label="Skills">
          <textarea placeholder="Skills" />
        </Form.Item>
        <div className="flex justify-end w-full" label="welcomeText">
          <button className="px-10 py-2  bg-primary text-white" type="submit">
            SAVE
          </button>
        </div>
      </Form>
    </div>
  );
}

export default AdminAbout;
